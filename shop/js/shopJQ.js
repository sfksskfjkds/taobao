$('#checkAll').click(function(){
    $('.ckx_inp').attr('checked','checked');
    $('#checkAll').click(function(){
        $('.ckx_inp').removeAttr('checked');
    })
})