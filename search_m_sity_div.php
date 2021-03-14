<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$rr = strip_tags($_POST['rr']);

connectDB();//открыть БД
$m4 =getSity($rr);//Чтение из базы данных
closeDB();// закрыть БД
echo 'Выберите город
	<select name="search_m_sity" id="search_m_sity" class="select2">	
	<option value=all>Любой город</option>'; 
	for ($i=0; $i<count($m4);$i++)
	echo "<option value=".$m4[$i]['id'].">".$m4[$i]['sity']."</option>";			
	echo '</select>';
?>