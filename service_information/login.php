<?php
//Базовый класс для регистрации пользователя
class User
{
    private $login;
    private $parol;

    public function __construct($login, $parol){
        $this->login = $login;
        $this->parol = $parol;
    }
    // Запись в ДБ
    function setDB(){
        global $mysqli;
        $result = $mysqli->query("CALL P_Login(\"$login\",\"$parol\"");
        return $result;
    }
    
}
?>