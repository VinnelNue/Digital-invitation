<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

require_once __DIR__ . '/../conn.php';


$sql = "SELECT name, message, from_color, to_color FROM rsvp ORDER BY id DESC";
$result = $conn->query($sql);

$rows = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
}

echo json_encode(['success' => true, 'data' => $rows]);
$conn->close();
?>
