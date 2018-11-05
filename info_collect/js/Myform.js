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
            editBtn.hide().siblings('.my-add').show().siblings('.my-done').show();
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
        })