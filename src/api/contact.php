<?php 
include_once('config.php');

$_POST = json_decode(file_get_contents("php://input"),true);

if($_POST['key']===$key){
	$errors = array();
	if($_SERVER['REQUEST_METHOD'] === 'POST') {
		if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$email = $_POST['email'];
		}
		else {
			$errors[] = 'Invalid email';
		}

		if (empty($_POST['message'])) {
			$errors[] = ' Message is empty';
		}
		else {
			$message = $_POST['message'];
		}

		if (empty($_POST['name'])) {
			$errors[] = ' Name is empty';
		}
		else {
			$name = $_POST['name'];
		}

	$success=0;
	if (empty($errors)){
		$subject = "$name is contacting you.";

		$headers = "From: Contact Form <contact>" . "\r\nReply-To: $email";
		$message .= "\n\nSent by $name from $email.";
		if(mail($recipiant, $subject, $message, $headers)){
			$success = 1;
		}
		else {
			$success = 0;
		}
		echo <<<_END
		{"success":$success}
		_END;
	}

	else {
		$errors_json = json_encode($errors);	
		echo <<<_END
		{
			"success":0,
			"errors":$errors_json
		}
		_END;
	}
	}
}
?>
