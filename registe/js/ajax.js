var sendAjax = function(url,options){
    var _default = {
        method:'get',
        data:null,
        success:null
    };
    for(var i in options){
        _default[i] = options[i];
    }
    if(_default.method.toUpperCase() === 'GET'){
        //解决get请求的缓存问题
        var f = url.indexOf('?') > -1 ? '&' : '?';
        url += f + '_=' + Date.now();
        for(var j in _default.data){
            url += '&' + j + '=' + _default.data[j];
        }
        _default.data = null;
    }
    var xhr = new XMLHttpRequest();
    xhr.open(_default.method,url,true);
    if(_default.method.toLowerCase() === 'post'){
        _default.data = JSON.stringify(_default.data);
        console.log(_default.data)
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            var data = xhr.responseText;
            // data = JSON.parse(data);
            console.log(data)
            if(typeof _default.success === 'function'){
                console.log(111)
                _default.success(data);
            }
        }
    }
    xhr.send(_default.data);
}