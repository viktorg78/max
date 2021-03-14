<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$rr = strip_tags($_POST['rr']);
if ($rr=="all"){
    echo "er1";
    exit;
}
connectDB();//открыть БД
$m4 =getOblast($rr);//Чтение из базы данных
closeDB();// закрыть БД
echo 'Выберите область
	<select name="search_s_oblast" id="search_s_oblast" class="select2">	
	<option value=all>Любая область</option>'; 
	for ($i=0; $i<count($m4);$i++)
	echo "<option value=".$m4[$i]['id'].">".$m4[$i]['oblsat']."</option>";			
	echo '</select>';
?>
<script src="/js/search_s_oblast_div.js"></script>