$('.show-image').mouseenter(function () {
    $('.filter').show();
    $('.show-big-image').show();
})
$('.show-image').mouseleave(function () {
    $('.filter').hide();
    $('.show-big-image').hide();
})
$('.show-image').mousemove(function (e) {
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
    $('.filter').css({
        left: relativeX - filOffsetX + 'px',
        top: relativeY - filOffsetY + 'px'
    });

    //二 ：处理边界问题

    //确定边界
    var maxFilX = $('.show-image').width() - $('.filter').width();
    var maxFilY = $('.show-image').height() - $('.filter').height();
    //获取放大镜相对父级show-image的位置
    var filX = $('.filter').position().left;
    var filY = $('.filter').position().top;
    if (filX >= maxFilX) {
        //position().left这种方法只对可见元素有效，所以用下列方式(猜的)
        $('.filter').css('left', maxFilX + 'px');
        filX = maxFilX + 'px';
    }
    if (filX <= 0) {
        $('.filter').css('left', 0)
        filX = 0;
    }
    if (filY >= maxFilY) {
        $('.filter').css('top', maxFilY + 'px');
        filY = maxFilY + 'px';
    }
    if (filY <= 0) {
        $('.filter').css('top', 0);
        filY = 0;
    }

    //三 ：让放大的图片的位置跟随着放大镜的位置变化

    //让放大的图片的移动方向与放大镜方向相反且为两倍关系
    var bigImgX = filX * 2;
    var bigImgY = filY * 2;
    $('.show-big-image img').css({
        left: -bigImgX + 'px',
        top: -bigImgY + 'px'
    });
})


//点击选择商品数量
var count = $('.tb_amount').find('input').attr('value');
count = Number(count);
$('.add').click(function () {
    ++count;
    $('.tb_amount').find('input').attr('value', count);
    count = $('.tb_amount').find('input').attr('value');
})
$('.minus').click(function () {
    if (count >= 2) {
        --count;
    }
    if (count <= 1) {
        count = 1;
    }
    $('.tb_amount').find('input').attr('value', count);
    count = $('.tb_amount').find('input').attr('value');
})
//点击添加购物车
function MoveBox(obj) {
    var divTop = $(obj).offset().top;
    var divLeft = $(obj).offset().left;
    var objClone = $(obj).clone(true);
    $('.img-box').append(objClone);
    objClone.css({ "position": "absolute", "z-index": "500", "left": 0, "top": 0 });
    objClone.animate({ "left": ($(".shop_car").offset().left - $(".shop_car").width()) - 120 + "px", "top": ($(document).scrollTop()) - 550 + "px", "width": "100px", "height": "70px" }, 500, function () {
        objClone.remove();
    });
    //添加本地存储
    var id = 1,
        img = $('.show-image').find('img').attr('src'),
        dpt = $('.main_title').find('h3').text(),
        price = $('.price').find('em').text(),
        total;
    console.log(price)
    var shopList1 = localStorage.shopList1 || '[]';
    shopList1 = JSON.parse(shopList1);
    console.log(shopList1)
    for (var i = 0; i < shopList1.length; i++) {
        console.log(111)
        if (shopList1[i].id === id) {
            shopList1[i].count = Number(shopList1[i].count) + Number(count);
            break;
        }
    }
    console.log(shopList1.length)
    if (i === shopList1.length) {
        shopList1.push({
            id: id,
            img: img,
            count: count,
            price: price,
            dpt: dpt
        })
    }
    localStorage.shopList1 = JSON.stringify(shopList1);
}

