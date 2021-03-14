<header>
<?php 
global $fUser;
$name = getBDParam('site_name'); // чтение из таблицы праметры
echo $name[0]["parameter_value"]; // название сайта
//if ($fUser) echo "      >>Пользовательский режим<<"; 
//   else echo "     >>Гостевой режим<<";
?>
<span>
<i class="fa fa-facebook" aria-hidden="true"></i>
<i class="fa fa-twitter" aria-hidden="true"></i>
<i class="fa fa-share-alt" aria-hidden="true"></i>
<i class="fa fa-search" aria-hidden="true"></i>
</span>
</header>