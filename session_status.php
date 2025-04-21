<?php
session_start();
header('Content-Type: application/json');

$response = [
  'loggedIn' => isset($_SESSION['user']),
  'user' => $_SESSION['user'] ?? null
];

echo json_encode($response);
?>