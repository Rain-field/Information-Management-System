$(function(){
    var str = '';//保存面包屑标题值
    // window.location.reload="index.html";
    // 重新刷新页面，使用sessionStorage储存主要是为了页面刷新后也能保持刷新前的状态
    if (sessionStorage.getItem("id")) {
        divShow(sessionStorage.getItem("id"));
        $('.nav_title').html(sessionStorage.getItem("title"));
        if (sessionStorage.getItem("id")>5) {//当前页面是系统设置时
            $('.system_set').eq(sessionStorage.getItem("id")-6).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
            $('.system_set').eq(sessionStorage.getItem("id")-6).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
            $('.system_set').parent().animate({ height: 'toggle' });
        }else if(sessionStorage.getItem("id")==5){//当前页面是发布时(属于表单设置)
            $('.form_set').eq(0).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
            $('.form_set').eq(0).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
            $('.form_set').parent().animate({ height: 'toggle' });
        }
        else{//当前页面是表单设置时
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
        // 保存高度
        sessionStorage.setItem("tableHeight",tableAll.height());
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
        menuSet(that,".system_set");
    })
    //系统设置
    $(document).on('click', '.system_set', function (e) {
        var that = $(this);
        menuSet(that,".form_set");
    })
})

// 在history对象中添加新的条目,改变url，传入两个参数
function historyState(obj,_this){
    //第一个参数保存当前的状态信息，可以存储json字符串，可以在popstate中使用，第二个参数大多浏览器不支持，一般用null代替，第三个参数是url地址，最重要的是不会重新刷新页面
    history.pushState(obj,"",_this.children('.box-name').attr("data-url"));
}
// 显示隐藏切换，传入类名
function divShow(index){
    $('.content_box').eq(index).show().siblings().hide();
}
// 表单设置和系统设置中要执行的内容，第一个参数表示$(this),特别注意：如果当前点击的是.system_set/.form_set,第二个参数就是.form_set/.system_set，第三个参数主要用于创建表单
function menuSet(that,class2,idx){
    if (!idx) {//如果没有传入idx执行
        if (class2 == ".form_set") {
            idx = that.index()+6;
        }else{
            idx = that.index();
        }
    }
    //让样例始终高度与表格相等
    if (idx == 0) {
        console.log(sessionStorage.getItem("tableHeight"))
        tableDemo.height(sessionStorage.getItem("tableHeight"));
        console.log(tableDemo.height());
    }
    var preTitle = that.parent().siblings().find('span').text();//从当前点击处找到面包屑导航
    $('.nav_title').text('');//避免面包屑标题二次点击重复出现
    str = `${preTitle} > ${that.text()}`//面包屑显示的内容
    if (idx == 5) {
        str = `${preTitle} > 发布`;
    }
    $('.nav_title').append(str);
    sessionStorage.setItem("title",str);//将面包屑的内容保存

    $(class2).removeClass('blue-whitefont');//移除另一项设置中列表项的背景色
    $(class2).children('.icon').css({ background: 'url(images/right.png) no-repeat' });//另一项设置中列表项列表项的图标恢复向右

    that.children('.icon').css({ background: 'url(images/down.png) no-repeat' })
    .end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });//当前点击的图标向下并且让其他项的图标恢复默认
    that.addClass('blue-whitefont').siblings().removeClass('blue-whitefont');

    divShow(idx);//调用函数divShow
    historyState({id:idx,title:str},that);//调用函数historyState
    sessionStorage.setItem("id",idx);
}
// 记录history对象状态
window.onpopstate = function(e){
    // console.log(e);
    // console.log(history.state);
    var pre_id = history.state.id;
    // 页面显示部分
    divShow(pre_id);
    // 面包屑导航部分
    $('.nav_title').html(history.state.title);
    sessionStorage.setItem("title",history.state.title);

    //左侧导航部分
    // 索引0-6表示表单设置对应内容块，7-9表示系统设置
    if (pre_id>5) {
        $('.system_set').eq(pre_id-6).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        $('.system_set').eq(pre_id-6).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
        $('.form_set').removeClass('blue-whitefont');
        $('.form_set').children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        // 如果当前索引小于6并且上一次索引大于5（表示从系统设置->表单设置）则展开响应列表项
        if (sessionStorage.getItem("id") < 6 ) {
            $('.system_set').parent().animate({ height: 'toggle' });
            $('.system_set').parents('.list_item').siblings('.list_item').children('.list_child').animate({ height: 'hide' });
        }
    }else{
        $('.form_set').eq(pre_id).children('.icon').css({ background: 'url(images/down.png) no-repeat' }).end().siblings().children('.icon').css({ background: 'url(images/right.png) no-repeat' });
        $('.form_set').eq(pre_id).addClass('blue-whitefont').siblings().removeClass('blue-whitefont');
        $('.system_set').removeClass('blue-whitefont');//系统设置中的各项去除类
        $('.system_set').children('.icon').css({ background: 'url(images/right.png) no-repeat' });//系统设置中的图标恢复默认；
        if (sessionStorage.getItem("id") >5) {
            $('.form_set').parent().animate({ height: 'toggle' });
            $('.form_set').parents('.list_item').siblings('.list_item').children('.list_child').animate({ height: 'hide' });
        }
    }
    sessionStorage.setItem("id",pre_id);
}
//点击创建表单
$(document).on('click','.myform-table-demo',function(){
    var that = $('.form_set').eq(2);
    menuSet(that,".system_set",2);
})
// 创建表单保存
$(document).on('click','.refer',function(){
    var that = $('.form_set').eq(0);//虽然点击的是第五项，但是属于我的表单部分
    menuSet(that,".system_set",5);
})