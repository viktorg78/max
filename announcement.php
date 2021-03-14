<?php
require_once "service_information/cooki.php";
	connectDB();//открыть БД
	$name_page = getBDParam('name_construction_machinery'); // чтение из таблицы праметры
	$m1 = getTabl('s_type_car'); //Чтение из базы данных
	// $m1_2 = getTablTypeTeh(1); //Чтение из базы данных
	$m2 = getTabl('s_rerion'); //Чтение из базы данных
	$m3 = getTabl('s_sity'); //Чтение из базы данных
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
		<form action="announcement3.php" method="post" id="my_form" enctype="multipart/form-data">
		<table class="tabl2">
		<tr><td class="td2">Вы</td><td class="td3">
			<select name="kontrogent" id="kontrogent">
				<option value="0">Физ. лицо</option> 
				<option value="1">Организация</option>									
			</select>
		</td></tr>

		<tr class="fiz"><td class="td2">Имя <span>*</span></td><td class="td3"><input class="poleText" type="text" name="name1" id="name1" onclick="$(this).css('border-color', '#007a96')"></td></tr>
		<tr class="fiz"><td class="td2">Фамилия</td><td class="td3"><input class="poleText" type="text" name="name2"></td></tr>
		<tr class="fiz"><td class="td2">Отчество</td><td class="td3"><input class="poleText" type="text" name="name3"></td></tr>
		
		<tr class="org"><td class="td2">Название организации <span>*</span></td><td class="td3"><input class="poleText" type="text"  name="name4" id="name4" onclick="$(this).css('border-color', '#007a96')"></td></tr>

		<tr><td class="td2">Город в котором вы находитесь</td><td class="td3">
				<select class="chosen" name="site">
					<?php
						for ($i=0; $i<count($m3);$i++){
							echo "<option  value=".$m3[$i]['id'].">".$m3[$i]['sity']."</option>"; 					
						}
					?>	  					
    			</select>   
			</td></tr>
			<tr><td class="td2">Тип техники</td><td class="td3">
				<select name="typTeh" id="typTeh">
				<?php
				for ($i=0; $i<count($m1);$i++){
					echo "<option value=".$m1[$i]['id'].">".$m1[$i]['type_car']."</option>"; 					
				} 
				?> 			
				</select>
			</td></tr>
			<!-- =========ПОД ТИП ТЕХНИКИ======================= -->			
			<tr id="typTeh2">
				<?php require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS0.php"; ?> 
			</tr>
			<!-- =========================================== -->
			<tr><td class="td2">Производитель<span>*</span></td><td class="td3"><input class="poleText" type="text" name="proizvod" id="proizvod" onclick="$(this).css('border-color', '#007a96')"></td></tr>
			<tr><td class="td2">Модeль<span>*</span></td><td class="td3"><input class="poleText" type="text" name="model" id="model" onclick="$(this).css('border-color', '#007a96')"></td></tr>
			<tr><td class="td2">Описание и характеристики<span>*</span></td><td class="td3"><textarea rows=10 maxlength=250 cols=40 name="opis" id="opis" onclick="$(this).css('border-color', '#007a96')"></textarea></td></tr>
			<tr><td class="td2">Стоимость</td><td class="td3"><input class="poleText" type="text" name="cesh"></td></tr>
			<tr><td class="td2">Как быстро вы можите ответить на вопрос клиента через ваш личный кабинет</td><td class="td3">
				<select name="otvet">
					<option value="0">моментально</option> 
					<option value="1">раз в день</option>
					<option value="2">не часто</option>					
				</select>
			</td></tr>
			<tr><td class="td2">Ваш телефон<span>*</span></td><td class="td3"><input class="poleText" type="tel"  name="telk" id="telk" onclick="$(this).css('border-color', '#007a96')">
				<div class="checkbox">
					<input id="check" type="checkbox" name="telk_skr"> 
					<label for="check" class="lab2">Скрыть телефон для незарегистрированных пользователей</label>
				</div>		
			</td></tr>
			<tr><td class="td2">спопоб оплаты</td><td class="td3">
				<div class="radio">
					<input id="male" type="radio" name="oplata" value="0" checked class="message_pri">
					<label for="male" class="lab1">Наличный</label>
					<input id="female" type="radio" name="oplata" value="1" class="message_pri">
					<label for="female" class="lab1">Безналичный</label>
				</div>		
			</td></tr>
			<tr><td class="td2">Регионы и города в которых вы можите работать</td><td class="td3">
				<select name="city_of_work">
					<?php
						for ($i=0; $i<count($m1);$i++){
						echo "<option атрибуты>".$m2[$i]['region']."</option>"; 					
						}
					?>
  				</select>
				</td></tr>			
			<tr><td class="td2">Способ доставки</td><td class="td3"><textarea rows=4 maxlength=250 cols=40 name="dosavka"></textarea></td></tr>
			
			<tr><td class="td2">Фото вашей техники/устройства/оборудования<br />(максимум 9 файлов)</td><td class="td3">

				
				<div class="fileform" >
					<div id="faf1" onclick="$(this).css('border-color', '#a1bfc4')">
					<div id="fileformlabel1"></div>
					<div class="selectbutton">Обзор</div>
					<input type="file" name="myfile[]" id="upload" accept="image/*,image/jpeg" onchange="getName(this.value);"/>
					</div>
					</div>
				   <div id="additional_fields"></div>
				   <span id="add_field">Добавить файл</span>

				
			</td></tr>

			<tr><td><div id="err"></div></td><td class="td3"><input type="hidden" name="key" value='<?php echo $key;?>'><input type="hidden" name="key2" value='<?php echo $key2;?>'><input type="submit" id="submit" value="Добавить объявление"></td></tr>
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

<script type="text/javascript">
    $(".chosen").chosen();
</script>

<script src="/js/typeselect.js"></script>
<script src="/js/announcement.js"></script>
</body>
</html>
<?php
 	closeDB();// закрыть БД
?>