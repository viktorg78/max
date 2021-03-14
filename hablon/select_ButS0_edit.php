<td class="td2">Под тип техники</td><td class="td3">
	<select name="typTeh2"> 
		<?php $m1_2 = getTablTypeTeh($id_type_car);//Чтение из базы данных
			for ($i=0; $i<count($m1_2);$i++){
				if ($id_type_car2 == $m1_2[$i]['id']){
					echo "<option value=".$m1_2[$i]['id']." selected>".$m1_2[$i]['car']."</option>"; 
				}else{
					echo "<option value=".$m1_2[$i]['id'].">".$m1_2[$i]['car']."</option>"; 
					}										
			}
		?>
	</select>
</td>