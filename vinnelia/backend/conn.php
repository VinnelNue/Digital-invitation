<?php
require_once __DIR__ . '/load_env.php';
loadEnv(); // load .env

$host    = $_ENV['DB_HOST'] ?? 'localhost';
$user    = $_ENV['DB_USER'] ?? 'root';
$pass    = $_ENV['DB_PASS'] ?? '';
$db      = $_ENV['DB_NAME'] ?? '';
$charset = $_ENV['DB_CHARSET'] ?? 'utf8mb4';

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$conn->set_charset($charset);
?>
