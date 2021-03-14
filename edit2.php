<?php
require_once "service_information/function.php";
$code=strip_tags($_POST['code']);
$code2=strip_tags($_POST['code2']);
$key1=strip_tags($_POST['key1']);
$key2=strip_tags($_POST['key2']);



$error = "";
// if ($code == ""){
// 	$error = "er1";
// 	echo $error;
// 	exit;
// }	
connectDB();//открыть БД

$id_logo = getUserEntranceID($key1, $key2);
$id_logo = $id_logo[0]["id"];
switch ($code2){
    case 1: DeleteFoto($id_logo, $code, "foto1");
            $error = 1;
            break;
    case 2: DeleteFoto($id_logo, $code, "foto2");
            $error = 2;
            break;
    case 3: DeleteFoto($id_logo, $code, "foto3");
            $error = 3;
            break;        
    case 4: DeleteFoto($id_logo, $code, "foto4");
            $error = 4;
            break;
    case 5: DeleteFoto($id_logo, $code, "foto5");
            $error = 5;
            break; 
    case 6: DeleteFoto($id_logo, $code, "foto6");
            $error = 6;
            break;
    case 7: DeleteFoto($id_logo, $code, "foto7");
            $error = 7;
            break;
    case 8: DeleteFoto($id_logo, $code, "foto8");
            $error = 8;
            break;
    case 9: DeleteFoto($id_logo, $code, "foto9");
            $error = 9;
            break;                                 
}

closeDB();// закрыть БД
//$error = true;

echo $error;

?>