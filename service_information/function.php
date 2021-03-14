<?PHP
// СПИСОК ФУНКЦИЙ:
// установка связи с БД
// ===> connectDB()
// отключение БД 
// ===> closeDB()
// создание асоциативного массива из БД
// ===> resultToArray() 
// чтение из таблици настройки
// ===> getBDParam(параметр) 
// чтение из таблици объявления
// ===> getBDMessage(номер акаунта, 0-аренда 1-продажа)
// чтение из таблици объявления2	
// ===> getBDMessage3(тип техники, 0-аренда 1-продажа) 
// чтение из таблици объявления
// ===> getBDMessage2(id объявления)
// чтение из таблици объявления ) и получения телефона
// ===> getBDMessageTell(id объявления)
// чтение из таблици	
// ===> getTabl(Имя таблицы) 
// чтение из таблицы s_type_car2 $n = тип техники в таблице s_type_car
// ===> getTablTypeTeh(тип техники в таблице s_type_car) 
// Добавить нового пользователя	
// ===> setUser(емаил, пароль) 
// Добавить нового объявления 
// ===> setMes(под тип техники, тип техники, производитель, модель, описание, стоимость, скорость ответа, телефон, скрыть телефон, нал\безнал, доставка, фото1, фото2, фото3, фото4, фото5, фото6, фото7, фото8, фото9, ид_логин, физ\организация, имя, фамилия, отчество, наименование организации, город)  
// Добавить нового объявления аренды
// ===> getMes_arend(тип техники, под тип техники, производитель, модель, описание, стоимость, скорость ответа, телефон, скрыть телефон, нал\безнал, доставка, фото1, фото2, фото3, фото4, фото5, фото6, фото7, фото8, фото9, ид_логин, физ\организация, имя, фамилия, отчество, наименование организации, город) 
// загрузка фото
// ===> setFoto(ид объявление, ид пользука, №фото, фото)
// Проверить присутствие емейда в база
// ===> getUserEmail(емайл)
// Проверка пароля и логина
// ===> entrance(емайл, пароль)
// Актуализировать данные при входе в систему
// ===> setUserEntrance(емайл)
// Если коды совпали то пользователь признан системой
// ===> getUserEntrance(ключ1, ключ2)
// получить id пользователя
// ===> getUserEntranceID2($key1, $key2)
// Удаляем объявление 
// ===> DelMessage(ид_обявления, логин)	
// удаление фото из таблицы
// ===> DeleteFoto(идентификатор пользователя, ид строки, название поля)
// кусок фото
// ===> foto1(№ фото)
// вывод одного фото.
// ==>  foto2(массив, индэкс массива , ширина, высота)
// кружки рейтинга
// ===> reiting(колличество)
// получить массив актуальных фоток. на выходе ссылки на фото
// ===> foto3(массив) 
// новое сообщение в чате
// ===> setChat(мой ИД, Сообщение, ид диалога)  
// читаем чат
// ===> reviewChat(ид аппонента, мое ид)
// чтение из таблици юзер
// ===> getTablUser(ид пользука)
// чтение из таблици юзер 
// ===> getTablUser2(e-mail)
// Ментим прочитанные сообщения
// ===> reviewChatRid(ид аппонента, мое ид)
// читаем чат через диалог
// ===> reviewChatDialog(ид диолог)
// вывести мой диалог
// ===> getDialog(ид юзера)
// вывести диалог на меня 
// ===> getDialog2(ид юзера)
// создать диалог
// ===> setDialog(ид пользователя, ид обявления по которому создается диалог)
// Удаляем диалог в месте с его сообщениями
// ===> DelDialog(ид диалога, id пользователя)
// узнаем id поллователя
// ===> idUser(Ключ1, Ключ2)
// узнаем что объявление мое
// ===> MessageTrue (ид обявления, ключ1, ключ2)
// добавить в избранное
// ===> setfavorites(id пользователя, id объявления)
// проверка обявления на избранность
// ===> flagfavorites(id пользователя, id объявления)
// вывод избранного
// ===> getfavorites(id пользователя)
// загрузка лого пользователя
// ===> save_logo(ид,  фото)
// удалить избранное
// ===> delfavorites($id)
// Чтение из таблицы s_oblast
// ===> getOblast(ид регион)
// Чтение из таблицы s_sity
// ===> getSity(ИД облости)

