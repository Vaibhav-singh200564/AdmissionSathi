<?php
include 'db1.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$marks_10 = $_POST['marks_10'];
$marks_12 = $_POST['marks_12'];
$state = $_POST['state_preference'];
$college = $_POST['college_preference'];

$stmt = $conn->prepare("INSERT INTO submissions (name, email, phone, marks_10, marks_12, state_preference, college_preference) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssss", $name, $email, $phone, $marks_10, $marks_12, $state, $college);

if ($stmt->execute()) {
    header("Location: success.html");
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>