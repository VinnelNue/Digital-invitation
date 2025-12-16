<?php
require_once __DIR__ . '/../conn.php';
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Ambil data JSON dari frontend
$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data['name'] ?? '');
$status = trim($data['status'] ?? '');
$jumlah_tamu = isset($data['jumlah_tamu']) ? (int)$data['jumlah_tamu'] : 1;
$message = trim($data['message'] ?? '');
$from_color = trim($data['fromColor'] ?? '#fbc2eb');
$to_color   = trim($data['toColor'] ?? '#a6c1ee');

// Validasi minimal
if (!$name || !$status) {
    echo json_encode([
        'success' => false,
        'error' => 'Nama dan status harus diisi'
    ]);
    exit;
}

// Cek duplikat berdasarkan name + status
$stmt_check = $conn->prepare("SELECT id FROM rsvp WHERE name = ? AND status = ?");
$stmt_check->bind_param("ss", $name, $status);
$stmt_check->execute();
$stmt_check->store_result();

if ($stmt_check->num_rows > 0) {
    echo json_encode([
        'success' => false,
        'error' => 'RSVP sudah dikirim sebelumnya'
    ]);
    $stmt_check->close();
    $conn->close();
    exit;
}

$stmt_check->close();

// Insert data baru
$stmt = $conn->prepare("INSERT INTO rsvp (name, status, jumlah_tamu, message, from_color, to_color) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssisss", $name, $status, $jumlah_tamu, $message , $from_color, $to_color);

if ($stmt->execute()) {
    echo json_encode([
        'success' => true,
        'message' => 'RSVP berhasil dikirim!'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'error' => 'Gagal menyimpan RSVP'
    ]);
}

$stmt->close();
$conn->close();
?>
