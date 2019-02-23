//一般直接写在一个js文件中
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
                area: ['500px', '500px'],
                yes:function (index,layero) {
                    $(function(){
                        var idsArr=[];
                        var data = $("form").serializeArray();
                        var odata = JSON.stringify(data);
                        var oodata=JSON.parse(odata);
                        var dataArr = Array.from(oodata);
                        var dataName=dataArr[0].value;
                        var dataText=dataArr[1].value;
                        $("input:checkbox:checked").each(function(index,element){
                            idsArr.push($(this).attr('id'));
                        });
                        console.log(idsArr);
                        console.log(dataName);
                        console.log(dataText);

                        // $.ajax({
                        //     url:'http://47.107.109.114/InfoCollection/AddGroupServlet.php',
                        //     type:'POST',
                        //     data:{
                        //         'name':dataName,
                        //         'text':dataText,
                        //         'ids':idsArr
                        //     },
                        //     success:function (res) {
                        //         console.log(res);
                        //     },
                        //     complete:function (res) {
                        //         console.log(res);
                        //     }
                        // })
                    });

                    layer.close(index); //如果设定了yes回调，需进行手工关闭
                }
            });
        }
        if (data_btn == 2) {
            console.log(data_btn);
            layer.open({
                title: '编辑角色',
                type: 1,
                content:$('.creatRole'),
                btn: ['保存', '取消'],
                area: ['500px', '500px'],
                yes:function(){
                    $(function(){
                        var idsArr=[];
                        var data = $("form").serializeArray();
                        var odata = JSON.stringify(data);
                        var oodata=JSON.parse(odata);
                        var dataArr = Array.from(oodata);
                        var dataName=dataArr[0].value;
                        var dataText=dataArr[1].value;
                        $("input:checkbox:checked").each(function(index,element){
                            idsArr.push($(this).attr('id'));
                        });
                        console.log(idsArr);
                        console.log(dataName);
                        console.log(dataText);

                        // $.ajax({
                        //     url:'http://47.107.109.114/InfoCollection/AddGroupServlet.php',
                        //     type:'POST',
                        //     data:{
                        //         'name':dataName,
                        //         'text':dataText,
                        //         'ids':idsArr
                        //     },
                        //     success:function (res) {
                        //         console.log(res);
                        //     },
                        //     complete:function (res) {
                        //         console.log(res);
                        //     }
                        // })
                    });
                    layer.close(index);
                }
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
    // ztree
    var setting = {
        view: {
            addHoverDom: addHoverDom,
            removeHoverDom: removeHoverDom,
            selectedMulti: false
        },
        check: {
            enable: true
        },
        data: {
            simpleData: {
                enable: true
            }
        },
        edit: {
            enable: true
        }
    };

    var zNodes =[
        { id:1, pId:0, name:"办公室", open:false},
        { id:11, pId:1, name:"职位1"},

        { id:2, pId:0, name:"财务部"},
        { id:21, pId:2, name:"会计1"},

        { id:3, pId:0, name:"解决方案部"},
        { id:31, pId:3, name:"职位1"},

        { id:4, pId:0, name:"研发部"},
        { id:41, pId:4, name:"前端工程师"},
        { id:42, pId:4, name:"Java工程师"},
        { id:43, pId:4, name:"UI设计工程师"},
        { id:44, pId:4, name:"系统开发工程师"},

        { id:5, pId:0, name:"行业客户部"},
        { id:51, pId:5, name:"职位1"},

        { id:6, pId:0, name:"产品部", isParent:true},
        { id:61, pId:6, name:"销售员"}
    ];

    $(document).ready(function(){
        $.fn.zTree.init($("#treeDemo"), setting, zNodes);
    });

    var newCount = 1;
    function addHoverDom(treeId, treeNode) {
        var sObj = $("#" + treeNode.tId + "_span");
        if (treeNode.editNameFlag || $("#addBtn_"+treeNode.tId).length>0) return;
        var addStr = "<span class='button add' id='addBtn_" + treeNode.tId
            + "' title='add node' onfocus='this.blur();'></span>";
        sObj.after(addStr);
        var btn = $("#addBtn_"+treeNode.tId);
        if (btn) btn.bind("click", function(){
            var zTree = $.fn.zTree.getZTreeObj("treeDemo");
            zTree.addNodes(treeNode, {id:(100 + newCount), pId:treeNode.id, name:"new node" + (newCount++)});
            return false;
        });
    };
    function removeHoverDom(treeId, treeNode) {
        $("#addBtn_"+treeNode.tId).unbind().remove();
    };
});