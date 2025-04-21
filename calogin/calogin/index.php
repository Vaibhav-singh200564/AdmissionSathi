<!-- index.php -->
<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
        window.location.href = "main.html"; // or use "/" if main page is root
      </script>
</head>
<body class="bg-gradient-to-r from-blue-100 to-blue-300 h-screen flex items-center justify-center">
  <div class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
    <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
    <form action="login.php" method="POST" class="space-y-4">
      <input type="email" name="email" placeholder="Email" required class="w-full p-2 border rounded" />
      <input type="password" name="password" placeholder="Password" required class="w-full p-2 border rounded" />
      <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
    </form>
    <p class="text-center mt-4">
      New user? <a href="signup.php" class="text-blue-600 hover:underline">Create Account</a>
    </p>
  </div>
</body>
</html>
