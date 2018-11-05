layui.use('laydate', function () {
    var laydate = layui.laydate;

    //常规用法
    // laydate.render({
    //     elem: '.date1,.date2'
    // });
    
   
    //同时绑定多个
    lay('.date').each(function () {
        laydate.render({
            elem: this
            , trigger: 'click'
        });
    });

    //墨绿主题
    laydate.render({
        elem: '.date'
        , theme: 'molv'
    });
});