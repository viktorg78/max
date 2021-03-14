<?php
    require_once $_SERVER['DOCUMENT_ROOT']."/service_information/cooki.php";
    connectDB();//открыть БД
    $id_logo = getUserEntranceID($key, $key2);
	$id_logo = $id_logo[0]["id"];
    $masseg1 = getBDMessage($id_logo, 1); // чтение из таблицы праметры
    closeDB();// закрыть БД
    echo '<table class="ob1">';
    echo '<tr><td>ОБЪЯВЛЕНИЯ О АРЕНДЕ</td></tr>';
    echo '</table>';
    for ($i=0; $i<count($masseg1);$i++){ 
        //$p1 = "Нет<br />фото";
        $p2 = "Не указано";
        $p3 = "Не указано";
        $p4 = "Не указано";

        if ($masseg1[$i]["tipT"]!=NULL)
            $p2 = $masseg1[$i]["tipT"];
        if ($masseg1[$i]["proizv"]!=NULL)
            $p3 = $masseg1[$i]["proizv"]; 
        if ($masseg1[$i]["model"]!=NULL)
            $p4 = $masseg1[$i]["model"];	
        echo'
        <table class="ob1">
            <tr><td rowspan="3" width = "110">'.foto2($masseg1, $i, 100, 70).'</td>
            <td class="ob1tr1">'.$p2.'</td></tr>
            <tr><td class="ob1tr">'.$p3.'</td></tr>
            <tr><td class="ob1tr">'.$p4.'</td></tr>
            <tr><td colspan="2"><button class="edit_arend" data-id="'.$masseg1[$i]['id'].'" data-key="'. $key.'" data-key2="'.$key2.'" data-p="0">редактировать объявление</button></td></tr>
            <tr><td colspan="2"><button class="dell" data-id="'.$masseg1[$i]['id'].'" data-key="'. $key.'" data-key2="'.$key2.'" data-p="0">Удалить объявление</button></td></tr>
        </table>';
    }

?>
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script> 
<script src="/js/dell.js"></script>
<script src="/js/edit.js"></script>
<!-- <script src="/js/prodag_arend.js"></script> -->