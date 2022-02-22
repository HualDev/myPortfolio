<?php
$nombre = $_POST['name'];
$mail = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "Mensaje: " . $_POST['messaje'] . " \r\n";
$message .= "Enviado el " . date('d/m/Y', time());

$para = 'hucastillo@gmail.com';

mail($para, $subject, utf8_decode($message), $header);

header("Location:index.html");

?>