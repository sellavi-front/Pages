<?php
include_once './../curl/connectToSellavi.php';
$connection = new Connection();
$connection->getSellavi('https://ru.sellavi.com/gateway/categories', '5085aa-9b122e-dc240d-a9d96b-f295f8');
?>