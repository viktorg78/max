<!-- ТИП техники Бетонное оборудование и дробильные установки -->
<td class="td2">Под тип техники</td><td class="td3">
	<select name="typTeh2">
        <?php    
            $m1_2 = getTablTypeTeh(1);//Чтение из базы данных         
			for ($i=0; $i<count($m1_2);$i++){
				echo "<option value=".$m1_2[$i]['id'].">".$m1_2[$i]['car']."</option>"; 					
			} 
		?> 			
	</select>
</td>