<?php
if(isset($_FILES['myfile'])){
  $req = false; // изначально переменная для "ответа" - false
	// Приведём полученную информацию в удобочитаемый вид
	ob_start();
	echo '<pre>Имя пользователя: <strong>' , $_POST['fio'] , '</strong>', // поле с именем
	'<br>Дата загрузки: ' , $_POST['date_upl'] , // отобразим дату и время загрузки
	'<br>Данные загруженных файлов:<br>';	
	print_r($_FILES['myfile']); // выведем на экран массив полученных вайлов
	echo '</pre>';
	$req = ob_get_contents();
	ob_end_clean();
	echo json_encode($req); // вернем полученное в ответе
	exit;
}