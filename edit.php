<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/cooki.php";
	connectDB();//открыть БД
	$name_page = getBDParam('name_construction_machinery'); // чтение из таблицы праметры
	$m1 = getTabl('s_type_car'); //Чтение из базы данных
	$m2 = getTabl('s_rerion'); //Чтение из базы данных
	$m3 = getTabl('s_sity'); //Чтение из базы данных
	$m4 = getTabl('s_type_car2'); //Чтение из базы данных
	

    // из другово файла
    $id_f=strip_tags($_POST['id']);
    $key_f = strip_tags($_POST['key']);// ключ 1
	$key2_f = strip_tags($_POST['key2']);// ключ 2
	// из другово файла
	
	//читаем из базы
	$message2 = getBDMessage2($id_f);
	$name1 = $message2[0]['name1'];
	$name2 = $message2[0]['name2'];
	$name3 = $message2[0]['name3'];
	$name4 = $message2[0]['name4'];
	$vi = $message2[0]['vi'];
	$sity = $message2[0]['sity'];
	$id_type_car = $message2[0]['id_type_car'];
	$id_type_car2 = $message2[0]['id_type_car2'];
	$proizv = $message2[0]['proizv'];
	$model = $message2[0]['model'];
	$opis = $message2[0]['opis'];
	$cesh = $message2[0]['cesh'];
	$otvet = $message2[0]['otvet'];
	$telk = $message2[0]['telk'];
	$telk_skr = $message2[0]['telk_skr'];
	$oplata = $message2[0]['oplata'];
	$dosavka = $message2[0]['dosavka'];
	
	
	$all_foto="";

	$p2="<div class=\"fileform\" >
		<div id=\"faf1\" onclick=\"$(this).css('border-color', '#a1bfc4')\">
		<div id=\"fileformlabel1\"></div>
		<div class=\"selectbutton\">Обзор</div>
		<input type=\"file\" name=\"myfile[]\" id=\"upload\" accept=\"image/*,image/jpeg\" onchange=\"getName(this.value);\"/>
		</div>
		</div>";
	
		if ($message2[0]["foto1"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto1'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"1\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 1:</td><td class=\"td3\" id=\"foto_1\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 1:</td><td class=\"td3\">".foto1(1)."</td></tr><br />";

		if ($message2[0]["foto2"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto2'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"2\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 2:</td><td class=\"td3\" id=\"foto_2\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 2:</td><td class=\"td3\">".foto1(2)."</td></tr>";

		if ($message2[0]["foto3"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto3'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"3\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 3:</td><td class=\"td3\" id=\"foto_3\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 3:</td><td class=\"td3\">".foto1(3)."</td></tr>";
		
		if ($message2[0]["foto4"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto4'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"4\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 4:</td><td class=\"td3\" id=\"foto_4\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 4:</td><td class=\"td3\">".foto1(4)."</td></tr>";

		if ($message2[0]["foto5"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto5'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"5\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 5:</td><td class=\"td3\" id=\"foto_5\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 5:</td><td class=\"td3\">".foto1(5)."</td></tr>";

		if ($message2[0]["foto6"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto6'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"6\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 6:</td><td class=\"td3\" id=\"foto_6\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 6:</td><td class=\"td3\">".foto1(6)."</td></tr>";

		if ($message2[0]["foto7"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto7'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"7\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 7:</td><td class=\"td3\" id=\"foto_7\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 7:</td><td class=\"td3\">".foto1(7)."</td></tr>";

		if ($message2[0]["foto8"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto8'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"8\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 8:</td><td class=\"td3\" id=\"foto_8\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 8:</td><td class=\"td3\"не >".foto1(8)."</td></tr>";

		if ($message2[0]["foto9"]!=NULL){
			$p1 ='<img width="100" height="70" alt="embedded image" align="left" src="data:image/png;base64,'.chunk_split(base64_encode($message2[0]['foto9'])).'">';
			$p3 = "<a style=\"font-size: 1.5em; margin: 10px;\" title=\"Удалить фото.\"><i class=\"fa fa-trash\" aria-hidden=\"true\" data-key=\"".$key_f."\" data-key2=\"".$key2_f."\" data-n=\"9\" data-id=".$id_f."></i></a>";
			$all_foto=$all_foto."<tr><td class=\"td2\">Фото 9:</td><td class=\"td3\" id=\"foto_9\">".$p1." ".$p3."</td></tr>";
		}
		else $all_foto=$all_foto."<tr><td class=\"td2\">Фото 9:</td><td class=\"td3\">".foto1(9)."</td></tr>";

?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $name_page[0]["parameter_value"];?></title>
	<link rel="stylesheet" type="text/css" href="css/main.css" charset="utf-8">	
	<link rel="stylesheet" type="text/css" href="css/header.css" charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/footer.css" charset="utf-8">	
	<link rel="stylesheet" type="text/css" href="css/construction_machinery.css" charset="utf-8">

	<link rel="stylesheet" type="text/css" href="css/menuR.css" charset="utf-8">	
	<link rel="stylesheet" type="text/css" href="css/announcement.css" charset="utf-8">
	
	<meta name="description" content="Интернет-магазин по прожаже IT оборудования.">
	<meta name="Keywords" content="Архангельск, кагттриджи, заправка картриджей">
	<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link href="img/favicon.ico" rel="shortcut icon" type="image/x-icon">

	<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/chosen/1.8.7/chosen.jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/chosen.css" charset="utf-8">
	
</head>
<body>
<div id="wrapper">
	<div id="content">
		<!--Начало шапки-->
		<?  require_once "bloks/header.php"; ?>
		<!--Конец  шапки-->

		<!--Основная часть сайта-->
		<?php if ($fUser){?>
      
		
		<div class="obl2">
		<form action="announcement3_edit.php" method="post" id="my_form" enctype="multipart/form-data">
		<table class="tabl2">
		<tr><td class="td2">Вы</td><td class="td3">
			<select name="kontrogent" id="kontrogent">
				<option value="0">Физ. лицо</option> 
				<?php
					if ($vi==1){echo "<option value=\"1\" selected>Организация</option>";}
					else{echo "<option value=\"1\">Организация</option>";}
				?>									
			</select>
		</td></tr>
		
		<?php
			if($vi==1){
				echo "<tr class=\"fiz\" style=\"display: none;\"><td class=\"td2\">Имя <span>*</span></td><td class=\"td3\"><input class=\"poleText\" type=\"text\" name=\"name1\" id=\"name1\" onclick=\"$(this).css('border-color', '#007a96')\" value=".$name1."></td></tr>";
				echo "<tr class=\"fiz\" style=\"display: none;\"><td class=\"td2\">Фамилия</td><td class=\"td3\"><input class=\"poleText\" type=\"text\" name=\"name2\" value=".$name2."></td></tr>";
				echo "<tr class=\"fiz\" style=\"display: none;\"><td class=\"td2\">Отчество</td><td class=\"td3\"><input class=\"poleText\" type=\"text\" name=\"name3\" value=".$name3."></td></tr>";
				echo "<tr class=\"org\" style = \"display :table-row;\"><td class=\"td2\">Название организации <span>*</span></td><td class=\"td3\"><input class=\"poleText\" type=\"text\"  name=\"name4\" id=\"name4\" onclick=\"$(this).css('border-color', '#007a96')\" value=".$name4."></td></tr>";

			}
			else{
				echo "<tr class=\"fiz\"><td class=\"td2\">Имя <span>*</span></td><td class=\"td3\"><input class=\"poleText\" type=\"text\" name=\"name1\" id=\"name1\" onclick=\"$(this).css('border-color', '#007a96')\" value=".$name1."></td></tr>";
				echo "<tr class=\"fiz\"><td class=\"td2\">Фамилия</td><td class=\"td3\"><input class=\"poleText\" type=\"text\" name=\"name2\" value=".$name2."></td></tr>";
				echo "<tr class=\"fiz\"><td class=\"td2\">Отчество</td><td class=\"td3\"><input class=\"poleText\" type=\"text\" name=\"name3\" value=".$name3."></td></tr>";
				echo "<tr class=\"org\"><td class=\"td2\">Название организации <span>*</span></td><td class=\"td3\"><input class=\"poleText\" type=\"text\"  name=\"name4\" id=\"name4\" onclick=\"$(this).css('border-color', '#007a96')\" value=".$name4."></td></tr>";

			}
		?>
	
		<tr><td class="td2">Город в котором вы находитесь</td><td class="td3">
				<select class="chosen" name="site">
					<?php 
						for ($i=0; $i<count($m3); $i++){
							if ($i == $sity-1){	
								echo "<option  value=".$m3[$i]['id']." selected>".$m3[$i]['sity']."</option>";
							}else{
								echo "<option  value=".$m3[$i]['id'].">".$m3[$i]['sity']."</option>";
							} 					
						}
					?>	  					
    			</select>   
			</td></tr>
			<tr><td class="td2">Тип техники</td><td class="td3">
				<select name="typTeh" id="typTeh">
				<?php
				for ($i=0; $i<count($m1);$i++){
					if ($id_type_car-1 == $i){
						echo "<option value=".$m1[$i]['id']." selected>".$m1[$i]['type_car']."</option>"; 
					}else{
						echo "<option value=".$m1[$i]['id'].">".$m1[$i]['type_car']."</option>"; 
					}										
				}
				?> 			
				</select>
			</td></tr>
			<!-- ================================== -->

			<tr id="typTeh2">
				<?php require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS0_edit.php"; ?> 
			</tr>
			<!-- ================================== -->
			<tr><td class="td2">Производитель<span>*</span></td><td class="td3"><input class="poleText" type="text" name="proizvod" value="<?php echo $proizv; ?>" id="proizvod" onclick="$(this).css('border-color', '#007a96')"></td></tr>
			<tr><td class="td2">Модeль<span>*</span></td><td class="td3"><input class="poleText" type="text" name="model" value="<?php echo $model; ?>" id="model" onclick="$(this).css('border-color', '#007a96')"></td></tr>
			<tr><td class="td2">Описание и характеристики<span>*</span></td><td class="td3"><textarea rows=10 maxlength=250 cols=40 name="opis" id="opis" onclick="$(this).css('border-color', '#007a96')"><?php echo $opis; ?></textarea></td></tr>
			<tr><td class="td2">Стоимость</td><td class="td3"><input class="poleText" type="text" name="cesh" value="<?php echo $cesh; ?>"></td></tr>
			<tr><td class="td2">Как быстро вы можите ответить на вопрос клиента через ваш личный кабинет</td><td class="td3">
				<select name="otvet">
					<?php
					switch($otvet){
						case 0: echo "<option value=\"0\" selected>моментально</option><option value=\"1\">раз в день</option><option value=\"2\">не часто</option>";
						break;
						case 1: echo "<option value=\"0\">моментально</option><option value=\"1\" selected>раз в день</option><option value=\"2\">не часто</option>";
						break;
						case 2: echo "<option value=\"0\">моментально</option><option value=\"1\">раз в день</option><option value=\"2\" selected>не часто</option>";
						break;
						default: echo "<option value=\"0\">моментально</option><option value=\"1\">раз в день</option><option value=\"2\">не часто</option>";

					}
					?>
				</select>
			</td></tr>
			<tr><td class="td2">Ваш телефон<span>*</span></td><td class="td3"><input class="poleText" type="tel"  name="telk" id="telk" onclick="$(this).css('border-color', '#007a96')" value="<?php echo $telk; ?>">
				<div class="checkbox">
					<?php
						if($telk_skr==1){
							echo "<input id=\"check\" type=\"checkbox\" name=\"telk_skr\" checked=\"checked\">";
						}
						else{
							echo "<input id=\"check\" type=\"checkbox\" name=\"telk_skr\">";
						}
					?>					
					<label for="check" class="lab2">Скрыть телефон для незарегистрированных пользователей</label>
				</div>		
			</td></tr>
			<tr><td class="td2">спопоб оплаты</td><td class="td3">
				<div class="radio">
					<?php 
						if($oplata==1){
							echo "<input id=\"male\" type=\"radio\" name=\"oplata\" value=\"0\" class=\"message_pri\">";
							echo "<label for=\"male\" class=\"lab1\">Наличный</label>";
							echo "<input id=\"female\" type=\"radio\" name=\"oplata\" value=\"1\" checked class=\"message_pri\">";
							echo "<label for=\"female\" class=\"lab1\">Безналичный</label>";
						}else{
							echo "<input id=\"male\" type=\"radio\" name=\"oplata\" value=\"0\" checked class=\"message_pri\">";
							echo "<label for=\"male\" class=\"lab1\">Наличный</label>";
							echo "<input id=\"female\" type=\"radio\" name=\"oplata\" value=\"1\" class=\"message_pri\">";
							echo "<label for=\"female\" class=\"lab1\">Безналичный</label>";
						}					
					?>				
				</div>		
			</td></tr>
			<tr><td class="td2">Регионы и города в которых вы можите работать</td><td class="td3">
				<select name="city_of_work">
					<?php
						for ($i=0; $i<count($m1);$i++){
							if($dosavka=$i){
								echo "<option атрибуты selected>".$m2[$i]['region']."</option>"; 
							}
							else{
								echo "<option атрибуты>".$m2[$i]['region']."</option>"; 
							}											
						}
					?>
  				</select>
				</td></tr>			
			<tr><td class="td2">Способ доставки</td><td class="td3"><textarea rows=4 maxlength=250 cols=40 name="dosavka"></textarea></td></tr>

			<!-- блок с фото -->
			<?php echo $all_foto; ?>
			
			<!-- <tr><td class="td2">Фото вашей техники/устройства/оборудования<br />(максимум 9 файлов)</td><td class="td3">

				
				<div class="fileform" >
					<div id="faf1" onclick="$(this).css('border-color', '#a1bfc4')">
					<div id="fileformlabel1"></div>
					<div class="selectbutton">Обзор</div>
					<input type="file" name="myfile[]" id="upload" accept="image/*,image/jpeg" onchange="getName(this.value);"/>
					</div>
					</div>
				   <div id="additional_fields"></div>
				   <span id="add_field">Добавить файл</span>

				
			</td></tr> -->
			<tr><td><div id="err"></div></td><td class="td3"><input type="hidden" name="id_f" value='<?php echo $id_f;?>'><input type="hidden" name="key" value='<?php echo $key;?>'><input type="hidden" name="key2" value='<?php echo $key2;?>'><input type="submit" id="submit" value="Сохранить изминения"></td></tr>
		</table>
		</form>
		</div>

		<!-- сообщение по центру -->
			<div class="parent">
				<div id="mes"></div>
			</div>
		
		
			
		<?php }
		else
			echo 'Объявления можно подать только зарегистрированным пользователем.';
		?>

		<!--Конец основной части-->

	</div>

	<!-- Подвал -->
	<?php
	require_once "bloks/footer.php";
	?>
	<!-- Конец подвала-->
</div>

<!-- скрипты -->

<!-- <script type="text/javascript">
    $(".chosen").chosen(); 
</script>-->
<script src="/js/typeselect.js"></script>
<script src="/js/announcement.js"></script>
<script src="/js/edit2.js"></script>
</body>
</html>
<?php
 	closeDB();// закрыть БД
?>