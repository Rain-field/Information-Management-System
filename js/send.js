//Demo
        layui.use('form', function () {
            var form = layui.form,
                $ = layui.$;

            //监听提交
            form.on('submit(formDemo)', function (data) {
                layer.msg(JSON.stringify(data.field));
                return false;
            });
            var active = {
                Viewers: function () {
                    layer.open({
                        type: 1
                        , title: "分配表单查看人员"
                        , closeBtn: false
                        , area:  ['550px']
                        , shade: 0.3
                        , id: 'LAY_layuipro' //设定一个id，防止重复弹出
                        , btn: ['确定', '取消']
                        , content: `
                        <div class="layui-input-inline"style=" margin: 30px;;">
                                    <select id='select' name="modules" lay-verify="required" lay-search="">
                                        <option data-value="0">选择</option>
                                        <option data-value="1">超级管理员</option>
                                        <option data-value="2">经理</option>
                                        <option data-value="3">layim</option>
                                        <option data-value="4">element</option>
                                        <option data-value="5">laytpl</option>
                                    </select>
                                </div>

                   
                    `
                     //     <div class="addRole">
                    //     <div class="layui-tab">
                    //         <ul class="layui-tab-title">
                    //             <li class="layui-this">部门</li>
                    //             <li>职位</li>
                    //         </ul>
                    //         <div class="layui-tab-content">
                    //             <div class="layui-tab-item layui-show">
                    //                 <table class="layui-table">
                    //                     <colgroup>
                    //                         <col width="200">
                    //                         <col width="200">
                    //                         <col>
                    //                     </colgroup>
                    //                     <tbody>
                    //                     <tr>
                    //                         <td>
                    //                             <div class="search">
                    //                                 <input type="text" placeholder="查找部门/姓名/职位"><i class="layui-icon" style="font-size: 20px">&#xe615;</i>
                    //                             </div>
                    //                             <div class="content_wrap">
                    //                                 <div class="zTreeDemoBackground">
                    //                                     <ul id="treeDemo" class="ztree"></ul>
                    //                                 </div>
                    //                             </div>
                    //                         </td>
                    //                         <td></td>
                    //                     </tr>
                    //                     </tbody>
                    //                 </table>
                    //                 <button class="layui-btn">全部收起</button>
                    //                 <button class="layui-btn">全部展开</button>
                    //                 <span>已选择1人</span>
                    //             </div>
                    //             <div class="layui-tab-item">内容2</div>
                    //         </div>
                    //     </div>
                    // </div>
                        , success: function (layero) {
                            var btn = layero.find('.layui-layer-btn');
                            btn.find('.layui-layer-btn0').on('click',function() {
                                var temp = $('#select').children(':selected').val();
                                console.log(temp);
                                var arr='';


                            //     layero.data.forEach(function(item,index,ele ){
                            //     str+='<li friend_id='+item.user_id+'><img src="img/t'+parseInt(Math.random()*5)+'.jpg">'+'<span class="nickname"style="margin-left:30px">'+item.nickname+'</span>&nbsp;'+'<small>'+item.user_id+'</small></li>'
                            // })

                                arr+=`<span class="addpeople1">`+temp+`</span>`;

                                $('.addpeople').append($(arr));




                            })

                        }
                    });
                },

                Management: function () {
                    layer.open({
                        type: 1
                        , title: "分配表单查看人员"
                        , closeBtn: false
                        , area: '300px;'
                        , shade: 0.3
                        , id: 'LAY_layuipro' //设定一个id，防止重复弹出
                        , btn: ['确定', '取消']
                        , content: `
                                <div class="layui-input-inline"style=" margin: 30px;;">
                                    <select id='select' name="modules" lay-verify="required" lay-search="">
                                        <option data-value="0">选择</option>
                                        <option data-value="1">超级管理员</option>
                                        <option data-value="2">经理</option>
                                        <option data-value="3">layim</option>
                                        <option data-value="4">element</option>
                                        <option data-value="5">laytpl</option>
                                    </select>
                                </div> `
                        , success: function (layero) {
                            var btn = layero.find('.layui-layer-btn');

                            btn.find('.layui-layer-btn0').on('click',function() {
                                var temp = $('#select').children(':selected').val();
                                console.log(temp);
                                var arr='';
                                arr+=`<span class="addpeople1">`+temp+`</span>`;
                                $('.addpeople2').append($(arr));
                            })

                        },

                    });
                }

            };

            $('.Release-addpeople').on('click', function () {
                var othis = $(this), method = othis.data('method');
                active[method] ? active[method].call(this, othis) : '';
            });
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