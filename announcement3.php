<?php
require_once "service_information/function.php";
$error ="";

$opis=strip_tags($_POST['opis']); // описание
$telk = strip_tags($_POST['telk']); // телефон
$kontrogent=strip_tags($_POST['kontrogent']); // 0-физ.лицо 1-организация
$name1=strip_tags($_POST['name1']); // имя
$name4=strip_tags($_POST['name4']); // Название организации
$proizvod=strip_tags($_POST['proizvod']); // производитель
$model=strip_tags($_POST['model']); //модель

if ($proizvod==""){
	$error = "er14";
	echo $error;
	exit;
}

if ($model==""){
	$error = "er15";
	echo $error;
	exit;
}

if ($name1=="" && $kontrogent=="0"){
	$error = "er12";
	echo $error;
	exit;
}

if ($name4==""  && $kontrogent=="1"){
	$error = "er13";
	echo $error;
	exit;
}

if ($opis == ""){
	$error = "er1";
	echo $error;
	exit;
}

if ($telk == ""){
	$error = "er2";
	echo $error;
	exit;
}
//Изменим структуру $_FILES
foreach($_FILES['myfile'] as $key => $value) {
	foreach($value as $k => $v) {
		$_FILES['myfile'][$k][$key] = $v;
	}
// Удалим старые ключи
unset($_FILES['myfile'][$key]);
}


if ($_FILES['myfile'][0]['size']>=1000001){
	$error = "er3";
	echo $error;
	exit;
}
if ($_FILES['myfile'][1]['size']>=1000001){
	$error = "er4";
	echo $error;
	exit;
}

if ($_FILES['myfile'][2]['size']>=1000001){
	$error = "er5";
	echo $error;
	exit;
}
if ($_FILES['myfile'][3]['size']>=1000001){
	$error = "er6";
	echo $error;
	exit;
}
if ($_FILES['myfile'][4]['size']>=1000001){
	$error = "er7";
	echo $error;
	exit;
}
if ($_FILES['myfile'][5]['size']>=1000001){
	$error = "er8";
	echo $error;
	exit;
}
if ($_FILES['myfile'][6]['size']>=1000001){
	$error = "er9";
	echo $error;
	exit;
}
if ($_FILES['myfile'][7]['size']>=1000001){
	$error = "er10";
	echo $error;
	exit;
}
if ($_FILES['myfile'][8]['size']>=1000001){
	$error = "er11";
	echo $error;
	exit;
}

connectDB();//открыть БД
$typTeh=strip_tags($_POST['typTeh']); // тип пехники
$typTeh2=strip_tags($_POST['typTeh2']); // под тип пехники
//$opis=strip_tags($_POST['opis']); // описание
$cesh = strip_tags($_POST['cesh']); // стоимость оренды
$otvet = strip_tags($_POST['otvet']); // скорость ответа
//$telk = strip_tags($_POST['telk']); // телефон
$telk_skr = strip_tags($_POST['telk_skr']); // скрыть телефон
$site = strip_tags($_POST['site']); // город
if ($telk_skr=='on'){ $telk_skr=1;}
else {$telk_skr=0;}

$oplata = strip_tags($_POST['oplata']); // нал безнал
$dosavka = strip_tags($_POST['dosavka']);// способ доставки
$key = strip_tags($_POST['key']);// ключ 1
$key2 = strip_tags($_POST['key2']);// ключ 2
$id_logo = getUserEntranceID($key, $key2);
$id_logo = $id_logo[0]["id"];


$name2=strip_tags($_POST['name2']); // фамилия
$name3=strip_tags($_POST['name3']); // отчество

