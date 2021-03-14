<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$id_mess=$_POST['id_mess'];
$key=$_POST['key'];
$key2=$_POST['key2'];

$error = "";
if ($id_mess == ""){
	$error = "er1";
	echo $error;
	exit; 
}

connectDB();//открыть БД
    $id_logo = getUserEntranceID($key, $key2);
	$id_logo = $id_logo[0]["id"];
    setfavorites($id_logo, $id_mess);
closeDB();// закрыть БД

$error = true;

echo $error;

?>