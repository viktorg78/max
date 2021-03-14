<?php
require_once "service_information/function.php";
connectDB();//открыть БД


// Изменим структуру $_FILES
foreach($_FILES['myimage'] as $key => $value) {
    foreach($value as $k => $v) {
        $_FILES['myimage'][$k][$key] = $v;
    }

    // Удалим старые ключи
    unset($_FILES['myimage'][$key]);
}


// Загружаем все картинки по порядку
foreach ($_FILES['myimage'] as $k => $v) {

    $imagename=$_FILES["myimage"][$k]["name"];
    $imagetmp=addslashes(file_get_contents($_FILES['myimage'][$k]['tmp_name']));
    se($imagetmp,$imagename);
    // Загружаем по одному файлу
    //$_FILES['myimage'][$k]['tmp_name'];
    //$_FILES['upload'][$k]['error'];
}

//$imagename=$_FILES["myimage"]["name"];

//Получаем содержимое изображения и добавляем к нему слеш
//$imagetmp=addslashes(file_get_contents($_FILES['myimage']['tmp_name']));

//se($imagetmp,$imagename);

closeDB();// закрыть БД 



?>