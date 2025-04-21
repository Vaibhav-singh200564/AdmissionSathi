<?php
session_start();
include 'db.php';

if (!isset($_SESSION['verified']) || $_SESSION['verified'] !== true) {
  header("Location: signup.php");
  exit();
}

if (isset($_POST['create'])) {
  $name = $_SESSION['name'];
  $email = $_SESSION['email'];
  $password = $_POST['password'];
  $confirm = $_POST['confirm'];

  if ($password === $confirm) {
    $hash = password_hash($password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hash);
    $stmt->execute();
    session_destroy();
    echo "<script>alert('Account created!'); window.location.href='index.php';</script>";
  } else {
    $error = "Passwords do not match.";
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Create Password</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-green-100 to-teal-200 h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Set Your Password</h2>
    <form method="POST" class="space-y-4">
      <input type="password" name="password" placeholder="Password" required class="w-full p-2 border rounded" />
      <input type="password" name="confirm" placeholder="Confirm Password" required class="w-full p-2 border rounded" />
      <button type="submit" name="create" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Create Account</button>
    </form>
    <?php if (isset($error)) echo "<p class='text-red-600 text-center mt-4'>$error</p>"; ?>
  </div>
</body>
</html>
