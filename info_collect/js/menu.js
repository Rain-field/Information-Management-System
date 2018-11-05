$(function(){
    var str = '';//保存面包屑标题值
    window.location.reload="index.html";
    // 重新刷新页面
    if (sessionStorage.getItem("id")) {
        divShow(sessionStorage.getItem("id"));
        $('.nav_title').html(sessionStorage.getItem("title"));
        if (sessionStorage.getItem("id")>4) {
            $('.system_set').eq(sessionStorage.getItem("id")-5).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
            $('.system_set').eq(sessionStorage.getItem("id")-5).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
            $('.system_set').parent().animate({ height: 'toggle' });
        }else{
            $('.form_set').eq(sessionStorage.getItem("id")).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
            $('.form_set').eq(sessionStorage.getItem("id")).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
            $('.form_set').parent().animate({ height: 'toggle' });
        }
    // 第一次打开页面
    }else{
        divShow(0);
        $('.nav_title').html("表单设置 > 我的表单");
        $('.form_set').eq(0).addClass('blue-whitefont').parent().animate({ height: 'toggle' });
        $('.form_set').eq(0).children('.icon').css({ background: 'url(images/down.png) no-repeat' });
        sessionStorage.setItem("id",0);
        sessionStorage.setItem("title","表单设置 > 我的表单");
        historyState({id:"0",title:"表单设置 > 我的表单"},$('.form_set').eq(0));
    }

    // 导航菜单栏
    $(document).on('click', '.menu_title', function () {
        $('.nav_title').text('');//避免面包屑标题二次点击重复出现
        str = `${$(this).text()}`;
        $('.nav_title').append(str);

        $(this).siblings('.list_child').animate({ height: 'toggle' });
        $(this).parent('.list_item').siblings('.list_item').children('.list_child').animate({ height: 'hide' });
        $(this).children('.icon').css({ background: 'url(images/right.png) no-repeat' });
    })
    //表单设置
    $(document).on('click', '.form_set', function (e) {
        var that = $(this);
        var idx = that.index();
        var preTitle = that.parent().siblings().find('span').text();// 保存上级目录标题的名称
        $('.nav_title').text('');//初始化标题值
        str = `${preTitle} > ${that.text()}`
        $('.nav_title').append(str);
        sessionStorage.setItem("title",str);

        $('.system_set').removeClass('blue-whitefont');//系统设置中的各项去除类
        $('.system_set').children('.icon').css({ background: 'url(images/right.png) no-repeat' });//系统设置中的图标恢复默认；

        that.children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        that.addClass('blue-whitefont').siblings().removeClass('blue-whitefont');

        divShow(idx);
        historyState({id:idx,title:str},that);
        sessionStorage.setItem("id",idx);
    })
    //系统设置
    $(document).on('click', '.system_set', function (e) {
        var that = $(this);
        var idx = that.index()+5;
        var preTitle = that.parent().siblings().find('span').text();
        $('.nav_title').text('');
        str = `${preTitle} > ${that.text()}`
        $('.nav_title').append(str);
        sessionStorage.setItem("title",str);

        $('.form_set').removeClass('blue-whitefont');
        $('.form_set').children('.icon').css({ background: 'url(images/right.png) no-repeat' });

        that.children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        that.addClass('blue-whitefont').siblings().removeClass('blue-whitefont');

        divShow(idx);
        historyState({id:idx,title:str},that);
        sessionStorage.setItem("id",idx);
    })
})

// 改变url，传入两个参数
function historyState(obj,_this){
    history.pushState(obj,"",_this.children('.box-name').attr("data-url"));
}
// 显示隐藏切换，传入类名
function divShow(index){
    $('.content_box').eq(index).show().siblings().hide();
}

// 记录history对象状态
window.onpopstate = function(e){
    // console.log(e);
    console.log(history.state);
    var pre_id = history.state.id;
    // 页面显示部分
    divShow(pre_id);
    // 面包屑导航部分
    $('.nav_title').html(history.state.title);
    sessionStorage.setItem("title",history.state.title);

    //左侧导航部分
    // 索引0-4表示表单设置对应内容块，5-8表示系统设置
    if (pre_id>4) {
        $('.system_set').eq(pre_id-5).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        $('.system_set').eq(pre_id-5).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
        $('.form_set').removeClass('blue-whitefont');
        $('.form_set').children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        // 如果当前索引小于5并且上一次索引大于4（表示从系统设置->表单设置）则展开响应列表项
        if (sessionStorage.getItem("id") < 5 ) {
            $('.system_set').parent().animate({ height: 'toggle' });
            $('.system_set').parents('.list_item').siblings('.list_item').children('.list_child').animate({ height: 'hide' });
        }
    }else{
        $('.form_set').eq(pre_id).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        $('.form_set').eq(pre_id).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
        $('.system_set').removeClass('blue-whitefont');//系统设置中的各项去除类
        $('.system_set').children('.icon').css({ background: 'url(images/right.png) no-repeat' });//系统设置中的图标恢复默认；
        if (sessionStorage.getItem("id") >4) {
            $('.form_set').parent().animate({ height: 'toggle' });
            $('.form_set').parents('.list_item').siblings('.list_item').children('.list_child').animate({ height: 'hide' });
        }
    }
    sessionStorage.setItem("id",pre_id);
}
