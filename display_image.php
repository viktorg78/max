<?php
// чтение картинки из бд 
require_once "service_information/function.php";
connectDB();//открыть БД
$m3 = getTabl('file'); //Чтение из базы данных
//for ($i=0; $i<count($m3);$i++){
echo '<img alt="embedded image" src="data:image/png;base64,'.chunk_split(base64_encode($m3[0]['foto1'])).'">';
//}
closeDB();// закрыть БД
?>
