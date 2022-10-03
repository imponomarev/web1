<?php

date_default_timezone_set('Europe/Moscow');

function yval($y){
    if ($y == ''){
        return false;
    }
    if (!is_numeric($y)){
        return false;
    }
    if ($y <= -3 or $y >= 5){
        return false;
    }
    return true;
}

function xval($x){
    if($x == ''){
        return false;
    }
    if(!is_numeric($x)){
        return false;
    }
    if(!in_array($x, array(-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2))){
        return false;
    }
    return true;
}

function rval($r){
    if($r == ''){
        return false;
    }
    if(!is_numeric($r)){
        return false;
    }
    if(!in_array($r, array(1, 1.5, 2, 2.5, 3))){
        return false;
    }
    return true;
}

$start = microtime(true);
$result = false;
$x = $_POST['x-value'];
$y = $_POST['y-value'];
$y = substr(strval($y),0,10);
$r = $_POST['r-value'];

if (xval($x) and yval($y) and rval($r)){
    //прямоугольник
    if ($x <= 0 && $y <= 0){
        if($x >= -$r/2 && $y >= -$r){
            $result = true;
        }
    };
    //треугольник
    if ($x <= 0 && $y >= 0) {
        if ($x >= -$r / 2 && $y <= $r && ($y <= 2 * $x + $r)){
            $result = true;
        };
    };
    //окружность
    if ($x >= 0 && $y >= 0) {
        if (pow($x, 2) + pow($y, 2) <= pow($r, 2)){
            $result = true;
        }
    }

    if ($result){
        $resultStr="В точку!";
    }
    else{
        $resultStr ="Мимо!";
    }

    echo '<tr class="text">
    <td class="text">' . $x . '</td>
    <td class="text">' . $y . '</td>
    <td class="text">' . $r . '</td>
    <td class="text">' .date("H:i:s", time()) . '</td>
    <td class="text">' . number_format((microtime(true) - $start)*1000, 3) . 'ms </td>
    <td class="text">'. $resultStr . ' </td>
    </tr>';
}
else{
    echo '<div class="text">Данные сервера не верны!</div>';
}