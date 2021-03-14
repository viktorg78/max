<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$mess=strip_tags($_POST['mess']);
$mess=trim($mess);
$diolog=$_POST['diolog'];
$key=$_POST['key'];
$key2=$_POST['key2'];

$error = "";
if ($mess == ""){
	$error = "er1";
	echo $error;
	exit;
}

if($diolog == ""){
	$error = "er2";
	echo $error;
	exit;
}
connectDB();//открыть БД
    $id_logo = getUserEntranceID($key, $key2);
	$id_logo = $id_logo[0]["id"];
    setChat($id_logo, $mess, $diolog); 
closeDB();// закрыть БД

$error = true;

echo $error;

?>