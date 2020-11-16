<?php
include_once './../curl/connectToSellavi.php';
$connection = new Connection();
$connection->getSellavi('https://ru.sellavi.com/gateway/categories', '70b6b3-9cf11c-dc28c5-d9a3ed-3b5ea5');
?>