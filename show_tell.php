<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/cooki.php";
$code=strip_tags($_POST['code']);
connectDB();//открыть БД
$DMessageTell = getBDMessageTell($code);
$code = "ТЕЛ: ".$DMessageTell[0]["telk"]; // телеыон
$code1 = $DMessageTell[0]["telk_skr"]; // если 1 то телефонскрыть если 0 то нет
closeDB();
if ($fUser!=NULL){
    $error = $code;
    }
    elseif($code1==1) {
        $error = "Телефон только для зарегистрированных пользователей!<br />Пожалуйста <a href='/regdata'>зарегистрируйтесь</a>.";
        }
        else{
            $error = $code;
        } 
echo $error;
?>