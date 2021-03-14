<?php
require_once "service_information/function.php";
	connectDB();//открыть БД
	$name_page = getBDParam('name_reg'); // чтение из таблицы праметры
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $name_page[0]["parameter_value"];?></title>
	<link rel="stylesheet" type="text/css" href="css/main.css" charset="utf-8">	
	<link rel="stylesheet" type="text/css" href="css/header.css" charset="utf-8">
	<link rel="stylesheet" type="text/css" href="css/footer.css" charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/reg.css" charset="utf-8">	
	<link rel="stylesheet" type="text/css" href="css/construction_machinery.css" charset="utf-8">
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
        <div id="reginfo">
			<span>Введите код для регистрации на сайте</span>
			<div id="err"></div>
            <div class="reg">
				<input class="poleText" type="text" id="code1" placeholder="код" onclick="$(this).css('border-color', '#007a96')" /><br />
                <button id="regBoot">продолжить</button>
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
	<script src="/js/registr.js"></script>

</body>
</html>
<?php
 	closeDB();// закрыть БД
?>