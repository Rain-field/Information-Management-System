$(".yuansu").on('mousedown', function (e) {
    var that = $(this);
    var type = that.data("type");
    var element = createFunctions[type]();
    var mouseX = e.pageX,
        mouseY = e.pageY;



    // console.log(element.data(),infoElement.data());

    var time = new Date().getTime();
    var infoElement = createInfoFunctions[type]();
    element.data('signStr', time);
    infoElement.data('signStr', time);
    $('.toastinfo').append(infoElement);


    $("body").append(element);
    var elementWidth = element.width(),
        elementHeight = element.height();
    element.css({
        top: mouseY - (elementHeight / 2),
        left: mouseX - (elementWidth / 2)
    });
    $(window).on('mousemove', function (e) {
        element.show();
        element.css({
            top: e.pageY - (elementHeight / 2),
            left: e.pageX - (elementWidth / 2)
        });
    });
    $(window).one('mouseup', function (e) {
        var kuang = $(".right-panel");
        var kuangLeft = kuang.position().left,
            kuangTop = kuang.position().top;
        if (e.pageX < kuangLeft || e.pageY < kuangTop || e.pageX > kuangLeft + 400 || e.pageY > kuangTop + 800) {
            element.remove();
            infoElement.remove();
        } else {
            element.appendTo(kuang).css({
                position: "static",
                opacity: 1
            });
        }
        $(window).off("mousemove");
    });
});
$(document).on('click', '.create_yuansu', function (e) {
    console.log($(this).data());
    var that = $(this);
    // $(this).css({
    //     position: 'static'
    // })
    var type = $(this).data('type');
    $('.create_info').each(function () {
        if ($(this).data('signStr') == that.data('signStr')) {
            $(this).show().siblings().hide();
        }
    })
    var element = createInfoFunctions[type]();
    $('#clear').remove();
})
var offsetY, offsetX;
$(document).on('mousedown', '.create_yuansu', function (e) {
    var that = $(this);
    var type = that.data("type");
    var mouseX = e.pageX,
        mouseY = e.pageY;
    var elementWidth = that.width(),
        elementHeight = that.height();
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    that.css({
        position: 'fixed',
        top: mouseY - (e.offsetY)-5,
        left: mouseX - (e.offsetX)-7
    });
    that.after('<div id="clear"></div>');
    var currentTop = 0;
    var num_down = 0,
        num_up = 0;
    var initTop = parseInt(that.css('top'));
    $(window).on('mousemove', function (e) {
        $('#clear').remove();
        that.css({
            position: 'absolute',
            top: e.pageY - offsetY,
            left: e.pageX - offsetX,
            zIndex: 5
        });
        currentTop = parseInt(that.css('top'))
        // console.log(currentTop)
        if (currentTop - initTop > elementHeight) {

            num_down = parseInt((currentTop - initTop) / (elementHeight + 10));
            console.log('向下移动了' + num_down + '个');
        } else if (initTop - currentTop > elementHeight) {
            num_up = parseInt((initTop - currentTop) / elementHeight);
            console.log("向上移动了" + num_up + "个");

        }

    });
    $(window).one('mouseup', function (e) {
        $('#clear').remove();
        var kuang = $(".right_panel");
        // console.log(num_down,num_up);
        if (num_down > 0) {
            var next = that;
            for (var i = 0; i < num_down; i++) {
                next = next.next();
            }
            next.after(that);
            that.css({
                position: 'static'
            })
        }
        if (num_up > 0) {
            console.log(111111);
            var next1 = that;
            for (var i = 0; i < num_up; i++) {
                next1 = next1.prev();
            }
            next1.before(that);
            that.css({
                position: 'static'
            })
        }
        if (num_up == 0 || num_down == 0) {
            that.css({
                position: 'static'
            })
        }
        $(window).off("mousemove");
        num_down = 0, num_up = 0
    });
})




