<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["phonenumber"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
        'name' => $_POST["name"],
        'email' => $_POST["email"],
    	'phonenumber' => $_POST["phonenumber"]
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 
}