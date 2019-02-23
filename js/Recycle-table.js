layui.use('form', function () {
    var form = layui.form,
        $ = layui.$;
    var active = {
        Reduction: function () {
            layer.open({
                type: 1
                , title: "提示"
                , closeBtn: false
                , area: ['300px ']
                , shade: 0.3
                , id: 'LAY_layuipro' //设定一个id，防止重复弹出
                , btn: ['确定', '取消']
                , content: '<span style="margin:20px; padding-top:20px;">是否恢复信息表</span>'
                       
                , success: function (layero) {
                    var btn = layero.find('.layui-layer-btn');
                    btn.find('.layui-layer-btn0').on('click',function() {
                        console.log($('.Recycle-table'));

                    })

                }
            });
        },
        Delete: function () {
            layer.open({
                type: 1
                , title: "提示"
                , closeBtn: false
                , area: ['300px']
                , shade: 0.3
                , id: 'LAY_layuipro' //设定一个id，防止重复弹出
                , btn: ['确定', '取消']
                , content: '<span style="margin:20px;  padding-top:20px;">是否删除信息表</span>'
                       
                , success: function (layero) {
                    var btn = layero.find('.layui-layer-btn');
                    btn.find('.layui-layer-btn0').on('click',function() {
                        $('.Recycle-table').remove();

                    })

                }
            });
        }
    }
    $('.Recycle-btn1').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';

    });
    $('.Recycle-btn2').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';

    });

});