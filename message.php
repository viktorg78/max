<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/cooki.php";
	connectDB();//открыть БД
	$name_page = getBDParam('name_construction_machinery'); // чтение из таблицы праметры
	$mesId=strip_tags($_GET['id']); // id объявления
	$mess=getBDMessage2($mesId);
	$foto_logo_massiv = foto_logo_massiv($mess[0]['id_logo']); // загрузка лого
	if ($mess[0]['vi']==1) {$name5 = $mess[0]['name4'];}
	else {$name5 = $mess[0]['name1']." ".$mess[0]['name2']." ".$mess[0]['name3'];}
	$otvet=$mess[0]['otvet'];
	$type_mes=$mess[0]['type_mes'];

	switch($otvet){
		case 0:
			$otvet_ = "моментаотно";
			break;
		case 1: 
			$otvet_ = "раз в день";	
			break;
		case 2: $otvet_ = "не часто";
			break;
		default: 	
			$otvet_ = "нет";
	}
	$oplata = $mess[0]['oplata'];
	switch ($oplata){
		case 0:
			$oplata_ = "Наличный расчет";
			break;
		case 1:
			$oplata_ = "Безналичный расчет";
			break;
		default:
			$oplata_ = "нет";	
	}
	$foto_ = foto3($mess);

	switch ($mess[0]['arenda']){
		case 0:
			$arenda = 'Аренда: нет данных';
			break;
		case 1:
			$arenda = 'Долгосрочная аренда';
			break;	
		case 2:
			$arenda = 'Краткосрочная аренда';
			break;	
		case 3:
			$arenda = 'Краткосрочная и долгасрочная аренда';
			break;	
		default:
			$arenda = 'нет данных';
	}
	switch($mess[0]['zalog']){
		case 0:
			$zalog = 'Залог: Не выбрано'; 
			break;
		case 1:
			$zalog = 'Залог не нужен'; 
			break;
		case 2:
			$zalog = 'Залог нужен'; 
			break;	
		case 3:
			$zalog = 'Можно с залогом или без залога'; 
			break;
		default: 
			$zalog = 'нет данных'; 		
	}
	switch($mess[0]['ysluga']){
		case 0:
			$ysluga = 'Услуга: Не выбрано'; 
			break;
		case 1:
			$ysluga = 'Услуги водителя нет.'; 
			break;
		case 2:
			$ysluga = 'Услуги водителя есть'; 
			break;	
		case 3:
			$ysluga = 'Можно с водителем или без него'; 
			break;
		default: 
			$ysluga = 'нет данных'; 		
	}
	
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
	<link rel="stylesheet" type="text/css" href="css/modulReg.css" charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/menuR.css" charset="utf-8">
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
        <div id="mess1"><a href='/index' class='buttonSCR'>На главную</a></div>
        <div class="mess2">
            <div class="mess3">
				<table class="ob1">
					<tr><td><?php echo foto_logo($foto_logo_massiv, 80, 80); ?>
						<!-- <img width="80" height="80" alt="лого" src="\img\Net_logo.jpg">11 -->
					</td></tr>
            		<tr><td class="ob1tr"><?php echo $name5; ?></td></tr>
            		<tr><td class="ob1tr"><?php reiting(5);?></td></tr>
					<tr><td class="ob1tr">2 года на сайте</td></tr>
					<tr><td class="ob1tr">время ответа: <?php echo $otvet_; ?></td></tr>
					<tr><td class="ob1tr">способ оплаты: <?php echo $oplata_; ?></td></tr>
				</table>
			</div>
            <div class="mess3_1">
				<?php echo $mess[0]['proizv']." ".$mess[0]['model']; ?><br />
				<!-- <img width="90%"  alt="лого" src="\img\logo.png"> -->
				<?php
					switch(count($foto_)){
						case 1:
							echo "<img width='90%' id='fot0' src='".$foto_[0]."'>";
							break;
						case 2:
							echo "<img width='90%' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='50%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							break;
						case 3:
							echo "<img width='90%' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='40%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							echo "<img width='40%' id='fot2' class = 'img1' src='".$foto_[2]."'>";
							break;
						case 4:
							echo "<img width='90%' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='30%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							echo "<img width='30%' id='fot2' class = 'img1' src='".$foto_[2]."'>";
							echo "<img width='30%' id='fot3' class = 'img1' src='".$foto_[3]."'>";
							break;
						case 5:
							echo "<img width='90%' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='21%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							echo "<img width='21%' id='fot2' class = 'img1' src='".$foto_[2]."'>";
							echo "<img width='21%' id='fot3' class = 'img1' src='".$foto_[3]."'>";
							echo "<img width='21%' id='fot4' class = 'img1' src='".$foto_[4]."'>";
							break;	
						case 6:
							echo "<img width='90%' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='18%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							echo "<img width='18%' id='fot2' class = 'img1' src='".$foto_[2]."'>";
							echo "<img width='18%' id='fot3' class = 'img1' src='".$foto_[3]."'>";
							echo "<img width='18%' id='fot4' class = 'img1' src='".$foto_[4]."'>";
							echo "<img width='18%' id='fot5' class = 'img1' src='".$foto_[5]."'>";
							break;
						case 7:
							echo "<img width='90%' id='fot0' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='14%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							echo "<img width='14%' id='fot2' class = 'img1'  src='".$foto_[2]."'>";
							echo "<img width='14%' id='fot3' class = 'img1' src='".$foto_[3]."'>";
							echo "<img width='14%' id='fot4' class = 'img1' src='".$foto_[4]."'>";
							echo "<img width='14%' id='fot5' class = 'img1' src='".$foto_[5]."'>";
							echo "<img width='14%' id='fot6' class = 'img1' src='".$foto_[6]."'>";
							break;	
						case 8:
							echo "<img width='90%' id='fot0' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='12%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							echo "<img width='12%' id='fot2' class = 'img1' src='".$foto_[2]."'>";
							echo "<img width='12%' id='fot3' class = 'img1' src='".$foto_[3]."'>";
							echo "<img width='12%' id='fot4' class = 'img1' src='".$foto_[4]."'>";
							echo "<img width='12%' id='fot5' class = 'img1' src='".$foto_[5]."'>";
							echo "<img width='12%' id='fot6' class = 'img1' src='".$foto_[6]."'>";
							echo "<img width='12%' id='fot7' class = 'img1' src='".$foto_[7]."'>";
							break;		
						case 9:
							echo "<img width='90%' id='fot0' id='fot0' src='".$foto_[0]."'>";
							echo "<br />";
							echo "<img width='10%' id='fot1' class = 'img1' src='".$foto_[1]."'>";
							echo "<img width='10%' id='fot2' class = 'img1' src='".$foto_[2]."'>";
							echo "<img width='10%' id='fot3' class = 'img1' src='".$foto_[3]."'>";
							echo "<img width='10%' id='fot4' class = 'img1' src='".$foto_[4]."'>";
							echo "<img width='10%' id='fot5' class = 'img1' src='".$foto_[5]."'>";
							echo "<img width='10%' id='fot6' class = 'img1' src='".$foto_[6]."'>";
							echo "<img width='10%' id='fot7' class = 'img1' src='".$foto_[7]."'>";
							echo "<img width='10%' id='fot8' class = 'img1' src='".$foto_[8]."'>";
							break;
						default:
							echo "нет фото1";
					}
				?>							
			</div>
            <div class="mess3">
				<table class="ob1">
					<?php if($fUser) {
						echo "<div id='err'></div>";
						if (MessageTrue ($mess[0]['id_logo'], $key, $key2))
							echo "<tr><td><b>Мое объявление.</b></td></tr>";
						else{
							echo "<tr><td><button id='hat' data-c='".$mesId."' data-key='".$key."', data-key2='".$key2."'>связаться через чат</button></td></tr>";
							// выесняем ид пользователя
							$id_logo10 = getUserEntranceID($key, $key2);
							$id_logo10 = $id_logo10[0]["id"];
							if(flagfavorites($id_logo10,$mesId)==0){
								echo "<tr><td id='favorites_m'><button id='favorites' data-c='".$mesId."' data-key='".$key."', data-key2='".$key2."'>Добавить объявление в избранное</button></td></tr>";
							}
							else{
								echo "<tr><td id='favorites_m'><button style='background-color: #B22222; border: 2px solid #B22222; color: #fff; cursor:default;'>Объявление добавленно в избранное</button></td></tr>";
							}							
						}
					}else {
						 echo "<tr><td>Для связи через чат, пожалуйста <a href='/regdata'>зарегистрируйтесь</a> на сайте</td></tr>";
					}; ?>				
            		<tr><td class="ob1tr1">Производитель: <?php echo $mess[0]['proizv']; ?></td></tr>
            		<tr><td class="ob1tr">Модель: <?php echo $mess[0]['model']; ?></td></tr>
					<?php
						if($type_mes){
							echo '<tr><td class="ob1tr">'.$arenda.'</td></tr>';
							echo '<tr><td class="ob1tr">'.$zalog.'</td></tr>';
							echo '<tr><td class="ob1tr">'.$ysluga.'</td></tr>';
						}
					?>					
					<tr><td class="ob1tr">Регионы и города в которых возможна аренда<br /><button>Показать</button></td></tr>
					<tr><td class="ob1tr" id="show_tell_err">Телефон<br /><button id="show_tell" data-id="<?php echo $mesId;?>" data-key1="<?php echo $key;?>" data-key2="<?php echo $key2;?>">Показать</button></td></tr>
					
				</table>
            </div>
        </div>
        <div class="mess2_1">
			основные характеристики
			<div class="mess2_2">
				<?php echo $mess[0]['opis'];?> 				
			</div>	
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
<script src="/js/img1.js"></script>
<script src="/js/chat_mess.js"></script>
<script src="/js/show_tell.js"></script>
<script src="/js/favorites.js"></script>
</body>
</html>
<?php
 	closeDB();// закрыть БД
?>