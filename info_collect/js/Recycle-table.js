layui.use('form', function () {
    var form = layui.form,
        $ = layui.$;
    var active = {
        Reduction: function () {
            var that =this;
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
                ,yes:function(index) {
                    layer.close(index);
                    console.log("还原了");
                    var text = $(that).siblings('p').text();
                    console.log(text);
                    $(that).parents('.Recycle-table').remove();
                    
                    //还原表的信息
                  $('.my_form_box .myform-foot .layui-col-space18').append(
                    `<div class="layui-col-md4 layui-col-xs12 layui-col-sm6">
                    <div class="form-addform-style myform-table-all">
                        <div class="myform-table-head">
                            <div class="myform-table-name layui-inline">${text}</div>
                            <button class="myform-table-status layui-btn layui-btn-radius layui-btn-sm layui-btn-normal">正在采集</button>
                            <button class="myform-table-del layui-btn layui-btn-xs layui-btn-primary"
                                title='删除' data-method='delete'>
                                <i class="layui-icon">&#xe640;</i>
                            </button>
                        </div>
                        <p class="myform-table-createTime">这里创建时间示例，相应的数据应该来自后台</p>
                        <div class="myform-table-info layui-row ">
                            <div class="layui-col-md3 layui-col-xs3 text-center myform-table-text">
                                <span>0</span>
                                <div>已采集数据</div>
                            </div>
                            <div class="layui-col-md3 layui-col-xs3 text-center myform-table-text">
                                <span>0</span>
                                <div>今日新增</div>
                            </div>
                            <div class="layui-col-md3 layui-col-xs3 text-center myform-table-text">
                                <span>0</span>
                                <div>表单浏览量</div>
                            </div>
                            <div class="layui-col-md3 layui-col-xs3 myform-table-btnItems text-center">
                                <div class="layui-inline">
                                    <button class="layui-btn layui-btn-xs myform-table-btn" title="主题"
                                        data-method='color'>
                                        <i class="layui-icon">&#xe66a;</i>
                                    </button>
                                    <button class="layui-btn layui-btn-xs myform-table-btn" title="分类"
                                        data-method="range">
                                        <i class="layui-icon">&#xe60a;</i>
                                    </button>
                                </div>
                                <div class="layui-inline">
                                    <button class="layui-btn layui-btn-xs myform-table-btn" title="总览"
                                        data-method='all'>
                                        <i class="layui-icon"'>&#xe60f;</i>
                                    </button>
                                    <button class="layui-btn layui-btn-xs myform-table-btn"
                                        title="预览" data-method='
                                            preview'>
                                            <i class="layui-icon">&#xe60e;</i>
                                    </button>
                                </div>
 
                            </div>
                        </div>
                    </div>
                </div>`
                  )
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
    $('.Recycle-btn1,.Recycle-btn2').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';

    });


    $('.recycle_bin_box').delegate('.Recycle-btn1,.Recycle-btn2','click', function() {
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    })

});