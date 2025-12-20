<?php
declare(strict_types=1);

/*
 * Simple & secure contact form endpoint
 * Fields required: name, email, message
 */

session_start();

/* =========================
   CONFIG
========================= */
$allowedOrigins = [
    'https://hanisch-dev.de',
    'https://www.hanisch-dev.de'
];

$recipientEmail = 'calvin.hanisch@gmail.com';
$fromEmail      = 'noreply@hanisch-dev.de';

/* =========================
   CORS & METHOD
========================= */
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (!in_array($origin, $allowedOrigins, true)) {
    http_response_code(403);
    exit('Forbidden');
}

header("Access-Control-Allow-Origin: $origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method Not Allowed');
}

/* =========================
   PARSE INPUT
========================= */
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    http_response_code(400);
    exit('Invalid JSON');
}

/* =========================
   CSRF
========================= */
if (
    empty($data['csrf']) ||
    empty($_SESSION['csrf']) ||
    !hash_equals($_SESSION['csrf'], $data['csrf'])
) {
    http_response_code(403);
    exit('Invalid CSRF token');
}

/* =========================
   VALIDATION
========================= */
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

if (strlen($message) < 10 || strlen($message) > 2000) {
    http_response_code(400);
    exit('Invalid message length');
}

/* =========================
   RATE LIMIT (per IP)
========================= */
$ip   = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$file = sys_get_temp_dir() . '/contact_' . md5($ip);

if (file_exists($file) && time() - filemtime($file) < 60) {
    http_response_code(429);
    exit('Too many requests');
}

touch($file);

/* =========================
   SEND MAIL
========================= */
$subject = "Kontaktformular von {$name}";
$body = "
<b>Name:</b> {$name}<br>
<b>Email:</b> {$email}<br><br>
<b>Nachricht:</b><br>
" . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=utf-8',
    "From: {$fromEmail}",
    "Reply-To: {$email}"
];

mail(
    $recipientEmail,
    $subject,
    $body,
    implode("\r\n", $headers)
);

http_response_code(200);
echo 'OK';
