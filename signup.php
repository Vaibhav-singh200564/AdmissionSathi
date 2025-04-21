<!-- signup.php -->
<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Signup</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-purple-100 to-indigo-200 h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 class="text-2xl font-bold mb-4 text-center">Create Account</h2>
    <form action="send_otp.php" method="POST" class="space-y-4">
      <input type="text" name="name" placeholder="Your Name" required class="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Your Email" required class="w-full p-2 border rounded" />
      <button type="submit" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Send OTP</button>
    </form>
  </div>
</body>
</html>
