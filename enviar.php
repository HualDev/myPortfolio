<?php
$nombre = $_POST['name'];
$mail = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$messaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$messaje .= "Su e-mail es: " . $mail . " \r\n";
$messaje .= "Mensaje: " . $_POST['messaje'] . " \r\n";
$messaje .= "Enviado el " . date('d/m/Y', time());

$para = 'hucastillo@gmail.com';
$asunto = 'Mensaje de mi sitio web';

mail($para, $subject, utf8_decode($messaje), $header);

header("Location:index.html");
?>