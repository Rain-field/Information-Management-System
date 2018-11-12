var editBtn = $(".edit-btn");
layui.use('laydate', function () {
    var laydate = layui.laydate;

    //同时绑定多个
    lay('.date').each(function () {
        laydate.render({
            elem: this
            , trigger: 'click'
            , theme: 'molv'
        });
    });
});

//-----------------------------编辑模式----------------------------------------//
//点击编辑按钮----进入编辑模式
editBtn.on('click', function () {
    console.log(this);
    $(this).hide().siblings('.my-add').show().siblings('.my-done').show();
    if ($('.edit-range')) {
        $('.edit-range>i').show();
        $('.edit-range').removeClass('edit-range-done');
    }
});

//点击添加按钮
$('.myform-mid .my-add').on('click', function () {
    $(this).before(
        `<div class='layui-inline edit-range'>
               <input type="text" name="time" class="layui-input my-input-mwid my-btn-blue">
               <button class = 'layui-btn  layui-btn-primary layui-btn-sm  my-from-boon my-from-short my-btn-blue my-hide my-input-mwid my-icon-del'></button>
               <i class='layui-icon  my-btn-blue my-icon-inline'>&#x1007;</i>
               </div>`
    );
    $('.edit-range>input').focus();

});
//判断输入的分类是否为空决定要不要进行渲染还是删除
$('.myform-mid').on('blur', '.edit-range>input', function () {
    if ($(this).val()) {
        var val = $(this).val();
        $(this).next().text(val).show();
        $(this).hide().siblings('i').removeClass('my-btn-blue').addClass('my-btn-danger');
    } else {
        $(this).parent().remove();
    }
});

//删除分类
$('.myform-mid').on('click', 'i.my-btn-danger', function () {
    $(this).parent().remove();
})

//完成编辑
//显示edit-btn,隐藏my-done,my-add类，隐藏删除类的标签
$('.myform-mid .my-done').on('click', function () {
    $(this).siblings('.my-add').hide().end().hide().siblings('.edit-btn').show();
    $('.edit-range>i').hide();
    $('.edit-range').addClass('edit-range-done');
});

//关于添加表的内容
//修改demo样例高度
var tableDemo = $('.myform-table-demo');
var tableAll = $('.myform-table-all');
window.onload = function () {
    tableDemo.height(tableAll.height());
    //四个按钮事件----------------------------------------------------------------------//
layui.use('layer', function () {
    var layer = layui.layer;

    var active = {
        //删除按钮操作
        delete: function () {
            var that = this;
            layer.open({
                title: '删除',
                content: '确定要删除吗？',
                resize: false,
                id: 'ondel',
                btn: ['确定', '取消'],
                yes: function (index, layero) { //这里面是我们确认的操作
                    console.log(that);
                    layer.close(index);
                   var text = $(that).siblings('.myform-table-name').text()
                    $(that).parents('.myform-table-all').parent().remove();
                    $('.recycle_bin_box').append(
                        ` <div class="Recycle-table">
                        <!--回收的文件-->
                        <p class="Recycle-text">${text}</p>
                        <button class="Recycle-btn1" data-method='Reduction'>
                            <i class="layui-icon layui-icon-return" style="font-size: 30px; color: #fff"></i><br>
                            还原表单
                        </button>
                        <button class="Recycle-btn2" data-method='Delete'>
                            <i class="layui-icon layui-icon-close-fill" style="font-size: 30px; color: #fff"></i><br>
                            删除表单
                        </button>
                    </div>`
                    )
                    layer.msg('删除成功', {
                        icon: 1,
                        time: 1000
                    });
                },
                btn2: function (index, layero) {

                },
                zIndex: layer.zIndex,
                success: function (layero) {

                }
            });
        },
        //主题事件功能
        color: function () {
            var that = this;
            var color;
            layer.open({
                title: '主题颜色',
                type: 0,
                content: `<div>
                    <div class='myform-theme' style=background-color:#ffffff;></div>
                    <div class='myform-theme' style=background-color:#ffccff;></div>
                    <div class='myform-theme' style=background-color:#ffcc66;></div>
                    <div class='myform-theme' style=background-color:#66ffcc;></div>
                    <div class='myform-theme' style=background-color:#33ccff;></div>
                    <div class='myform-theme' style=background-color:#ff9966;></div>
                    <div class='myform-theme' style=background-color:#ff99cc;></div>
                    <div class='myform-theme' style=background-color:#99ccff;></div>
                    <div class='myform-theme' style=background-color:#ccff33;></div>
                    <div class='myform-theme' style=background-color:#ffff66;></div>
                </div>`,
                btn: ['确定', '取消'],
                success: function () {
                    $('.myform-theme').click(function () {
                        color = $(this).css('backgroundColor');
                        $(this).addClass('myform-theme-focus').siblings().removeClass('myform-theme-focus')
                    })
                },
                yes: function (index) {
                    layer.close(index);
                    $(that).parents('.myform-table-all').css('backgroundColor', color).children('.myform-table-head').children('button.myform-table-del').css('backgroundColor', color);

                }
            })
        },
        //分类的函数定义
        range: function () {
            var that = this;
            layer.open({
                title: '分类',
                content: `<div class='myform-range layui-form-item  text-center'>
                            <div class='layui-inline'>
                            <label>分类</label>
                            <select name='range' lay-verify="required">
                            <option value=''>请选择</option>
                            <option value='1'>未分类</option>
                            <option value='2'>...</option>
                             </select>
                            </div>
                            </div>
                            `,
                btn: ['确定', '取消'],
                success: function () {

                },
                yes: function (index) {
                    layer.close(index)
                }
            })
        },

        //预览功能
        preview:function() {
            var that = this;
            layer.open({
                title:'预览',
                id:'preview',
                content:`
                    <div>占个位</div>
                `,
            })
        },

        //总览
        all:function() {
            var that = this;
            layer.open
        }

    }
    $('.myform-foot button').on('click', function () {
        var othis = $(this),
            method = othis.data('method');
            console.log(othis);
        active[method] ? active[method].call(this, othis) : '';
    })
    $('.myform-foot .layui-row').delegate('button','click',function() {
        var othis = $(this),
        method = othis.data('method');
        console.log(othis);
    active[method] ? active[method].call(this, othis) : '';
    })
});

}

window.onresize = function () {
    tableDemo.height(tableAll.height());
}

//导出设置------添加人员



