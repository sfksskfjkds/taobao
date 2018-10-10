var $next_btn = document.querySelector('.next_btn');
var $form_mobile = document.querySelector('.mobile');
var $form_msg = document.querySelector('.msg');
$next_btn.onclick = function () {
    $form_mobile.style.display = 'none';
    $form_msg.style.display = 'block';
}
var registe = (function () {
    return {
        init: function (ele) {
            if (typeof ele == 'string') {
                ele = document.querySelector(ele);
            }
            this.$ele = ele;
            this.$usernameInp = this.$ele.querySelector('.admin');
            this.$passwordInp = this.$ele.querySelector('.psd');
            this.$registe_btn = this.$ele.querySelector('.registe_btn');
            this.event();
        },
        event: function () {
            var _this = this;
            this.$registe_btn.onclick = function () {
                // location.href = 'http://localhost:8088/taobao/landing/html/login.html';
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.registeSuccess(data);
                    }
                }
                sendAjax('../php/insert.php',params);
            }
            this.$usernameInp.onchange = function () {
                var params = {
                    method: 'get',
                    data: {
                        username: _this.$usernameInp.value
                    },
                    success: function (data) {
                        data = JSON.parse(data);
                        _this.checkname(data);
                    }
                }
                sendAjax('../php/checkname.php',params);
            }
        },
        registeSuccess: function (data) {
            if(data.code == 200){
                location.href = 'http://localhost:8088/taobao/landing/html/login.html';
            }else{
                alert(data.msg)
            }
        },
        checkname:function(data){
            if(data.code == 1000){
                alert(data.msg)
            }
        }
    }
}())