var login = (function(){
    return {
        init:function(ele){
            if(typeof ele == 'string'){
               ele = document.querySelector(ele); 
            }
            this.$ele = ele;
            this.$usernameInp = this.$ele.querySelector('.admin');
            this.$passwordInp = this.$ele.querySelector('.pwd');
            this.$btn = this.$ele.getElementsByTagName('button')[0];
            this.event();           
        },
        event:function(){
            var _this = this;
            this.$btn.onclick = function(){
                //点击登录按钮，发送ajax验证用户名和密码
                var params = {
                    method:'post',
                    data:{
                        username:_this.$usernameInp.value,
                        password:_this.$passwordInp.value
                    },
                    success:function(data){
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:8088/taobao/landing/php/login.php',params);
            }
        },
        loginSuccess:function(data){
            if(data.code == 200){
                document.cookie = 'user-id='+data.data.id;
                document.cookie = 'token='+data.data.token;
                location.href = '../../homepage/html/homepage.html';
            }else{
                alert(data.msg);
            }
        }
    }
}());


//输入框验证
var $admin = document.querySelector('.admin');
var $_admin = document.querySelector('._admin');
var $pwd = document.querySelector('.pwd');
var $_pwd = document.querySelector('._pwd');
$admin.onblur = function(){
    var reg = /^\w{3,10}$/;
    var adminInp = $admin.value;
    if(!reg.test(adminInp)){
        $_admin.style.display = 'block';
    }
}
$admin.onfocus = function(){
    $_admin.style.display = 'none';
}
$pwd.onblur = function(){
    var reg = /^\w{6,13}$/
    var pwdInp = $pwd.value;
    if(!reg.test(adminInp)){
        $_pwd.style.display = 'block';
    }
}
$_pwd.onfocus = function(){
    $_pwd.style.display = 'none';
}