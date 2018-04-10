<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];

	$email_from = 'mujtaba.iq@gmail.com';
	$email_subject = 'New form submission';
	$email_body = 'User Name: $name.\n'.
					'User Email: $visitor.\n'.
					'User Message: $message.\n';


	$to = "mujtaba.iq@gmail.com";
	
	$headers = "From: $email_from \r\n";	

	$headers .= "Reply-To: $visitors_email \r\n";

	mail($to, $email_subject, $email_body, $headers);	

	header("Location: index.html");
?>