// ===================================================================================
// ===================================================================================
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/connect.php";
function connectDB(){//установка связи с БД
    global $host; 
    global $database;
    global $user;
    global $password;
    global $mysqli;		
    $mysqli = new mysqli($host, $user, $password, $database);

    /* проверка соединения */
    if ($mysqli->connect_errno) {
        echo"Соединение не удалось: %s\n". $mysqli->connect_error;
        exit();
    }
    else
    //	echo "Соеденение успешно";
    mysqli_set_charset($mysqli,"utf8");
}

function closeDB(){// отключение БД
global $mysqli;
$mysqli->close();
}

function resultToArray($result){//создание асоциативного массива из БД
$array= array();
    while(($row=$result->fetch_assoc())!=false){
        $array[]=$row;
    }
return $array;
}

function getBDParam($parameter){ //чтение из таблици настройки (параметр)
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM param WHERE parameter  = \"$parameter\"");				
	return resultToArray($result);
}

function getBDMessage($id_logo, $type_mes){ //чтение из таблици объявления (номер акаунта), (0-аренда 1-продажа)
	global $mysqli;
	$result = $mysqli->query("SELECT *, (SELECT type_car FROM s_type_car WHERE id = message.id_type_car) AS tipT FROM message WHERE id_logo = $id_logo AND type_mes = $type_mes ORDER BY data DESC");
	// $result = $mysqli->query("SELECT * FROM message WHERE id_logo = $id_logo AND type_mes = $type_mes");				
	return resultToArray($result);
}

function getBDMessage3($id_type_car, $type_mes){ //чтение из таблици объявления (тип техники), (0-аренда 1-продажа)
	global $mysqli;
	$result = $mysqli->query("SELECT *, (SELECT type_car FROM s_type_car WHERE id = message.id_type_car) AS tipT FROM message WHERE id_type_car = $id_type_car AND type_mes = $type_mes ORDER BY data DESC");
	// $result = $mysqli->query("SELECT * FROM message WHERE id_logo = $id_logo AND type_mes = $type_mes");				
	return resultToArray($result);
}

function getBDMessage4($id_type_car, $id_type_car2, $type_mes){ //чтение из таблици объявления (тип техники), (подтип техники), (0-аренда 1-продажа)
	global $mysqli;
	$result = $mysqli->query("SELECT *, (SELECT type_car FROM s_type_car WHERE id = message.id_type_car) AS tipT FROM message WHERE id_type_car = $id_type_car AND type_mes = $type_mes AND id_type_car2 = $id_type_car2  ORDER BY data DESC");
	// $result = $mysqli->query("SELECT * FROM message WHERE id_logo = $id_logo AND type_mes = $type_mes");				
	return resultToArray($result);
}

function getBDMessage2($id){ //чтение из таблици объявления (id объявления)
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM message WHERE id  = $id");
	return resultToArray($result);
}

function getBDMessageTell($id){ //чтение из таблици объявления (id объявления) и получения телефона
	global $mysqli;
	$result = $mysqli->query("SELECT telk, telk_skr FROM message WHERE id  = $id");
	return resultToArray($result);
}

function getTablUser($id){ //чтение из таблици юзер 
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `user` WHERE `id` = $id");	
	return resultToArray($result);
}
function getTablUser2($mail){ //чтение из таблици юзер 
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `user` WHERE `e_mail` = '$mail'");		
	return resultToArray($result);
}

function getTabl($nameTable){ //чтение из таблици 
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM $nameTable");	
	//$result = $mysqli->query("SELECT * FROM message WHERE id =  90 ");		
	return resultToArray($result);
}

function getTablTypeTeh($n){ // чтение из таблицы s_type_car2 $n = тип техники в таблице s_type_car
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM s_type_car2 WHERE id_type_car =  $n ");		
	return resultToArray($result);
}

