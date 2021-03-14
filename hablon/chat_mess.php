<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/cooki.php";

$flagSuhmes = empty ($_GET["mes"]);// Проверка на существование переменной.
    if ($flagSuhmes)  $mes = ""; 
    else 
        $mes=$_GET["mes"];

// $mes = $_GET['mes'];
connectDB();//открыть БД
$mess_ = reviewChatDialog($mes);
$text_ = "";
$id_logo = getUserEntranceID($key, $key2);
closeDB();// закрыть БД
$id_logo = $id_logo[0]["id"];
for ($i=0; $i<count($mess_);$i++){ 
	if ($mess_[$i]['id_I']==$id_logo) $text_ = $text_."Я > ".$mess_[$i]['message']."\n";
	else $text_ = $text_."Апанент > ".$mess_[$i]['message']."\n";	
}


echo $text_;
?>
