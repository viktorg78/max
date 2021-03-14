<?php
require_once "service_information/function.php";
 $id=strip_tags($_POST['id']);
 $key = strip_tags($_POST['key']);// ключ 1
 $key2 = strip_tags($_POST['key2']);// ключ 2
 $p = $_POST['p'];
// $key=trim($key);


$error = "";
// if ($code == ""){
// 	$error = "er1";
// 	echo $error;
// 	exit;
// }	
	
$error = true;
connectDB();//открыть БД
// проверка пользюка

$id_logo = getUserEntranceID($key, $key2);
$id_logo = $id_logo[0]["id"];

DelMessage2($id, $id_logo);
closeDB();// закрыть БД
if ($p==1)
    $error = "p";
if ($p==0)
    $error = "o";    
echo $error;

?>