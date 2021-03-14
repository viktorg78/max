<?php
$code=strip_tags($_POST['code']);
$code=trim($code);


$error = "";
if ($code == ""){
	$error = "er1";
	echo $error;
	exit;
}	
	
$error = true;

echo $error;

?>


	