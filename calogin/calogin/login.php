<?php
session_start();
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $result = $stmt->get_result();
  if ($result->num_rows === 1) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
      $_SESSION['user'] = $row['name'];
      // echo "<script>alert('Login successful! Redirecting...'); window.location.href='main.html';</script>";
      echo "<script>alert('Login successful! Redirecting...'); window.location.href='main.php';</script>";      
    } else {
      echo "<script>alert('Wrong password'); window.location.href='index.php';</script>";
    }
  } else {
    echo "<script>alert('User not found'); window.location.href='index.php';</script>";
  }
}
?>
