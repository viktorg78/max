<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$error ="";
$key = strip_tags($_POST['id_f']);// ключ 1
$key2 = strip_tags($_POST['id_f2']);// ключ 2

if ($_FILES['myfile']['size']>=100000){
	$error = "er10";
	echo $error;
	exit;
}

if ($_FILES["myfile"]["name"]==NULL){ // нету файла
	$error = "er9";
	echo $error;
	exit;
}


connectDB();//открыть БД
$id_logo = getUserEntranceID2($key, $key2);
$logo=addslashes(file_get_contents($_FILES['myfile']['tmp_name']));
save_logo($id_logo, $logo);
closeDB();// закрыть БД
$error = 'p';
echo $error;
?>