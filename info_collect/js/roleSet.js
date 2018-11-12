//一般直接写在一个js文件中
layui.use(['layer', 'form', 'element','jquery'], function() {
    var layer = layui.layer
        , form = layui.form
        , element = layui.element
        ,$=layui.$;
    // 获得角色列表
    $('h2').each(function (ind,ele) {
        // console.log($(this).text());
        $(ele).click(function (e) {
            // console.log($(ele).text());
            if ($(ele).text().indexOf('角色列表') != -1){
                // $.ajax({
                //     url:'http://47.107.109.114/InfoCollection/OptionServlet',
                //     type:'POST',
                //     data:{},
                //     success:function (res) {
                //         console.log(res);
                //     }
                // })
            }
        })
    })
    // 四个按钮点击事件
    $('button').click(function (e) {
        var data_btn = $(this).data('btn');
        console.log(data_btn);
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
                        var data = $("#createRole_form").serializeArray();
                        var odata = JSON.stringify(data);
                        var oodata=JSON.parse(odata);
                        var dataArr = Array.from(oodata);
                        var dataName=dataArr[0].value;
                        var dataText=dataArr[1].value;
                        $("input:checkbox:checked").each(function(){
                            idsArr.push($(this).attr('id'));
                        });
                        console.log(idsArr);
                        console.log(dataName);
                        console.log(dataText);
                        // 插入数据到角色列表
                        $('.layui-colla-item').append('<div class="layui-colla-content layui-show">'+dataName+'</div>');
                        // element.on('collapse(roleList_col)', function(data){
                        //                         console.log(data);
                        //                         console.log(data.show); //得到当前面板的展开状态，true或者false
                        //                         if(data.show==true && dataName!=''){
                        //                             // console.log(data.title); //得到当前点击面板的标题区域DOM对象
                        //                             // console.log(data.content); //得到当前点击面板的内容区域DOM对象
                        //                             console.log( $($(data.content[0])).parent().append('<div class="layui-colla-content layui-show">'+dataName+'</div>') );
                        //                             dataName=null;
                        //                         }
                        // });
                        // $.ajax({
                        //     url:'http://47.107.109.114/InfoCollection/AddGroupServlet',
                        //     type:'POST',
                        //     data:{
                        //         // 'name':dataName,
                        //         // 'text':dataText,
                        //         // 'ids':idsArr
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
        // if (data_btn == 2) {
        //     console.log(data_btn);
        //     layer.open({
        //         title: '编辑角色',
        //         type: 1,
        //         content:$('.creatRole'),
        //         btn: ['保存', '取消'],
        //         area: ['500px', '500px'],
        //         yes:function(index,layero){
        //             $(function(){
        //                 var idsArr=[];
        //                 var data = $("#createRole_form").serializeArray();
        //                 var odata = JSON.stringify(data);
        //                 var oodata=JSON.parse(odata);
        //                 var dataArr = Array.from(oodata);
        //                 var dataName=dataArr[0].value;
        //                 var dataText=dataArr[1].value;
        //                 $("input:checkbox:checked").each(function(){
        //                     idsArr.push($(this).attr('id'));
        //                 });
        //                 console.log(idsArr);
        //                 console.log(dataName);
        //                 console.log(dataText);
        //                 // $.ajax({
        //                 //     url:'http://47.107.109.114/InfoCollection/AddGroupServlet',
        //                 //     type:'POST',
        //                 //     data:{
        //                 //         'name':dataName,
        //                 //         'text':dataText,
        //                 //         'ids':idsArr
        //                 //     },
        //                 //     success:function (res) {
        //                 //         console.log(res);
        //                 //     },
        //                 //     complete:function (res) {
        //                 //         console.log(res);
        //                 //     }
        //                 // })
        //             });
        //             layer.close(index);
        //         }
        //     });
        // }
        if (data_btn == 3) {
            console.log(data_btn);
            layer.open({
                title: '删除角色',
                content: '您确定要删除吗？',
                btn: ['确定', '取消'],
            })
        }
        if (data_btn==5 ||data_btn == 4 )  {
            console.log(this);
            // console.log(data_btn);
            layer.open({
                title: '选择用户',
                type: 1,
                content:$('.addRole'),
                btn: ['确定'],
                area: ['550px'],
                yes:function(index,layero) {
                    //过滤节点的机制 直接return node表示不做任何过滤
                    function filter(node) {
                        return node;
                    }
                    $(function () {
                        var zTree = $.fn.zTree.getZTreeObj("treeDemo");
                        //根据过滤机制获得zTree的所有节点
                        // console.log(zTree);
                        var nodes = zTree.getNodesByFilter(filter);
                        // console.log(nodes);
                        //遍历每一个节点然后动态更新nocheck属性值
                        var nodeArr=[];
                        var nodeParent='';//ztree父节点的name
                        for (var i = 0; i < nodes.length; i++) {
                            var node = nodes[i];
                            // console.log(node.checked); //false表示显示checkbox
                            if(node.checked==true){
                                nodeArr.push(node);
                            }
                            // zTree.updateNode(node);
                        }
                        console.log(nodeArr);
                        for(var i=0;i<nodeArr.length;i++){
                            if(nodeArr[i].pId==null){
                                nodeParent=nodeArr[i].name;
                            }
                        }
                    })
                    layer.close(index);
                }
            });
        }
    });
    // 角色列表的选中事件
    var roleNameText='';
    $('.layui-colla-content').each(function (ind,ele) {
        $(ele).click(function (e) {
            // console.log($(ele).text());
            roleNameText = $(ele).text();
            // console.log($(ele).css('backgroundColor'));
            $(ele).css('backgroundColor','#f2f2f2').siblings('.layui-colla-content').css('backgroundColor','#fff');
            e.stopPropagation();

        })
    })
    // 删除角色列表右边的人员
    $('.layui-icon-delete').each(function (ind,ele) {
        $(this).click(function (e) {
            console.log($(this).parent().parent());
            $(this).parent().parent().empty();
        })
    })
    $('button').click(function (ev) {
        ev.stopPropagation();
        var data_btn = $(this).data('btn');
        if (data_btn == 2 && roleNameText!='') {
            console.log(data_btn);
            layer.open({
                title: '编辑角色',
                type: 1,
                content: $('.creatRole'),
                btn: ['保存', '取消'],
                area: ['500px', '500px'],
                success: function(layero, index){
                    console.log($('input[id="roleName"]'));
                    $('input[id="roleName"]').text(roleNameText);
                    console.log($('input[id="roleName"]').text());
                    roleNameText='';
                },
                yes: function (index, layero) {
                    $(function () {
                        var idsArr = [];
                        var data = $("#createRole_form").serializeArray();
                        var odata = JSON.stringify(data);
                        var oodata = JSON.parse(odata);
                        var dataArr = Array.from(oodata);
                        var dataName = dataArr[0].value;
                        var dataText = dataArr[1].value;
                        $("input:checkbox:checked").each(function () {
                            idsArr.push($(this).attr('id'));
                        });
                        console.log(idsArr);
                        console.log(dataName);
                        console.log(dataText);
                        // $.ajax({
                        //     url:'http://47.107.109.114/InfoCollection/AddGroupServlet',
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
    })
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
        { id:11, pId:1, name:"张1"},

        { id:2, pId:0, name:"财务部"},
        { id:21, pId:2, name:"王1"},

        { id:3, pId:0, name:"解决方案部"},
        { id:31, pId:3, name:"李1"},

        { id:4, pId:0, name:"研发部"},
        { id:41, pId:4, name:"赵1"},
        { id:42, pId:4, name:"陈1"},
        { id:43, pId:4, name:"赵1"},
        { id:44, pId:4, name:"周1"},

        { id:5, pId:0, name:"行业客户部"},
        { id:51, pId:5, name:"刘1"},

        { id:6, pId:0, name:"产品部", isParent:true},
        { id:61, pId:6, name:"张2"}
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