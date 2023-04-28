<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	$name = $_POST['name'];
	$email = $_POST['email'];
	if (strlen($name) > 0 && filter_var($email, FILTER_VALIDATE_EMAIL)) {
		echo 'User is valid!';
	} else {
		echo 'User is not valid.';
	}
}
?>
