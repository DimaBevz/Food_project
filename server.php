<?php

// php - не умеет нативно работать с данными в формате JSON, поэтому
// всё то, что приходит к нам от клиента мы будем дэкодировать: 

$_POST = json_decode(file_get_contents("php://input"), true); 

echo var_dump($_POST);
// эта команда берёт те данные которые нам пришли с сервера, 
// превращает их в строку и непосредственно показывает их нам обратно на клиенте 
// response который будет приходить к нам от сервера