//--------------------右侧info信息变化①改变左边对应值②把响应数据写到左侧div的data中---------------
$(document).on('change', '.create_info input', function () {
    var that = $(this);
    var signStr;
    if ($(this).data('name') == 'single_title') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).children('span').text(that.val());
                $(this).data('title', that.val());
            }
        })
    } else if ($(this).data('name') == 'single_placeholder') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).children().children('input').attr('placeholder', that.val());
                $(this).data('placeholder', that.val());
            }
        })
    } else if ($(this).data('name') == 'select_moren') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).children('input').attr('placeholder', that.val());
                $(this).data('moren', that.val());
            }
        })
    } else if ($(this).data('name') == 'single_yanzheng') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                // $(this).children('input').attr('placeholder',that.val());
                $(this).data('yanzheng', that.prop('checked'));
            }
        })
    } else if ($(this).data('name') == 'single_unique') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                // $(this).children('input').attr('placeholder',that.val());
                $(this).data('unique', that.prop('checked'));
            }
        })
    }

    //多行
    if ($(this).data('name') == 'multi_title') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).children('span').text(that.val());
                $(this).data('title', that.val());
            }
        })
    } else if ($(this).data('name') == 'multi_placeholder') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).children('input').attr('placeholder', that.val());
                $(this).data('placeholder', that.val());
            }
        })
    } else if ($(this).data('name') == 'multi_yanzheng') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                // $(this).children('input').attr('placeholder',that.val());
                $(this).data('yanzheng', that.prop('checked'));
            }
        })
    } else if ($(this).data('name') == 'multi_unique') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                // $(this).children('input').attr('placeholder',that.val());
                $(this).data('unique', that.prop('checked'));
            }
        })
    }

    //单选

    //复选

    //下拉



    //附件
    if ($(this).data('name') == 'file_title') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).children('span').text(that.val());
                $(this).data('title', that.val());
            }
        })
    } else if ($(this).data('name') == 'file_yanzheng') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                // $(this).children('input').attr('placeholder',that.val());
                $(this).data('yanzheng', that.prop('checked'));
            }
        })
    } else if ($(this).data('name') == 'file_unique') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                // $(this).children('input').attr('placeholder',that.val());
                $(this).data('unique', that.prop('checked'));
            }
        })
    }

    //日期
    if ($(this).data('name') == 'date_title') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).children('span').text(that.val());
                $(this).data('title', that.val());
            }
        })
    } else if ($(this).data('name') == 'date_form') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).data('date_form', that.val());
            }
        })
    } else if ($(this).data('name') == 'date_yanzheng') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).data('yanzheng', that.prop('checked'));
            }
        })
    } else if ($(this).data('name') == 'date_unique') {
        signStr = $(this).parent().data('signStr');
        $('.create_yuansu').each(function () {
            if ($(this).data('signStr') == signStr) {
                $(this).data('unique', that.prop('checked'));
            }
        })
    }
})
$(document).on('click', '.create_info button', function () {
    var that = $(this);
    var signStr;
})


var createFunctions = {
    single: function () {
        return $('<div class="item create_yuansu" data-type="single" data-title="单行输入框"><span class="item-title">单行输入框</span><div class="item-con"><input type="text" placeholder="请输入对应的内容" readonly></div></div>');
    },
    multi: function () {
        return $('<div class="item create_yuansu" data-type="multi" data-title="多行输入框"><span class="item-title">多行输入框</span><div class="item-con"><input type="text" placeholder="请输入对应的内容" readonly></div></div>');
    },
    radio: function () {
        return $('<div class="item create_yuansu" data-type="radio" data-title="单选框"><span class="item-title">单选框</span><div class="item-con"><div class="item-box"><i class="fa fa-dot-circle-o"></i></div></div></div>');
    },
    checkbox: function () {
        return $('<div class="item create_yuansu" data-type="checkbox" data-title="多选框"><span class="item-title">多选框</span><div class="item-con"><div class="item-box"><i class="fa fa-check-square-o"></i></div></div></div>');
    },
    select: function () {
        return $('<div class="item create_yuansu" data-type="select" data-title="下拉框"><span class="item-title">下拉框</span><div class="item-con"><div class="item-box"><i class="fa fa-chevron-down"></i></div></div></div>');
    },
    file: function () {
        return $('<div class="item create_yuansu" data-type="file" data-title="附件"><span class="item-title">附件</span><div class="item-con"><div class="item-box"><i class="fa fa-file-o"></i></div></div></div>');
    },
    date: function () {
        return $('<div class="item create_yuansu" data-type="date" data-title="日期"><span class="item-title">日期</span><div class="item-con"><div class="item-box"><i class="fa fa-calendar"></i></div></div></div>');
    }
};


