<?php
    $press = 'class = "button2"';
    $flagSuh = empty ($_GET["m"]);// Проверка на существование переменной.
    if ($flagSuh)  $m = 1; // если переменной нету то она рована 1
    else 
        $m=$_GET["m"];
    
    $flagSuh2 = empty ($_GET["m2"]);// Проверка на существование переменной.
    if ($flagSuh2)  $m2 = 0; // если переменной нету то она рована 1
    else 
        $m2=$_GET["m2"];    
    $press1 = NULL; $press2 = NULL; $press3 = NULL; $press4 = NULL; $press7 = NULL; $press8 = NULL; $press9 = NULL; $press10 = NULL; $press11 = NULL;
    $press5 = NULL; $press6 = NULL;

    $flagSuh3 = empty ($_GET["m3"]);// Проверка на существование переменной.
    if ($flagSuh3)  $m3 = 0; // если переменной нету то она рована 1
    else 
        $m3=$_GET["m3"]; 

    switch ($m){
        case 1:
            $press1 = $press;
            break;
        case 2:
            $press2 = $press;
            break; 
        case 3:
            $press3 = $press;
            break; 
        case 4:
            $press4 = $press;
            break;
        case 5:
            $press7 = $press;
            break;   
        case 6:
            $press8 = $press;
            break;  
        case 7:
            $press9 = $press;
            break; 
        case 8:
            $press10 = $press;
            break; 
        case 9:
            $press11 = $press;
            break; 

    }

    switch ($m2){
        case 0:
            $press5 = $press;
            break;
        case 1:
            $press6 = $press;
            break; 
    }        
?>
<div id='menu_construction_machinery'>
    <div id='paragraph_name'>
        Выберети желаемый пункт
    </div>
    <div id='paragraph'>
        <button id="ButArenda" <?php echo $press5;?>>Продажа</button> <button id="ButProdaga" <?php echo $press6;?>>Аренда</button>
    </div>
    <div id='paragraph_name'>
        Объявления о сдаче в аренду
    </div>
    <div id='paragraph'>
        <!-- Присвоим идэнтификаторы разднлам 
        Бетонное оборудование и дробильные установки ButS1
        Бурильная и Сваебойная техника ButS2
        Грузовая техника ButS3
        Дорожная техника ButS4
        Коммунальная техника ButS5
        Погрузочная и Землеройная техника ButS6 
        Подъёмная техника ButS7
        Сельхозтехника ButS8
        Складская техника ButS9  -->

        <button id="ButS1" <?php echo $press1;?>>Бетонное оборудование и дробильные установки</button>
        <button id="ButS2" <?php echo $press2;?>>Бурильная и Сваебойная техника</button>
        <button id="ButS3" <?php echo $press3;?>>Грузовая техника</button>
        <button id="ButS4" <?php echo $press4;?>>Дорожная техника</button>
        <button id="ButS5" <?php echo $press7;?>>Коммунальная техника</button>
        <button id="ButS6" <?php echo $press8;?>>Погрузочная и Землеройная техника</button>
        <button id="ButS7" <?php echo $press9;?>>Подъёмная техника</button>
        <button id="ButS8" <?php echo $press10;?>>Сельхозтехника</button>
        <button id="ButS9" <?php echo $press11;?>>Складская техника</button>
    </div>
    <?php
    if ($fUser)
        require_once "bloks/menuR.php"; // Подключение лисного кабинета
    else
        require_once "bloks/modulReg.php"; 
    


    require_once "hablon/index_stroika.php";   
    
    // require_once "hablon/index_stroika.php"; // вставка шаблона объявлений
    ?>   
</div>


