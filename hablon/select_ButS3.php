<!-- ТИП техники грузовая техника -->
<?php require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php"; 
connectDB();
$m1_2 = getTablTypeTeh(3);//Чтение из базы данных
closeDB();
?>
<td class="td2">Под тип техники</td><td class="td3">
	<select name="typTeh2">
    	<?php             
			for ($i=0; $i<count($m1_2);$i++){
				echo "<option value=".$m1_2[$i]['id'].">".$m1_2[$i]['car']."</option>"; 					
			} 
		?> 			
	</select>
</td>