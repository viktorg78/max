<?php
//Вход в сайт
require_once "service_information/function.php";
$email=strip_tags($_POST['email']);
$email=trim($email);
$pwd=strip_tags($_POST['pwd']);
$pwd=trim($pwd);
connectDB();
$error = "";
if($email == "" && $pwd == "" ){
	$error = "er1";
	echo $error;
	closeDB();
	exit;
}
elseif (!(strpos($email,'.')>0 && strpos($email,'@')>0)){
	$error = "er2";
	echo $error;
	closeDB();
	exit;
}
elseif ($pwd == "") {
	$error = "er3";
	echo $error;
	closeDB();
	exit;
}
elseif ($email == "") {
	$error = "er4";
	echo $error;
	closeDB();
	exit;
}

elseif (!entrance($email, $pwd)) {
	$error = "er5";
	echo $error;
	closeDB();
	exit;
}

// Изменяем актуальные данные
setUserEntrance($email);
 
closeDB();
$error = true;
echo $error;
?>
