<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/cooki.php";
// error_reporting(0);
//require_once "service_information/function.php";

	connectDB();//открыть БД
	$name_page = getBDParam('name_construction_machinery'); // чтение из таблицы праметры
	// $key = strip_tags($_POST['key']);// ключ 1
	// $key2 = strip_tags($_POST['key2']);// ключ 2
	$id_logo = getUserEntranceID($key, $key2);
	$id_logo = $id_logo[0]["id"];
	// $masseg0 = getBDMessage($id_logo, 0); // чтение из таблицы праметры
	$dialog = getDialog($id_logo); // список  диалогов которые я создал
	$dialog2 = getDialog2($id_logo); // список  диалогов которые комне
	// получили данные для инициации чата
	$flagSuh = empty ($_GET["m2"]);// Проверка на существование переменной.
    if ($flagSuh)  $m2 = 0; 
    else 
        $m2=$_GET["m2"];

	$text_ = "";
	// $m2=0;
	// if (isset($_GET['m1'])){
	if (!empty ($_GET["m1"])){	
		//  $m2 = $_GET['m2']; //id обявления
		 $mess=getBDMessage2($m2);
		 $id_logo = $mess[0]['id_logo']; //ид хозяина оборудования
		 $id_logoM = getTablUser($id_logo);	
		 $milo = $id_logoM[0]["e_mail"]; 	
	 }

	// $id_logo = getUserEntranceID($key, $key2);
	// $id_logo = $id_logo[0]["id"];
	// $masseg1 = getBDMessage($id_logo, 1); // чтение из таблицы праметры
	// $masseg0 = getBDMessage($id_logo, 0);
	
	$foto_logo_massiv = foto_logo_massiv($id_logo);
	$m1 = getTabl('s_type_car'); //Чтение из базы данных
	$m2 = getTabl('s_rerion'); //Чтение из базы данных
	$m3 = getTabl('s_sity'); //Чтение из базы данных
	$m4 = getTabl('s_oblast'); //Чтение из базы данных

	
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
	<link rel="stylesheet" type="text/css" href="css/personal_area.css" charset="utf-8">
	
	<meta name="description" content="Интернет-магазин по прожаже IT оборудования.">
	<meta name="Keywords" content="Архангельск, кагттриджи, заправка картриджей">
	<meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1.0, maximum-scale=1.0">
	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link href="img/favicon.ico" rel="shortcut icon" type="image/x-icon">
</head>
<body>

