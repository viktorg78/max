<?php
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
$error ="";
$key = strip_tags($_POST['id_f']);// ключ 1
$key2 = strip_tags($_POST['id_f2']);// ключ 2 
$search_m_1 = strip_tags($_POST['search_m_1']);
$search_m_2 = strip_tags($_POST['search_m_2']);
$search_m_3 = strip_tags($_POST['search_m_3']);
$search_m_4 = strip_tags($_POST['search_m_4']);
$search_m_typTeh = strip_tags($_POST['search_m_typTeh']);
$search_m_name1 = trim (strip_tags($_POST['search_m_name1']));
$search_m_name2 = strip_tags($_POST['search_m_name2']);
$search_m_region = strip_tags($_POST['search_m_region']);
$search_s_oblast = strip_tags($_POST['search_s_oblast']);
$search_m_sity = strip_tags($_POST['search_m_sity']);
$n=0;
// 0 - значит оба параметра введены верно 
// 1 - оба параметра введены но первый больше второго, что не верно
// 2 - не введен первый параметр значит ограничения только по второму
// 3 - не введен второй параметр значит ограничим только по первому
// 4 - не введены оба параметра. работа без фильтра
// 5 - не является числом
$search =""; //сюда пойдет фильтр поиска

if ($search_m_1<>"on" && $search_m_2<>"on"){
    $error="er1"; //не выбран аренда и продажа. нечего показывать
    echo $error;
    exit;
}elseif($search_m_1=="on" && $search_m_2<>"on"){
    $search=$search." AND MES.type_mes =1";
}elseif($search_m_1<>"on" && $search_m_2=="on"){
    $search=$search." AND MES.type_mes =0";
}

if($search_m_3 == "on" && $search_m_4 <> "on"){
    $search=$search." AND MES.vi =0";
}elseif($search_m_3 <> "on" && $search_m_4 == "on")
    $search=$search." AND MES.vi =1";

if (empty($search_m_name1) == true && empty($search_m_name2) == true){
   $n=4;
}elseif(empty($search_m_name1) == true){
    $n=2;

}elseif(empty($search_m_name2) == true){
    $n=3;
}elseif((is_numeric($search_m_name1)== false && is_null($search_m_name1) == false) || (is_numeric($search_m_name2)== false && is_null($search_m_name2) == false)){
    $n=5;
}elseif($search_m_name1>=$search_m_name2){
    $n=1;
}
switch($n){
    case 5:
        $error = "er2";
        echo $error;
        exit;
        break;
    case 1:
        $error = "er2";
        echo $error;
        exit;
        break;
    case 0:
        $search=$search." AND MES.cesh > ".$search_m_name1." AND MES.cesh < ".$search_m_name2;
        break;
    case 2:
        $search=$search." AND MES.cesh < ".$search_m_name2;     
        break;
    case 3:   
        $search=$search." AND MES.cesh > ".$search_m_name1;     
        break;        
}

if ($search_m_typTeh <> "all"){
    $search=$search." AND MES.id_type_car=".$search_m_typTeh;
}

if ($search_m_region <> "all" && $search_s_oblast == "all"){
    $search=$search." AND REG.id= ".$search_m_region;
    // echo $search;
}
    elseif($search_s_oblast <> "all" && $search_m_sity == "all"){
    $search=$search." AND OBL.id= ".$search_s_oblast;
    // echo $search;
}
    elseif($search_m_sity <> "all" && empty($search_m_sity) == false){
    $search=$search." AND SITY.id= ".$search_m_sity;
    // echo $search;
}
   

   

connectDB();//открыть БД
$getSearch =getSearch($search); // проба поиска
// $id_logo = getUserEntranceID2($key, $key2);
// $logo=addslashes(file_get_contents($_FILES['myfile']['tmp_name']));
// save_logo($id_logo, $logo);
closeDB();// закрыть БД
echo '<hr class="poloska" />';

for($i=0; $i<count($getSearch); $i++){

    

    echo '<a href="message?id='.$getSearch[$i]['id'].'"><table class="table_serhc" >
            <tr>
                <td td rowspan = "5" width="200px">'.foto2($getSearch, $i, 200, 200).'</td>
                <td width="250px">'.$getSearch[$i]['car'].'</td>
                <td class="belii" td rowspan = "5">'.$getSearch[$i]['opis'].'</td>
            </tr>
            <tr>
                <td width="250px">'.$getSearch[$i]['proizv'].' '.$getSearch[$i]['model'].'</td>
            </tr>
            <tr>
                <td width="250px">'.$getSearch[$i]['sity'].'</td>
            </tr>	
            <tr>
                <td width="250px">Города и регионы в которых мы работаем</td>
            </tr>
            <tr>
                <td width="250px">'.$getSearch[$i]['cesh'].' руб./час</td>
            </tr>
        </table></a>
        <hr class="poloska" />';
}


// $error = "search= ".$search;
// echo $error;
?>