//  if(isset($_FILES['myfile'])){
  //$req = false; // изначально переменная для "ответа" - false
	// Приведём полученную информацию в удобочитаемый вид
	//   ob_start();
	//  echo '<ptr>';
	//  echo 'log:', $_POST['id_logo'];
	// echo 'Дата загрузки: '	, $_POST['date_upl'] , '<br>';	
	//echo '"site": ' 					, $_POST['site'], '<br>';
	//echo 'typTeh: '					, $_POST['typTeh'], '<br>';
	//echo 'proizvod: '				, $_POST['proizvod'], '<br>';
	// echo 'model: '					, $_POST['model'], '<br>'; 
	// echo 'opis: '						, $_POST['opis'], '<br>';
	// echo 'stoimost: '				, $_POST['stoimost'], '<br>';
	// echo 'otvet: '					, $_POST['otvet'], '<br>';
	// echo 'tel: '						, $_POST['tel'], '<br>';
	// echo 'check: '					, $_POST['check'], '<br>';
	// echo 'payment_method: '	, $_POST['payment_method'], '<br>';
	// echo 'city_of_work: '		, $_POST['city_of_work'], '<br>';
	// echo 'delivery: '				, $_POST['delivery'], '<br>';
	//  print_r($_FILES['myfile']); // выведем на экран массив полученных вайлов
	// echo 'rge4tg4tg:', $telk_skr;
	//  echo '</pre>';
	//   $req = ob_get_contents();
	
	//   ob_end_clean();
	//   echo json_encode($req); // вернем полученное в ответе
	
	
	//Изменим структуру $_FILES
	// foreach($_FILES['myfile'] as $key => $value) {
	// 	foreach($value as $k => $v) {
	// 		$_FILES['myfile'][$k][$key] = $v;
    // 	}
    // // Удалим старые ключи
    // unset($_FILES['myfile'][$key]);
	// }
	if ($_FILES["myfile"][0]["name"]==NULL){ // нету файла
		$imj1=NULL;
	}else{ // проверки прошли
		$imj1=addslashes(file_get_contents($_FILES['myfile'][0]['tmp_name']));
	}
	if ($_FILES["myfile"][1]["name"]==NULL){ // нету файла
		$imj2=NULL;
	}else{ // проверки прошли
		$imj2=addslashes(file_get_contents($_FILES['myfile'][1]['tmp_name']));
	}

//	$imj2=addslashes(file_get_contents($_FILES['myfile'][1]['tmp_name']));
	if ($_FILES["myfile"][2]["name"]==NULL){ // нету файла
		$imj3=NULL;
	}else{ // проверки прошли
		$imj3=addslashes(file_get_contents($_FILES['myfile'][2]['tmp_name']));
	}
	//$imj3=addslashes(file_get_contents($_FILES['myfile'][2]['tmp_name']));
	if ($_FILES["myfile"][3]["name"]==NULL){ // нету файла
		$imj4=NULL;
	}else{ // проверки прошли
		$imj4=addslashes(file_get_contents($_FILES['myfile'][3]['tmp_name']));
	}
	//$imj4=addslashes(file_get_contents($_FILES['myfile'][3]['tmp_name']));
	if ($_FILES["myfile"][4]["name"]==NULL){ // нету файла
		$imj5=NULL;
	}else{ // проверки прошли
		$imj5=addslashes(file_get_contents($_FILES['myfile'][4]['tmp_name']));
	}
	//$imj5=addslashes(file_get_contents($_FILES['myfile'][4]['tmp_name']));
	if ($_FILES["myfile"][5]["name"]==NULL){ // нету файла
		$imj6=NULL;
	}else{ // проверки прошли
		$imj6=addslashes(file_get_contents($_FILES['myfile'][5]['tmp_name']));
	}
	//$imj6=addslashes(file_get_contents($_FILES['myfile'][5]['tmp_name']));
	if ($_FILES["myfile"][6]["name"]==NULL){ // нету файла
		$imj7=NULL;
	}else{ // проверки прошли
		$imj7=addslashes(file_get_contents($_FILES['myfile'][6]['tmp_name']));
	}
	//$imj7=addslashes(file_get_contents($_FILES['myfile'][6]['tmp_name']));
	if ($_FILES["myfile"][7]["name"]==NULL){ // нету файла
		$imj8=NULL;
	}else{ // проверки прошли
		$imj8=addslashes(file_get_contents($_FILES['myfile'][7]['tmp_name']));
	}
	//$imj8=addslashes(file_get_contents($_FILES['myfile'][7]['tmp_name']));
	if ($_FILES["myfile"][8]["name"]==NULL){ // нету файла
		$imj9=NULL;
	}else{ // проверки прошли
		$imj9=addslashes(file_get_contents($_FILES['myfile'][8]['tmp_name']));
	}
	//$imj9=addslashes(file_get_contents($_FILES['myfile'][8]['tmp_name']));

	//$telk=$_FILES["myfile"][0]["name"];

	setMes($typTeh2, $typTeh, $proizvod, $model, $opis, $cesh, $otvet, $telk, $telk_skr, $oplata, $dosavka, $imj1, $imj2, $imj3, $imj4, $imj5, $imj6, $imj7, $imj8, $imj9, $id_logo, $kontrogent, $name1, $name2, $name3, $name4, $site);//запись юзера в БД

	// Загружаем все картинки по порядку
	// foreach ($_FILES['myfile'] as $k => $v) {
	// 	$imagename=$_FILES["myfile"][$k]["name"];
    // 	$imagetmp=addslashes(file_get_contents($_FILES['myfile'][$k]['tmp_name']));
    	//se($imagetmp,$imagename);
    // Загружаем по одному файлу
    //$_FILES['myimage'][$k]['tmp_name'];
    //$_FILES['upload'][$k]['error'];
	// }

	closeDB();// закрыть БД
	$error = "p";
	echo $error;
	// exit;
// }

?>