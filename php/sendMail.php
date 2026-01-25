<?php
declare(strict_types=1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/Exception.php';
require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';

session_start();

/* ========================= CONFIG ========================= */
$allowedOrigins = [
    'https://hanisch-dev.de',
    'https://www.hanisch-dev.de'
];

$recipientEmail = 'info@hanisch-dev.de';
$fromEmail      = 'info@hanisch-dev.de'; // ← MUSS EXISTIERENDE MAIL ADRESSE SEIN

/* SMTP CONFIG (Hostinger SSL) */
$smtpHost   = 'smtp.hostinger.com';
$smtpUser   = 'info@hanisch-dev.de';     // ← EXISTIERENDER SMTP USER
$smtpPass   = 'COPY_PW_HERE';
$smtpPort   = 465;
$smtpSecure = PHPMailer::ENCRYPTION_SMTPS;

/* ========================= CORS & METHOD ========================= */
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (!in_array($origin, $allowedOrigins, true)) {
    http_response_code(403);
    exit('Forbidden');
}

header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') exit;
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

/* ========================= INPUT ========================= */
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    exit('Invalid JSON');
}

/* ========================= CSRF ========================= */
if (
    empty($data['csrf']) ||
    empty($_SESSION['csrf']) ||
    !hash_equals($_SESSION['csrf'], $data['csrf'])
) {
    http_response_code(403);
    exit('Invalid CSRF token');
}

/* ========================= VALIDATION ========================= */
$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    exit('All fields are required');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit('Invalid email address');
}

if (preg_match('/[\r\n]/', $email)) {
    http_response_code(400);
    exit('Invalid email');
}

if (strlen($message) < 1 || strlen($message) > 2000) {
    http_response_code(400);
    exit('Invalid message length');
}

/* ========================= RATE LIMIT ========================= */
$ip   = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$file = sys_get_temp_dir() . '/contact_' . md5($ip);

if (file_exists($file) && time() - filemtime($file) < 60) {
    http_response_code(429);
    exit('Too many requests');
}
touch($file);

/* ========================= MAIL CONTENT ========================= */
$subject = "Kontaktformular von {$name}";

$htmlBody = "
<b>Name:</b> " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "<br>
<b>Email:</b> " . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "<br><br>
<b>Nachricht:</b><br>" .
nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$textBody = "Name: {$name}\nEmail: {$email}\n\nNachricht:\n{$message}";

/* ========================= SEND SMTP ========================= */
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $smtpHost;
    $mail->SMTPAuth   = true;
    $mail->Username   = $smtpUser;
    $mail->Password   = $smtpPass;
    $mail->SMTPSecure = $smtpSecure;
    $mail->Port       = $smtpPort;

    // Debug aktivieren
    $mail->SMTPDebug = 2; // 0 = aus, 1 = Befehle, 2 = Befehle + Antworten
    $mail->Debugoutput = function($str, $level) {
        echo nl2br(htmlspecialchars($str));
    };

    $mail->setFrom($fromEmail, 'Kontaktformular'); // ← EXISTIERENDER USER
    $mail->addAddress($recipientEmail);
    $mail->addReplyTo($email, $name); // ← Antwort geht an Formular-Absender

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body    = $htmlBody;
    $mail->AltBody = $textBody;

    $mail->send();
    http_response_code(200);
    echo 'OK';

} catch (Exception $e) {
    http_response_code(500);
    echo 'Mailer Error: ' . htmlspecialchars($e->getMessage());
}
