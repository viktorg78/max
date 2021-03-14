<?php	
require_once $_SERVER['DOCUMENT_ROOT']."/service_information/function.php";
global $fUser;
if(isset($_COOKIE['kartVender']) && isset($_COOKIE['kartVender2'])){ 
	$key=$_COOKIE['kartVender'];
	$key2=$_COOKIE['kartVender2'];
	connectDB();
	if(getUserEntrance($key, $key2)){
		$fUser = true;
	}
	else 
		$fUser = false;
	closeDB();		
}
 

?>