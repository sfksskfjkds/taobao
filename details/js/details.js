$('.show-image').mouseenter(function(){
    $('.filter').show();
    $('.show-big-image').show();
})
$('.show-image').mouseleave(function(){
    $('.filter').hide();
    $('.show-big-image').hide();
})
$('.show-image').mousemove(function(e){
    //一 ：实现放大镜跟随鼠标移动且鼠标在放大镜中心

    var pageX = e.pageX;
    var pageY = e.pageY;
    var offsetX = $('.show-image').offset().left;
    var offsetY = $('.show-image').offset().top;
    //鼠标相对被移入元素的位置
    var relativeX = pageX - offsetX;
    var relativeY = pageY - offsetY;
    //根据鼠标位置计算放大镜的位置(鼠标在放大镜的中心)
    var filOffsetX = $('.filter').width() / 2;
    var filOffsetY = $('.filter').height() / 2;
    $('.filter').css({left:relativeX - filOffsetX + 'px',
    top:relativeY - filOffsetY + 'px'});
    
    //二 ：处理边界问题
    
    //确定边界
    var maxFilX = $('.show-image').width() - $('.filter').width();
    var maxFilY = $('.show-image').height() - $('.filter').height();
    //获取放大镜相对父级show-image的位置
    var filX = $('.filter').position().left;
    var filY = $('.filter').position().top;
    if(filX >= maxFilX){
        //position().left这种方法只对可见元素有效，所以用下列方式(猜的)
        $('.filter').css('left',maxFilX + 'px');
        filX = maxFilX + 'px';
    }
    if(filX <= 0){
        $('.filter').css('left',0)
        filX = 0;
    }
    if(filY >= maxFilY){
        $('.filter').css('top',maxFilY + 'px');
        filY = maxFilY + 'px';
    }
    if(filY <= 0){
        $('.filter').css('top',0);
        filY = 0;
    }

    //三 ：让放大的图片的位置跟随着放大镜的位置变化

    //让放大的图片的移动方向与放大镜方向相反且为两倍关系
    var bigImgX = filX * 2;
    var bigImgY = filY * 2;
    $('.show-big-image img').css({left:-bigImgX + 'px',
    top:-bigImgY + 'px'});
})