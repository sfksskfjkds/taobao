var $searchInp = document.querySelector('.searchInp');
window.onscroll = function(){
    var top = document.documentElement.scrollTop;
     if(top >= 121){
        $searchInp.setAttribute('id','searchInpScroll');
     }else{
        $searchInp.removeAttribute('id');
     }
}
// var $top = document.querySelector('.fix_btm');
// $top.onclick = function(){
//     var timer = setInterval(function(){
//         var _top = document.documentElement.scrollTop - 25;
//         if(_top <= 0){
//             _top = 0;
//             clearInterval(timer);
//         }
//         document.documentElement.scrollTop = _top;
//     },10)
// }
