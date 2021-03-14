<?php
//регистрация на сайте
require_once "service_information/function.php";
$email=strip_tags($_POST['email']);
$email=trim($email);
$pwd1=strip_tags($_POST['pwd1']);
$pwd1=trim($pwd1);
$pwd2=strip_tags($_POST['pwd2']);
$pwd2=trim($pwd2);
connectDB();
$error = "";
if($email == "" && $pwd1 == "" && $pwd2 == ""){
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
elseif ($pwd1 != $pwd2 ) {
	$error = "er3";
	echo $error;
	closeDB();
	exit;
}
elseif ($pwd1 == "" && $pwd2 == "") {
	$error = "er4";
	echo $error;
	closeDB();
	exit;
}
elseif (getUserEmail($email)) {
	$error = "er5";
	echo $error;
	closeDB();
	exit;
}

 
$error = setUser($email, $pwd1);//запись юзера в БД	
closeDB();
$error = true;

echo $error;


?>
