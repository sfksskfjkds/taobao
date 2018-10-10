<?php
    header("Content-Type:application/json");
    header("Access-Control-Allow-Origin:*");
    include "connect.php";
    //获取json数据
    $json = json_decode(file_get_contents("php://input"));
    $username = $json -> username;
    $password = $json -> password;
    $coon = new db();
    $sql = "select * from shop_user where username='$username' and password='$password'";
    $rows = $coon -> Query($sql,2);
    if($rows){
        //用户名存在
        $arr = array("code" => "200","msg"=>"","data"=>array("id"=>$rows["id"],"token"=>"12345"));

    }else{
        //不存在
        $arr = array("code"=>"1000","msg"=>"用户名或密码输入错误,若您没有注册，请先注册");
    }
    echo json_encode($arr);
?>