<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$diolog=$_POST['diolog']; //ид диалога
$error = "";

if($diolog == ""){
	$error = "er2";
	echo $error;
	exit;
}

$error = true;

echo $error;

?>