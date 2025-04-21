<?php
session_start();
require 'vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$email = $_POST['email'];

$_SESSION['name'] = $name;
$_SESSION['email'] = $email;

// Generate random 6-digit OTP
$otp = rand(100000, 999999);
$_SESSION['otp'] = $otp;

$mail = new PHPMailer(true);
try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'bhai17062005@gmail.com'; // your Gmail
    $mail->Password   = 'uahw alae bdqf evgo';   // your app password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom('bhai17062005@gmail.com', 'Mail');
    $mail->addAddress($email);
    $mail->Subject = 'Your OTP Code';
    $mail->Body    = "Hello $name,\nYour OTP is: $otp";

    $mail->send();
    header("Location: verify_otp.php");
} catch (Exception $e) {
    echo "OTP could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