//  < i class = "fa fa-trash-o deleteBtn" > 
//info
//右侧信息。
var createInfoFunctions = {
    single: function () {
        return $('<div class="create_info" data-type="single" style="display: none"><p>标题：最多10字</p><input type="text" placeholder="单行文本框" data-name="single_title"><br><p>提示文字：最多10个字</p><input type="text" placeholder="我是单行，请输入" data-name="single_placeholder"><br>验证：<input type="checkbox" data-name="single_yanzheng"> 必填<br>唯一：<input type="checkbox" data-name="single_unique"> 是</div>')
    },
    multi: function () {
        return $('<div class="create_info" data-type="multi" style="display: none"><p>标题：最多10字</p><input type="text" placeholder="多行文本框" data-name="multi_title"><br><p>提示文字：最多10个字</p><input type="text" placeholder="我是多行，请输入" data-name="multi_placeholder"><br>验证：<input type="checkbox" data-name="multi_yanzheng"> 必填<br>唯一：<input type="checkbox" data-name="multi_unique"> 是</div>')
    },
    select: function () {
        return $(
            '<div class="create_info" style="display:none;" data-type="select"><p>标题：最多十个字</p><input type="text" name="title" value="下拉框" data-name="select_title"><p>选项：<a href="#">点击添加</a></p><div class="optionBox"><div class="itemBox"><input type="text" data-itemTitle="请选择" placeholder="请选择" readonly><span class="redText">默认文字</span></div><div class="itemBox"><input type="text" data-itemTitle="选项名" value="选项" ><img src="img/删除.png"></div></div><br><span>验证：</span><input type="checkbox" data-name="select_yanzheng">必填</div>'
        );
    },
    radio: function () {
        return $(
            '<div class="create_info" style="display:none;" data-type="radio" ><p>标题：最多十个字</p><input type="text" name="title" value="单选框" data-name="radio_title"><p>选项：<a href="#">点击添加</a></p><div class="optionBox"><div class="itemBox"><input type="text" data-checkTitle="选项名" value="选项" ><img src="img/删除.png"></div><div class="itemBox"><input type="text" data-checkTitle="选项名" value="选项" ><img src="img/删除.png"></div></div><br><span>验证：</span><input type="checkbox" data-name="radio_yanzheng">必填</div>'
        );
    },
    checkbox: function () {
        return $(
            '<div class="create_info" style="display:none;" data-type="checkbox" ><p>标题：最多十个字</p><input type="text" name="title" value="复选框" data-name="checkbox_title"><p>选项：<a href="#">点击添加</a></p><div class="optionBox"><div class="itemBox"><input type="text" data-checkTitle="选项名" value="选项" ><img src="img/删除.png"></div><div class="itemBox"><input type="text" data-checkTitle="选项名" value="选项" ><img src="img/删除.png"></div></div><br><span>验证：</span><input type="checkbox"  data-name="checkbox_yanzheng">必填</div>'
        );
    },
    file: function () {
        return $('<div class="create_info" data-type="file" style="display: none"><p>标题：最多10字</p><input type="text" value="附件" data-name="file_title"><br>验证：<input type="checkbox" data-name="file_yanzheng"> 必填<br>唯一：<input type="checkbox" data-name="file_unique"> 是</div>')
    },
    date: function () {
        return $('<div class="create_info" data-type="date" style="display: none"><p>标题：最多10字</p><input type="text" value="日期" data-name="date_title"><br> <p>日期格式:</p><br><input type="radio" data-name="date_form" name="dateform" value=1><span>年-月-日 时-分-秒</span><br></p><input type="radio" data-name="date_form" name="dateform" value=2><span>年-月-日</span><br> <p>验证：</p><input type="checkbox" data-name="date_yanzheng"> 必填<br>唯一：<input type="checkbox" data-name="date_unique"> 是</div>')
    }
}


//------------------------------------------
//给每个元素添加当前类
$('.right-panel').on('click', '.item', function () {
    $(this).addClass('item-active').siblings().removeClass('item-active');
});
//点击删除按钮，移除当前的类名为item的祖先元素
$('.right-panel').on('click', '.deleteBtn', function () {
    $(this).parents('.item').remove();
});