<?
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

class Connection {

    public static function getSellavi($apiURL, $secret){
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'accept: application/json',
            'x-token: ' . $secret
        ));
        curl_setopt($ch, CURLOPT_URL, $apiURL);
        $result = curl_exec($ch);
        curl_close($ch);
        echo $result;
    }
}
