<?php
$proizvod=strip_tags($_POST['proizvod']);
$typTeh=strip_tags($_POST['typTeh']);
$model=strip_tags($_POST['model']);
$opis=strip_tags($_POST['opis']);
$stoimost=strip_tags($_POST['stoimost']);
$otvet=strip_tags($_POST['otvet']);
$tel=strip_tags($_POST['tel']);
$telk_skr=strip_tags($_POST['telk_skr']);
$message_pri=strip_tags($_POST['message_pri']);
$site=strip_tags($_POST['site']);
//$file=strip_tags($_POST['file']);
//$file=$_POST['file'];
///$imagename=$_FILES[$file]["name"];
//$imagetmp=addslashes(file_get_contents($_FILES[$file]['tmp_name']));



require_once "service_information/function.php";
	connectDB();
	 $error="";
	// if ($Name=="" && $Email=="" && $Parol1=="" && $Parol2=="") $error="er1";
	// elseif ($Name=="") $error="er2";
	// elseif (!(strpos($Email,'.')>0 && strpos($Email,'@')>0)) $error="er3";
	// elseif ($Parol1!=$Parol2) $error="er4";
	// elseif ($Parol1=="" || $Parol2=="")	$error="er5";
	// elseif(getUserEmail($Email)) $error="er6";
	// if($error!=""){
	// 	echo $error;
	// 	closeDB();
	// 	exit;
	// }

	//$imagename=$_FILES["file"]["name"];
	//Получаем содержимое изображения и добавляем к нему слеш
	//$imagetmp=addslashes(file_get_contents($_FILES['file']['tmp_name']));
	
	setMes($typTeh, $proizvod, $model, $opis, $stoimost, $otvet, $tel, $telk_skr, $message_pri, $site, $imagetmp);//запись юзера в БД
	//setMes(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, $imagetmp);
	//se($imagetmp,$imagename);
	closeDB();
	// // пишем юзеру письмо
	// require_once "mailf.php";
	// //mailtext('ssl://smtp.yandex.ru', '465', 'servis@ekodvor29.ru', 'Ylaha12', 'utf-8', 'Имя тест', 'viktorg78@gmail.com', 'Тестер', 'Тест письма тема без файла', 'Привет. проверка. Ок. без файла'); 

	
	// $message = '
	// Регистрация
	
	// Регистрация на сайте "Картридж плюс"
	// Имя: '.$Name.'
	// E-mail: '.$Email.'
	// Пароль: '.$Parol1.'
	// Дата: '.date("d.m.Y H:i").'
	
	// Спасибо за регистрацию на нашем сайте.
	// Письмо отправленно роботом. Отвечать на него не нужно.';
	// /*
	// $smtp_host			сервер для отправки почты
	// $smtp_port			Порт работы.
	// $smtp_username		Смените на адрес своего почтового ящика. с него будут идти письма (Логин и адрес совподают)
	// $smtp_password		Измените пароль 
	// $smtp_charset		кодировка сообщений. (windows-1251 или utf-8, итд) 
	// $smtp_from			Ваше имя - или имя Вашего сайта. Будет показывать при прочтении в поле "От кого" 
	// $smtp_to			адресс адресата
	// $smtp_to_name		имя получателя 
	// $smtp_subject		тема письма 
	// $smtp_text			текст письма
	// */

	
	 
	// mailtext($smtp_host, $smtp_port, $smtp_username, $smtp_password, $smtp_charset, $smtp_from, $Email, $Name, 'Регистрация', $message); 
    
	
	// $err=true;
	
	
	// //Пишем письмо админу
	// $messagead = '	
	// На сайте "Картридж плюс" зарегистрировался новый пользователь
	// Имя: '.$Name.'
	// E-mail: '.$Email.'
	// Дата: '.date("d.m.Y H:i");
	
	// //mailtext($smtp_username, $smtp_port, $smtp_username, $smtp_password, $smtp_charset, $smtp_from, $to2, 'Робот', 'Регистрация нового пользователя', $messagead); 
	// mailtext($smtp_host, $smtp_port, $smtp_username, $smtp_password, $smtp_charset, $smtp_from, $to2, 'Робот', 'Регистрация нового пользователя', $messagead); 
    

	$error=true;
	
	echo $error;
?>