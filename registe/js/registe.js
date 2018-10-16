var $next_btn = document.querySelector('.next_btn');
var $form_mobile = document.querySelector('.mobile');
var $form_msg = document.querySelector('.msg');
var $changeLi = document.querySelector('.changeLi');
var $changeLiAll = $changeLi.children;
var $mobile_inp = document.querySelector('.mobile_inp');
var $mobileMsg = document.querySelector('.mobileMsg');
var $move = document.querySelector('.move');
var $slider = document.querySelector('.slider');
var index = 0;
$next_btn.onclick = function () {
    if($mobile_inp.value == ''){
        $mobileMsg.style.display = 'block';
        $slider.style.top = '57px';
    }else{
        ++ index;
        $form_mobile.style.display = 'none';
        $form_msg.style.display = 'block';
        for(var i = 0;i < $changeLiAll.length;i++){
            $changeLiAll[i].removeAttribute('class');
        }
        $changeLiAll[index].setAttribute('class','active');
    }
    console.log(index)
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

//手机验证
$mobile_inp.onblur = function(){
    var reg = /^1\d{10}$/;
    var mobile_inp = $mobile_inp.value;
    if(!reg.test(mobile_inp)){
        $mobileMsg.style.display = 'block';
    }
}
$mobile_inp.onfocus = function(){
    $mobileMsg.style.display = 'none';
}

//滑块拖动
$slider.onmousedown = function(e){
    e = e || window.event;
    var x = e.offsetX;
    var y = e.offsetY;
    document.onmousemove = function(e){
        e = e || window.event;
        var _x = e.pageX - x - 400;
        if(_x <= 221){
            _x = 221;
        }
        if(_x > 496){
            _x = 496;
        }
        $slider.style.left = _x + 'px';
        $slider.style.top = '57px';
    }
    document.onmouseup = function(){
        document.onmousemove = null;
    }
}