<div id="wrapper">
	<div id="content">
		<!--Начало шапки-->
		<?  require_once "bloks/header.php"; ?>
		<!--Конец  шапки-->

		<!--Основная часть сайта-->
		
		<div id="podlogka">
		<table id="tabl1">
			<tr>
				<td colspan="3" id='td_v' ><a href='/index' class='buttonSCR'>На главную</a> <a href='personal_area?p=2' class= 'buttonSCR'>Избранное</a></td>
			</tr>
			<tr>
				<td class = 'td_v' ><span>Ваши объявления</span></td>
				<td></td>
				<td class = 'td_v'><span>Ваш рейтинг</span></td>
			</tr>
			<tr>
				<!--Первы столбец-->
    			<td id="td1">
				<?php
					if ($_GET['p']!=2){	?>
				<button id="prodag1">Продажа</button> <button id="arend1">Аренда</button><br/>
					<?php } else 
					echo "<a href='personal_area?p=1' class= 'buttonSCR'>Покинуть Избранное</a>";
					?>
				<div id ='stolb1'>
				<?php
				// продажа p=1, аренда p=0 p=2 избранное
				switch ($_GET['p']){
					case 0:	require_once $_SERVER['DOCUMENT_ROOT']."/hablon/ha0_1.php";
							break;
					case 1:	require_once $_SERVER['DOCUMENT_ROOT']."/hablon/ha0.php";
							break;
					case 2:	require_once $_SERVER['DOCUMENT_ROOT']."/hablon/ha0_2.php";
							break;	
					default:
					require_once $_SERVER['DOCUMENT_ROOT']."/hablon/ha0.php";
				}



				// if ($_GET['p']==1){
				// require_once $_SERVER['DOCUMENT_ROOT']."/hablon/ha0.php"; 
				// }
				// else require_once $_SERVER['DOCUMENT_ROOT']."/hablon/ha0_1.php";
				?>
				
				</div>

				</td>
				<!--Второй столбец-->			 	
				<td id="td2">
					Вы: <button>Физ лицо</button> <button>Организация</button><br /><br />
					Загрузить логотип организации<br />
					<div  class="save_log">
						<?php echo foto_logo($foto_logo_massiv, 100, 100); ?>
					<!-- <img src="/img/ButS6/a30.jpg" alt="Здесь фото" class="logo">					 -->
					<div id="err3"></div>
						<form action="save_logo.php" id="save_logo" method="post" enctype="multipart/form-data">
						<div class="fileform">
							<div id="faf1" onclick="$(this).css('border-color', '#a1bfc4')">
								<div id="fileformlabel1"></div>
								<div class="selectbutton">Обзор</div>
							<input type="file" name="myfile" id="upload" accept="image/*,image/jpeg" onchange="getName(this.value);"/>
							</div>
						</div>	
						<input type="hidden" name="id_f" value='<?php echo $key;?>'>
						<input type="hidden" name="id_f2" value='<?php echo $key2;?>'>
						<input type="submit" id="submit" value="ЗАГРУЗИТЬ">			
						</form>
					</div>
					
					<br /><br />
					<hr />
					<br />
					Подать объявление
					<br /><br />
					<a href='/announcement' class='buttonSCR'>О продаже техники</a> <a href='/announcement_arend' class='buttonSCR'>О сдаче в аренду техники</a><br />
					<br />
					<hr />
					<br />
					<form method="post" action="search_m.php"  id="search_m">
						Поиск техники и оборудования<br />по заданным параметрам<br />
						<div class="checkbox">					
							<input id="check1" type="checkbox" name="search_m_1">								
						<label for="check1" class="lab2">Аренда</label>
						<!-- </div>
						<div class="checkbox">					 -->
							<input id="check2" type="checkbox" name="search_m_2">								
						<label for="check2" class="lab2">Продажа</label>
						
						<br />
						<!-- Объявления

						<div class="checkbox">					
							<input id="check3" type="checkbox" name="search_m_3">								
							<label for="check3" class="lab2">частные</label>
							<input id="check4" type="checkbox" name="search_m_4">								
							<label for="check4" class="lab2">Организации</label>
						</div> -->
						Тип техники		
						<select name="search_m_typTeh"  class="select2" id="search_m_typTeh">
						<option value=all>Любая техника</option>						
						<?php
						for ($i=0; $i<count($m1);$i++)
							echo "<option value=".$m1[$i]['id'].">".$m1[$i]['type_car']."</option>"; 														
						?> 			
						</select>				
						<br />
						Диапозон цен от <input class="poleText3" type="text" name="search_m_name1" id="search_m_name1" maxlength="10"> до <input class="poleText3" type="text" name="search_m_name2" id="search_m_name2" maxlength="10"> рублей<br />
						Выбирите округ
						<select name="search_m_region" class="select2" id="search_m_region">
						<option value=all>Вся Россия</option>
						<?php
						for ($i=0; $i<count($m2);$i++)
							echo "<option value=".$m2[$i]['id'].">".$m2[$i]['region']."</option>";							
						?> 			
						</select>				
						<!-- <br /> -->
						<div id="search_s_oblast_div"></div>						
						<!-- <br /> -->
						<div id="search_m_sity_div"></div>
						<!-- <br /> -->
						<input type="hidden" name="id_f" value='<?php echo $key;?>'>
						<input type="hidden" name="id_f2" value='<?php echo $key2;?>'>
						<input type="submit" id="submit" value="ПОИСК">	
					</form>
					<!-- вывод оборудования через поиск -->
					
					<!-- <div id="Search_n"></div> -->
					 
							
					
					<!-- конец вывод оборудования через поиск -->
					
				</td>
				<!--Третий столбец-->
				<td id="td3">
					Чат для связи<br />
					<!-- Элкетронный адрес аппонента.<br /> -->
					<div id="eapp"></div>
					<div id="err"></div>
					<div id="dialjg"></div>
						<textarea rows=30 maxlength=250 cols=40 id="mess_">
						<?php echo $text_; ?>
						</textarea>
						<i class="fa fa-refresh" aria-hidden="true" data-tooltip="Обновить" id="fa_refresh_plane"></i>
						<i class="fa fa-times" aria-hidden="true" id="fa_times" data-tooltip="Очистить"></i>
						<input class="poleText2" type="text" id="chatv" onclick="$(this).css('border-color', '#007a96')" />
						<i class="fa fa-paper-plane" aria-hidden="true" id="fa_paper_plane" data-tooltip="Отправить" data-key="<?php echo $key;?>" data-key2="<?php echo $key2; ?>"></i>
						
						<div>
						<?php
							for($i=0; $i<count($dialog);$i++) {
								echo "<div class = 'abonent' id = 'deldial".$dialog[$i]['id']."'><button class='eappBoot' data-id='".$dialog[$i]['id']."', data-model='".$dialog[$i]['proizv']." ".$dialog[$i]['model']."'>".$dialog[$i]['proizv']." ".$dialog[$i]['model']."</button><i class='fa fa-trash' aria-hidden='true' data-tooltip='Удалить диалог' data-deldialog='".$dialog[$i]['id']."' data-key='".$key."' data-key2='".$key2."'></i></div>";
							}
							for($i=0; $i<count($dialog2);$i++) {
								echo "<div class = 'abonent' id = 'deldial".$dialog2[$i]['id']."'><button class='eappBoot' data-id='".$dialog2[$i]['id']."', data-model='".$dialog2[$i]['proizv']." ".$dialog2[$i]['model']."'>".$dialog2[$i]['proizv']." ".$dialog2[$i]['model']."</button><i class='fa fa-trash' aria-hidden='true' data-tooltip='Удалить диалог' data-deldialog='".$dialog2[$i]['id']."' data-key='".$key."' data-key2='".$key2."'></i></div>";
							}
						?>						
						</div>
				
				</td>
  			</tr>
		</table>
		<table id="tablО">
		<tr><td id="tdO">
			<div class="checkbox">					
				<input id="check5" type="checkbox" name="search_m_5">								
				<label for="check5" class="lab2" id="check5_v">частные</label>
				<input id="check6" type="checkbox" name="search_m_6">								
				<label for="check6" class="lab2" id="check6_v">Организации</label>
			</div>		
		</td></tr>
			<tr>
				<td id="td2">
					<div id="Search_n"></div>
				</td>
			</tr>				
		</table>
		</div>
		
		<!-- сообщение по центру -->
		<div class="parent">
			<div id="mes"></div>
		</div>

		<!--Конец основной части-->
	</div>

	<!-- Подвал -->
	<?php
	require_once "bloks/footer.php";
	?>
	<!-- Конец подвала-->
</div>

<!-- скрипты -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
<script src="/js/dell.js"></script>
<script src="/js/edit.js"></script>
<script src="/js/chatReset.js"></script>
<script src="/js/prodag_arend.js"></script>

<script src="/js/hat.js"></script>
<script src="/js/delDialog.js"></script>
<script src="/js/announcement.js"></script>
<script src="/js/save_logo.js"></script>
<script src="/js/search_m.js"></script>
<script src="/js/private_organization.js"></script>


</body>
</html>
<?php
 	closeDB();// закрыть БД
?>