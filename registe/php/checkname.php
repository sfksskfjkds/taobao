<?php
    header('Content-Type:application/json');
    header('Access-Control-Allow-Origin:*');
    include "connect.php";
    $username = $_GET['username'];
    // $password = $_GET['password'];
    $coon = new db();
    $sql = "select * from shop_user where username = '$username'";
    // $insert_sql = "insert into shop_user (username,password,mark) values ('$username','$password','11')";
    $rows = $coon -> Query($sql,2);
    if($rows){
        $arr = array("code"=>"1000","msg"=>"用户名已存在");
    } else {
        $arr = array("code"=>"200","msg"=>"");
    }
    echo json_encode($arr);
?>