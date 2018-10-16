
var loc = localStorage.shopList1;
loc = JSON.parse(loc);
console.log(loc)
var arr = [];
for (var i = 0; i < loc.length; i++) {
    var str = loc[i].price.slice(1);
    str = parseFloat(str);
    arr.push(`
    <ul class="item" index="${loc[i].id}">
    <li class="td_chk">
    <input type="checkbox" class="ckx_inp">
    </li>
    <li class="td_inner">
    <a href="" class="td_img">
    <img src="${loc[i].img}" alt="">
        </a>
        <div class="dpn">
        <a href="">${loc[i].dpt}</a>
        <div class="td_ety"></div>
            <div class="icons">
                <img src="../images/xcard.png" alt="">
                <img src="../images/TB1zEypQVXXXXcqXXXXXXXXXXXX-16-16.png" alt="">
                <img src="../images/T1Vyl6FCBlXXaSQP_X-16-16.png" alt="">
                </div>
                </div>
                </li>
    <li class="empty"></li>
    <li class="price">${loc[i].price}</li>
    <li class="count">
    <a href="javascript:;" class="min">-</a>
    <input type="text" value="${loc[i].count}" class="count_inp">
    <a href="javascript:;" class="add">+</a>
    </li>
    <li class="total">￥+${str * Number(loc[i].count)}</li>
    <li class="operate">                                                                                                       
        <a class="collect" href="">移入收藏夹</a>
        <a class="del" href="javascript:;">删除</a>
    </li>
</ul>
    `);
}
arr = arr.join('');
$('.shop_list').append(arr);


//设置复选框
$('#checkAll').click(function () {
    if ($(this).prop('checked') == true) {
        $('.td_chk input').prop('checked', true);
        $('.pay a').css({ 'cursor': 'pointer', 'background': 'red' })
    } else {
        $('.td_chk input').prop('checked', false);
        $('.pay a').css({ 'cursor': 'not-allowed', 'background': '#aaa' })
    }
})

$('.td_chk input').on('click', function () {
    $('.pay a').css({ 'cursor': 'pointer', 'background': 'red' })
    var bool = true;
    $('.td_chk input').each(function () {
        if ($(this).prop('checked') == false) {
            bool = false;
            return bool;
        }
    })
    $('#checkAll').prop('checked', bool);
})
//设置结算
var pay = $('.pay').find('em').text();
pay = Number(pay.slice(1));
$('.td_chk input').on('click', function () {
    $('.td_chk input').each(function () {
        if ($(this).prop('checked') == true) {
            var total = $(this).parent().parent().find('.total').text();
            total = Number(total.slice(1));
            pay += total;
        }
    })
    $('.pay').find('em').text('￥' + pay);
})



$('.operate .del').click(function () {
    for (var j = 0; j < loc.length; j++) {
        if (loc[j].id == $(this).parent().parent().attr('index')) {
            $(this).parent().parent().remove();
        }
    }
    //删除本地存储的一条数据                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    loc = loc.splice(j, 1);
    loc = JSON.stringify(loc);
    //替换本地存储的数据
    localStorage.shopList1 = localStorage.shopList1.replace(localStorage.shopList1, loc);
})


//添加商品数量

// $('.add').on('click', function () {
//     count = $(this).parent().find('input').attr('value');
//     total = $(this).parent().parent().find('.total').text();
//     total = Number(total.slice(1));
//     count = Number(count);
//     ++count;
//     $(this).parent().find('input').attr('value', count);
//     // $(this).parent().parent().find('.total').text('￥' + count * total);
//     // count = $(this).parent().find('input').attr('value');
// })
// $('.min').on('click', function () {
//     count = $(this).parent().find('input').attr('value');
//     total = $(this).parent().parent().find('.total').text();
//     total = Number(total.slice(1));
//     count = Number(count);
//     if (count >= 2) {
//         --count;
//     }
//     if (count <= 1) {
//         count = 1;
//     }
//     $(this).parent().find('input').attr('value', count);
//     // count = $(this).parent().find('input').attr('value');
//     // $(this).parent().parent().find('.total').text('￥' + count * total);
// })
// total.text('￥' + count * total);

$('.count').on('click','a', function () {
    var count, total,price;
    if ($(this).text()=='+') {
        count = $(this).parent().find('input').attr('value');
        price = $(this).parent().parent().find('.price').text();
        total = $(this).parent().parent().find('.total').text();
        price = Number(price.slice(1)) * 100;
        count = Number(count);
        ++count;
        console.log(count);
        console.log(total);

        $(this).parent().find('input').attr('value', count);
        $(this).parent().parent().find('.total').text('￥' + count * price / 100);
        // $(this).parent().find('input').attr('value', count);
    }
    if ($(this).text()=='-') {
        count = $(this).parent().find('input').attr('value');
        price = $(this).parent().parent().find('.price').text();
        price = Number(price.slice(1)) * 100;
        total = $(this).parent().parent().find('.total').text();
        count = Number(count);
        if (count >= 2) {
            --count;
        }
        if (count <= 1) {
            count = 1;
        }
        $(this).parent().find('input').attr('value', count);
        $(this).parent().parent().find('.total').text('￥' + count * price / 100);
    }
})