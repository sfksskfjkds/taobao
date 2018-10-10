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