// Добавить нового пользователя
function setUser($e_mail, $pasword){      
    global $mysqli;
	$ip1=$_SERVER["REMOTE_ADDR"];
    $mysqli->query("INSERT INTO `user` (`e_mail`, `pasword`, `ip`) VALUES ('$e_mail', '$pasword', '$ip1')");    
}

// Добавить нового объявления     
function setMes($typTeh2, $typTeh, $proizvod, $model, $opis, $cesh, $otvet, $telk, $telk_skr, $oplata, $dosavka, $imj1, $imj2, $imj3, $imj4, $imj5, $imj6, $imj7, $imj8, $imj9, $id_logo, $vi, $name1, $name2, $name3, $name4, $site){ 
	global $mysqli;
	// $ip1=$_SERVER["REMOTE_ADDR"];    
	$mysqli->query("INSERT INTO `message` (`id_type_car2`,`id_type_car`,`proizv`, `model`, `opis`, `cesh`, `otvet`, `telk`, `telk_skr`, `oplata`, `dosavka`, `foto1`, `foto2`, `foto3`, `foto4`, `foto5`, `foto6`, `foto7`, `foto8`, `foto9`, `id_logo`, `vi`, `name1`, `name2`, `name3`, `name4`, `sity`) VALUES ($typTeh2, $typTeh, '$proizvod', '$model', '$opis', '$cesh', $otvet, '$telk', $telk_skr, $oplata, '$dosavka', '$imj1', '$imj2', '$imj3', '$imj4', '$imj5', '$imj6', '$imj7', '$imj8', '$imj9', $id_logo, $vi, '$name1', '$name2', '$name3', '$name4', $site)"); 
}

// Добавить нового объявления аренды   
function setMes_arend($typTeh, $typTeh2, $proizvod, $model, $opis, $cesh, $otvet, $telk, $telk_skr, $oplata, $dosavka, $imj1, $imj2, $imj3, $imj4, $imj5, $imj6, $imj7, $imj8, $imj9, $id_logo, $vi, $name1, $name2, $name3, $name4, $site, $arend, $zalog, $yslygi){ 
	global $mysqli;
	// $ip1=$_SERVER["REMOTE_ADDR"];    
	$mysqli->query("INSERT INTO `message` (`type_mes`, `id_type_car`, `id_type_car2`, `proizv`, `model`, `opis`, `cesh`, `otvet`, `telk`, `telk_skr`, `oplata`, `dosavka`, `foto1`, `foto2`, `foto3`, `foto4`, `foto5`, `foto6`, `foto7`, `foto8`, `foto9`, `id_logo`, `vi`, `name1`, `name2`, `name3`, `name4`, `sity`, `arenda`, `zalog`, `ysluga`) VALUES (1, $typTeh, $typTeh2, '$proizvod', '$model', '$opis', '$cesh', $otvet, '$telk', $telk_skr, $oplata, '$dosavka', '$imj1', '$imj2', '$imj3', '$imj4', '$imj5', '$imj6', '$imj7', '$imj8', '$imj9', $id_logo, $vi, '$name1', '$name2', '$name3', '$name4', $site, $arend, $zalog, $yslygi)"); 
}

// изменить объявление     
function getMes($id, $login, $kontrogent, $name1, $name2, $name3, $name4, $sity, $id_type_car, $proizv, $model, $opis, $cesh, $otvet, $telk, $telk_skr, $oplata, $id_type_car2){ //(ид объявление, ид пользука, физ лицо\организация, фамилия, имя, отчество, огранизация, город, тип техники, производитель, модель, описание, стоимость, ответ, телефон, скрыть телефон, способ оплаты, под тип техники)
	global $mysqli;
	$mysqli->query("UPDATE `message` SET `vi` = $kontrogent, `name1`= '$name1', `name2` = '$name2', `name3` = '$name3', `name4` = '$name4', `sity` = $sity, `id_type_car` = $id_type_car, `proizv` = '$proizv', `model` = '$model', `opis`='$opis', `cesh` = '$cesh', `otvet`=$otvet, `telk` = '$telk', `telk_skr`=$telk_skr, `oplata` = $oplata, `id_type_car2`=$id_type_car2 WHERE `id` = $id AND `id_logo`= $login");
}

