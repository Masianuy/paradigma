<?php
	  $phone = $_POST['phone'];
    $email = $_POST['email'];
    $name = $_POST['name'];
    $text = $_POST['text'];
    $houselist = $_POST['houselist'];
    $floorlist = $_POST['floorlist'];
    $squarelist = $_POST['squarelist'];
    $materiallist = $_POST['materiallist'];

	$to = "Masianuy91@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка c сайта";

	
	$msg="
    Name: $name /n
    Телефон: $phone /n
    Почта: $email /n
    Текст: $text /n
    Какой дом вы хотите построить?  $houselist /n
    Количество этажей -  $floorlist /n
    Площадь дома -  $squarelist /n
    Из какого материала?  $materiallist";
	mail($to, $subject, $msg, "From: $to ");

?>

<p class="success">Ваша форма отправлена!</p>
