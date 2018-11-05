layui.use(['layer', 'form', 'element','jquery'], function() {
    var layer = layui.layer
        , form = layui.form
        , element = layui.element
        ,$=layui.$;
    //你的代码都应该写在这里面
    $('button').click(function (e) {
        var data_btn = $(this).data('btn');
        if (data_btn == 1) {
            console.log(data_btn);
            layer.open({
            title: '新建角色',
            type: 1,
            //这里content是一个DOM，注意：最好该元素要存放在body最外层，否则可能被其它的相对元素所影响
            content:$('.creatRole'),
            btn: ['保存', '取消'],
            area: ['500px', '500px']
            });
        }
        if (data_btn == 2) {
            console.log(data_btn);
            layer.open({
                title: '编辑角色',
                type: 1,
                content:$('.creatRole'),
                btn: ['保存', '取消'],
                area: ['500px', '500px']
            });
        }
        if (data_btn == 3) {
            console.log(data_btn);
            layer.open({
                title: '删除角色',
                content: '您确定要删除吗？',
                btn: ['确定', '取消']
            })
        }
        if (data_btn == 4) {
            console.log(data_btn);
            layer.open({
                title: '选择用户',
                type: 1,
                content:$('.addRole'),
                btn: ['确定'],
                area: ['550px']
            });
        }
    });
// layui底部
});