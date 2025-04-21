<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Verify OTP</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-yellow-100 to-orange-200 h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
    <h2 class="text-2xl font-bold mb-6 text-center">Verify OTP</h2>
    <form action="" method="POST" class="space-y-4">
      <input type="number" name="otp_entered" placeholder="Enter OTP" required class="w-full p-2 border rounded" />
      <button type="submit" name="verify" class="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600">Verify</button>
    </form>
    <?php
      if (isset($_POST['verify'])) {
        if ($_POST['otp_entered'] == $_SESSION['otp']) {
          $_SESSION['verified'] = true;
          echo "<p class='text-green-600 text-center mt-4 font-semibold'>✔ OTP Verified!</p>";
          echo "<script>setTimeout(() => window.location.href = 'create_password.php', 1500);</script>";
        } else {
          echo "<p class='text-red-600 text-center mt-4'>✖ Incorrect OTP. Try again.</p>";
        }
      }
    ?>
  </div>
</body>
</html>
