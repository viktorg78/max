<?php
   $message3 =  getBDMessage4($m, $m3, $m2); //  getBDMessage3($m, $m2); // тип техники, тип объявления
   for($i=0; $i<count($message3); $i++){
      echo "<div class=\"index_message\" data-mess='".$message3[$i]["id"]."'>";
      echo "<div class = \"index_message_img\">".foto2($message3, $i, 200, 150)."</div>";
      echo "<div class = \"index_message_name\">".$message3[$i]["proizv"]." ".$message3[$i]["model"]."</div>";   
      echo "</div>";    
   } 

   
   if (count($message3)==0){
   // подгрузка картинок если нет обявлений то показывает картинки
   switch($m){
      case 1:
         require_once "hablon/img_ButS1.php"; // Бетонное оборудование и дробильные установки ButS1
         break;
      case 2:
         require_once "hablon/img_ButS2.php"; // Бурильная и Сваебойная техника ButS2
         break;
      case 3:
         require_once "hablon/img_ButS3.php"; // грузовая техника ButS3
         break;
      case 4:
         require_once "hablon/img_ButS4.php"; // дорожная техника ButS4
         break;
      case 5:
         require_once "hablon/img_ButS5.php"; // комунальная техника ButS5
         break;
      case 6:
         require_once "hablon/img_ButS6.php"; // Погрузочная и Землеройная техника ButS6
         break;  
      case 7:
         require_once "hablon/img_ButS7.php"; // Подъёмная техника ButS7
         break; 
      case 8:
         require_once "hablon/img_ButS8.php"; // Сельхозтехника ButS8
         break; 
      case 9:
         require_once "hablon/img_ButS9.php"; // Складская техника ButS9
         break;     
      default:
         require_once "hablon/img_ButS1.php"; //стройка         
   }
};
  
?>