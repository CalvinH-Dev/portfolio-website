<?php
declare(strict_types=1);

// Session starten (für CSRF-Token)
session_start();

// Token erzeugen, falls noch nicht vorhanden
if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}

// JSON-Antwort zurückgeben
header('Content-Type: application/json');
echo json_encode([
    'csrf' => $_SESSION['csrf']
]);
