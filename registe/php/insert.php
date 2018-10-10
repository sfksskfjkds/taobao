<?php
    header('Content-Type:application/json');
    header('Access-Control-Allow-Origin:*');
    include "connect.php";
    $json = json_decode(file_get_contents("php://input"));
    $username = $json -> username;
    $password = $json -> password;
    $coon = new db();
    // $sql = "select * from shop_user where username = '$username'";
    $insert_sql = "insert into shop_user (username,password,mark) values ('$username','$password','11')";
    $rows = $coon -> Query($insert_sql,3);
    if($rows){
        $arr = array("code"=>"200","msg"=>"");
    } else {
        $arr = array("code"=>"1000","msg"=>"未知错误，注册不成功");
    }
    echo json_encode($arr);
?>