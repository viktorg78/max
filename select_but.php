<?php
$a=$_POST['a'];
switch ($a){
    case 1:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS1.php";
        break;
    case 2:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS2.php";
        break; 
    case 3:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS3.php";
        break;        
    case 4:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS4.php";
        break;
    case 5:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS5.php";
        break;
    case 6:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS6.php";
        break;
    case 7:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS7.php";
        break;
    case 8:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS8.php";
        break;
    case 9:
        $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS9.php";
        break;
        
    default:
    $error = require_once $_SERVER['DOCUMENT_ROOT']."/hablon/select_ButS1.php";   

}

echo $error;
?>