// изменить объявление аренды     
function getMes_arend($id, $login, $kontrogent, $name1, $name2, $name3, $name4, $sity, $id_type_car, $id_type_car2, $proizv, $model, $opis, $cesh, $otvet, $telk, $telk_skr, $oplata, $arenda, $zalog, $yslygi){ //(ид объявление, ид пользука, физ лицо\организация, фамилия, имя, отчество, огранизация, город, тип техники, производитель, модель, описание, стоимость, ответ, телефон, скрыть телефон, способ оплаты, аренда, залог, услуги)
	global $mysqli;
	$mysqli->query("UPDATE `message` SET `vi` = $kontrogent, `name1`= '$name1', `name2` = '$name2', `name3` = '$name3', `name4` = '$name4', `sity` = $sity, `id_type_car` = $id_type_car, `id_type_car2` = $id_type_car2, `proizv` = '$proizv', `model` = '$model', `opis`='$opis', `cesh` = '$cesh', `otvet`=$otvet, `telk` = '$telk', `telk_skr`=$telk_skr, `oplata` = $oplata, `arenda` = $arenda, `zalog` = $zalog, `ysluga` = $yslygi WHERE `id` = $id AND `id_logo`= $login");
}

// загрузка фото
function setFoto($id, $login, $i, $imj){//ид объявление, ид пользука, №фото, фото
	global $mysqli;
	switch($i){
		case 1: 
			$mysqli->query("UPDATE `message` SET `foto1` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
		case 2: 
			$mysqli->query("UPDATE `message` SET `foto2` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
		case 3: 
			$mysqli->query("UPDATE `message` SET `foto3` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
		case 4: 
			$mysqli->query("UPDATE `message` SET `foto4` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
		case 5: 
			$mysqli->query("UPDATE `message` SET `foto5` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
		case 6: 
			$mysqli->query("UPDATE `message` SET `foto6` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
		case 7: 
			$mysqli->query("UPDATE `message` SET `foto7` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
		case 8: 
			$mysqli->query("UPDATE `message` SET `foto8` = '$imj' WHERE `id` = $id AND `id_logo`= $login");
			break;
	}	
}

// тэстовая функция
function se($imagetmp,$imagename){
	global $mysqli;
	//$insert_image="INSERT INTO file VALUES('$imagetmp','$imagename')";
	$mysqli->query("INSERT INTO `file` (`myimage`, `tmp_name`) VALUES ('$imagetmp','$imagename')"); 
}

// Проверить присутствие емейда в база
function getUserEmail($email){
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `user` WHERE `e_mail`= \"$email\" ");				
	$a=resultToArray($result);
	if (count($a)>0)
		$f=true;
	else
		$f=false;
    return $f;
}

// Проверка пароля и логина
function entrance($email, $parol){
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `user` WHERE `e_mail` = \"$email\" AND `pasword`= \"$parol\" ");				
	$a=resultToArray($result);
	if (count($a)>0)
		$f=true;
	else
		$f=false;
	return $f;
}

// Актуализировать данные при входе в систему
function setUserEntrance($emeil){
	global $mysqli;
	$ip1=$_SERVER["REMOTE_ADDR"];
    $rendom=rand(1,99999);
    $rendom2=rand(1,99999);
    $mysqli->query("UPDATE `user` SET `key1` = $rendom, `key2`= $rendom2, `ip` = '$ip1' WHERE `e_mail` = '$emeil' ");
	//$result = $mysqli->query("SELECT * FROM user_ WHERE email_= \"$emeil\" ");				
	//$a=resultToArray($result);
	//setcookie("kartName",$a[0]["name_"]);
	setcookie("kartVender",$rendom);
	//setcookie("kartName",$a[0]['name_']);
    setcookie("kartVender2",$rendom2);
}

// Если коды совпали то пользователь признан системой
function getUserEntrance($key1, $key2){
	global $mysqli;
	$ip1=$_SERVER["REMOTE_ADDR"];
	$result = $mysqli->query("SELECT * FROM `user` WHERE `key1`= $key1 AND `key2`= $key2 AND `ip`= '$ip1' ");				
	$a=resultToArray($result);
	if (count($a)>0)
		$f=true;
	else
		$f=false;
	return $f;
}

function getUserEntranceID($key1, $key2){
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `user` WHERE `key1`= $key1 AND `key2`= $key2");
	return resultToArray($result);
}

// получить id пользователя
function getUserEntranceID2($key1, $key2){
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `user` WHERE `key1`= $key1 AND `key2`= $key2 LIMIT 1");
	$r = resultToArray($result);
	return $r[0]['id'];
}


function DelMessage($key, $logo){//Удаляем объявление (key=ключ)
	global $mysqli;
	$mysqli->query("DELETE FROM `message` WHERE `id`=$key AND `id_logo`=$logo");
}

function DeleteFoto($login, $id, $pole){// удаление фото из таблицы (идентификатор пользователя, ид строки, название поля)
	global $mysqli;
	$mysqli->query("UPDATE `message` SET `$pole` = NULL WHERE `id` = $id AND `id_logo`= $login");
} 

//кусок фото
function foto1($i){
	$t="";
	if ($i!=1){
		$t=$i;
	}
$p2="<div class=\"fileform\" >
		<div id=\"faf$i\" onclick=\"$(this).css('border-color', '#a1bfc4')\">
		<div id=\"fileformlabel$i\"></div>
		<div class=\"selectbutton\">Обзор</div>
		<input type=\"file\" name=\"myfile$i\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName$t(this.value);\"/>
		</div>
		</div>";
return  $p2;
}

function foto2($message3, $i, $w, $h){ // вывод одного фото. (массив, индэкс массива , ширина, высота)
	if ($message3[$i]["foto1"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto1'])).'">';						
	}elseif($message3[$i]["foto2"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto2'])).'">';						
	}elseif($message3[$i]["foto3"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto3'])).'">';						
	}elseif($message3[$i]["foto4"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto4'])).'">';						
	}elseif($message3[$i]["foto5"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto5'])).'">';						
	}elseif($message3[$i]["foto6"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto6'])).'">';						
	}elseif($message3[$i]["foto7"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto7'])).'">';						
	}elseif($message3[$i]["foto8"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto8'])).'">';						
	}elseif($message3[$i]["foto9"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[$i]['foto9'])).'">';						
	}else{
		$p1 = '<img width="'.$w.'" height="'.$h.'" alt="лого" src="\img\Net_logo.jpg">';
	}
	return $p1;
}

function foto_logo_massiv($id){
	global $mysqli;
	$result = $mysqli->query("SELECT `logo` FROM `user` WHERE `id`=$id LIMIT 1");
	return resultToArray($result);
}

function foto_logo($message3, $w, $h){
	if ($message3[0]["logo"]!=NULL){
		$p1 ='<img width="'.$w.'" height="'.$h.'" alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($message3[0]['logo'])).'" class="logo">';}
		else{
	$p1 = '<img width="'.$w.'" height="'.$h.'" alt="лого" src="\img\Net_logo.jpg" class="logo">';}
	return $p1;
}

function reiting($n){// кружки рейтинга
	$otv = "";
	for($i=0; $i<$n; $i++){
		$otv = $otv.'<img width="23" height="23" alt="лого" src="\img\rating.png">';
	}
	echo $otv;
}

function foto3($message3){// получить массив актуальных фоток. на выходе ссылки на фото
	$arr = array();
	if ($message3[0]["foto1"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto1']));						
	}
	if($message3[0]["foto2"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto2']));						
	}
	if($message3[0]["foto3"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto3']));						
	}
	if($message3[0]["foto4"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto4']));						
	}
	if($message3[0]["foto5"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto5']));						
	}
	if($message3[0]["foto6"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto6']));						
	}
	if($message3[0]["foto7"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto7']));						
	}
	if($message3[0]["foto8"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto8']));						
	}
	if($message3[0]["foto9"]!=NULL){
		$arr[] ='data:image/png;base64,'.chunk_split(base64_encode($message3[0]['foto9']));						
	}
	return $arr;
}

// новое сообщение в чате
function setChat($id, $mess, $dialog){      
    global $mysqli;
    $mysqli->query("INSERT INTO `chat` (`id_I`, `message`, `id_diologs`) VALUES ($id, '$mess', $dialog)");    
}

// читаем чат
function reviewChat($hi, $i){
	global $mysqli;
	$result = $mysqli->query("SELECT `message`, `e_mail`  FROM `chat` JOIN `user` ON `id_I`=`user`.`id` WHERE (`id_he`=$hi AND `id_I`=$i) OR (`id_he`=$i AND `id_I`=$hi)  ORDER BY `data_`");
	//$result = $mysqli->query("SELECT * FROM `chat` WHERE `id_he`=$hi AND `id_I`=$i  ORDER BY `data_`");
	return resultToArray($result);
}

// читаем чат через диалог
function reviewChatDialog($id){
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `chat` WHERE `id_diologs`=$id");
	return resultToArray($result);
}

// Ментим прочитанные сообщения
// function reviewChatRid($hi, $i){
// 	global $mysqli;
// 	$result = $mysqli->query("UPDATE `chat` SET `rid` = 1 WHERE `id_I` =$hi AND  `id_he`=$i AND `rid` = 0");	
// }

// вывести мой диалог
function getDialog($i){
	global $mysqli;
	$result = $mysqli->query("SELECT `diologs`.`id`,  `proizv`, `model` FROM `diologs` JOIN `message` ON `id_message`=`message`.`id` WHERE `d_i`= $i");
	return resultToArray($result);
}

// вывести диалог на меня 
function getDialog2($i){
	global $mysqli;
	$result = $mysqli->query("SELECT `diologs`.`id`,  `proizv`, `model` FROM `diologs` JOIN `message` ON `id_message`=`message`.`id` WHERE `d_hi`= $i");
	return resultToArray($result);
}

//создать диалог
function setDialog($i_log, $id_message){
	global $mysqli;
	$mysqli->query("INSERT INTO `diologs` (`d_i`, `d_hi`, `id_message`) VALUES ($i_log, (SELECT `B`.`id_logo` FROM `message` AS `B` WHERE `id`=$id_message LIMIT 1), $id_message)");
}

// добавить в избранное
function setfavorites($i_log, $id_message){
	global $mysqli;
	$mysqli->query("INSERT INTO `favorites` (`id_user`, `id_messag`) VALUES ($i_log, $id_message)");	
}

// проверка обявления на избранность
function flagfavorites($i_log, $id_message){
	global $mysqli;	
	$result = $mysqli->query("SELECT `id`  FROM `favorites`  WHERE `id_user`=$i_log AND `id_messag`=$id_message  LIMIT 1");
	$result = resultToArray($result);
	$result = count($result);
	return $result; //возвращает колличество строк в запросе
}

//Удаляем диалог в месте с его сообщениями
function DelDialog($id, $i_log){
	global $mysqli;
	$result = $mysqli->query("SELECT id_diologs FROM chat  WHERE id_diologs= $id LIMIT 1");
	$result = resultToArray($result);
	if ($result[0]["id_diologs"]!=$id){
		$mysqli->query("DELETE FROM diologs  WHERE id =$id AND (d_i=$i_log OR d_hi=$i_log)");
	}
	else {		
		// $mysqli->query("DELETE a.*, b.* FROM chat a LEFT JOIN diologs b ON b.id = a.id_diologs WHERE a.id_diologs =$id AND a.id_I=$i_log");
		$mysqli->query("DELETE a.*, b.* FROM chat a LEFT JOIN diologs b ON b.id = a.id_diologs WHERE a.id_diologs =$id ");
	}
}



// узнаем id поллователя
function idUser($key, $key2){
	global $mysqli;
	$result = $mysqli->query("SELECT id FROM user  WHERE key1= $key AND key2= $key2  LIMIT 1");
	$result = resultToArray($result);
	$otvet = $result[0]["id"];
	return $otvet;
}

// узнаем что объявление мое
 function MessageTrue ($id, $key, $key2){
	if ($id==idUser($key, $key2))
	return true;
	else return false;
}

function DelMessage2($key, $logo){//Удаляем объявление (key=ключ)
	// узнаем есть ли диолог и его ИД диалогов может быть много!!!!!
	global $mysqli;
	$query = "SELECT * FROM diologs WHERE id_message = $key";
	if(!$mysqli->query($query))
	 	echo $mysqli->error; 
	else{ 
		$result = $mysqli->query("SELECT * FROM diologs WHERE id_message = $key");
		$result = resultToArray($result);
		for ($i=0; $i<count($result); $i++){		
			DelDialog($result[$i]['id'], $result[$i]['d_i']);
		}	
	}
	$query = "DELETE FROM `message` WHERE `id`=$key AND `id_logo`=$logo";
	//$mysqli->query("DELETE FROM `message` WHERE `id`=$key AND `id_logo`=$logo");
	if(!$mysqli->query($query))
	 echo $mysqli->error; 
}

// вывод избранного
function getfavorites($id_user){
	global $mysqli;
	$result = $mysqli->query("SELECT * FROM `favorites` JOIN `message` WHERE id_user = $id_user AND favorites.id_messag = message.id");
	return resultToArray($result);
}

// удалить избранное
function delfavorites($id){
	global $mysqli;
	$mysqli->query("DELETE FROM `favorites` WHERE `id`=$id");
}

// загрузка лого пользователя
function save_logo($id, $logo){//ид,  фото
	global $mysqli;	
	$mysqli->query("UPDATE `user` SET `logo` = '$logo' WHERE `id` = $id");			
}

// Вывод поиска
function getSearch($uslov){
	global $mysqli;
	$result = $mysqli->query("SELECT MES.id, MES.proizv, MES.model, MES.opis, MES.cesh, MES.type_mes, MES.id_type_car, MES.sity, MES.vi,
	(SELECT car FROM s_type_car2 WHERE id=MES.id_type_car2) AS car, (SELECT sity FROM s_sity WHERE id=MES.sity) AS sity, MES.foto1	
	FROM message AS MES, s_sity AS SITY, s_oblast AS OBL, s_rerion AS REG 
	WHERE SITY.id_oblast = OBL.id AND OBL.id_region=REG.id AND MES.sity=SITY.id $uslov");
	return resultToArray($result);

	// WHERE cesh > 1 AND cesh < 100000 это поиск от 1 до 10000
	// WHERE T1.type_mes=1 аренда или продажа
	// WHERE T1.id_type_car =1 тип техники
	// WHERE T1.sity =1 город

	// поиск по области 
	// SELECT s_sity.id, s_sity.sity, s_oblast.oblsat, s_rerion.region    FROM  s_oblast, s_rerion, s_sity  WHERE s_sity.id_oblast = s_oblast.id AND s_oblast.id_region=s_rerion.id AND  s_oblast.id= 1 
	// поиск по региону
	// SELECT s_sity.id, s_sity.sity, s_oblast.oblsat, s_rerion.region    FROM  s_oblast, s_rerion, s_sity  WHERE s_sity.id_oblast = s_oblast.id AND s_oblast.id_region=s_rerion.id AND  s_rerion.id= 1 
	// Переделанный запрос
	// 	SELECT MES.id, MES.proizv, MES.model, MES.opis, MES.cesh, MES.type_mes, MES.id_type_car, MES.sity, (SELECT car FROM s_type_car2 WHERE id=MES.id_type_car2) AS car, (SELECT sity FROM s_sity WHERE id=MES.sity) AS sity, MES.foto1
//  FROM message AS MES, s_sity AS SITY, s_oblast AS OBL, s_rerion AS REG WHERE SITY.id_oblast = OBL.id AND OBL.id_region=REG.id AND MES.sity=SITY.id AND  REG.id= 1 
}

// Чтение из таблицы s_oblast
function getOblast($region){
	global $mysqli;
	$result = $mysqli->query("SELECT id, oblsat FROM `s_oblast` WHERE `id_region` =$region");
	return resultToArray($result);
}

// Чтение из таблицы s_sity
function getSity($obl){
	global $mysqli;
	$result = $mysqli->query("SELECT `id`, `sity` FROM `s_sity` WHERE `id_oblast` =$obl");
	return resultToArray($result);
}

?>
