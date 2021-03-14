<?php
// обработчик удаления диалога
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$deldialog = $_POST['deldialog'];
$key=$_POST['key'];
$key2=$_POST['key2'];
$error = "";

$error = "";
if ($deldialog == ""){
	$error = "er1";
	echo $error;
	exit;
}

connectDB();//открыть БД   
    $id_logo = getUserEntranceID($key, $key2);
    $id_logo = $id_logo[0]["id"];
    DelDialog($deldialog, $id_logo);
closeDB();// закрыть БД

$error = true;

echo $error;
?>