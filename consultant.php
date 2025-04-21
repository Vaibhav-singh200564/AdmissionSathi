<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Join Us Now</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 class="text-3xl font-bold text-center mb-2">Join Us Now</h1>
        <h3 class="text-md text-center mb-6 text-gray-700">Book a free call from our consultant and grab your dream college</h3>

        <form action="submit.php" method="POST" class="space-y-4">
            <input type="text" name="name" placeholder="Name" required class="w-full p-2 border rounded">
            <input type="email" name="email" placeholder="Email" required class="w-full p-2 border rounded">
            <input type="text" name="phone" placeholder="Phone Number" required class="w-full p-2 border rounded">
            <input type="text" name="marks_10" placeholder="10th %" required class="w-full p-2 border rounded">
            <input type="text" name="marks_12" placeholder="12th %" required class="w-full p-2 border rounded">
            <input type="text" name="state_preference" placeholder="State Preference" required class="w-full p-2 border rounded">
            <input type="text" name="college_preference" placeholder="College Preference" required class="w-full p-2 border rounded">

            <button type="submit" class="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">Submit</button>
        </form>
    </div>
</body>
</html>