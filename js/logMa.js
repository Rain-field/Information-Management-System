// layui.use(['table','laydate'], function(){
//       var table = layui.table;
//       var laydate = layui.laydate;
//       var newRes = {};//定义一个新对象返回数据；
//       var logObj = new Obj("iName","startTime","endTime","oper","opertype");//定义一个数组保存用户查询条件
//       var logObj2 = [];//定义一个数组保存操作后的查询条件
//       laydate.render({
//         elem: '#startTime', //指定元素
//         theme: '#3EAFE0'
//       });
//       laydate.render({
//         elem: '#endTime', //指定元素
//         theme: '#3EAFE0'
//       });
//       table.render({
//         elem: '#tb',
//         even: 'true', //开启隔行背景
//         url: 'http://localhost:3303/data', //数据接口
//         page: {
//           theme: '#3EAFE0',
//           layout: ['prev', 'page', 'next', 'skip','last'],
//           prev: '上一页',
//           next: '下一页',
//           limit:5
//         },
//         id: 'testReload',
//         size: 'sm',
//         limit: 5,//每页显示条数
//         cols: [[ //表头
//           {field: 'id', title: '序号',  fixed: 'left', align: 'center',width: '5%'},
//           {field: 'placeTime', title: '发生时间', align: 'center',width: '30%'},
//           {field: 'iName', title: '表单名称', align: 'center',width: '45%'},
//           {field: 'oper', title: '操作人员', align: 'center',width: '10%'},
//           {field: 'opertype', title: '操作类型', align: 'center',width: '10%'}
//         ]],
//         parseData: function(res){ //res 即为原始返回的数据
//           console.log(res);
//           if (logObj2.length > 0) {
//             newRes = {};
//             newLogData(res);
//             return {
//               "code": 0, //解析接口状态
//               "msg": res.message, //解析提示文本
//               "count": res.total, //解析数据长度
//               "data": newRes //解析数据列表
//             }
//           }
//           else{
//             return {
//               "code": 0, //解析接口状态
//               "msg": res.message, //解析提示文本
//               "count": res.total, //解析数据长度
//               "data": res //解析数据列表
//             };
//           }
//         }
//       });
//       var $ = layui.$, active = {
//         reload: function(){
//           //执行重载
//           table.reload('testReload', {
//             page: {
//               curr: 1 //重新从第 1 页开始
//             }
//           });
//         }
//       };
//       $('#logMa-select').on('click', function(){
//         logSearch();
//         var type = $(this).data('type');
//         console.log(active[type]);
//         active[type] ? active[type].call(this) : '';
//       });

//       $("#logMa-reset").on('click',function(){
//       })
//       // 筛选出查询条件的个数
//       function logSearch(){
//         logObj2 = {};
//         for (var i = 0; i < logObj.length; i++) {
//           if ($("#"+logObj[i]).val()) {
//             if (logObj[i] == "startTime") {
//               lo
//             }
//             logObj2.push(logObj[i]);
//           }
//         }
//         console.log(logObj2);
//       }
//       // 将符合条件的数据保存到对象中
//       function newLogData(res){
//         // 遍历所有的数据
//         for (var i = 0; i < res.length; i++) {
//           // 逐步列出查询条件个数
//           switch (logObj2.length){
//             case 1:
//               if (logObj2[0] != "startTime" && logObj2[0] != "endTime") {
//                 if (res[i][logObj2[0]] == $("#"+logObj2[0]).val()) {
//                   newRes[i] = res[i];
//                 }
//               }
//             break;
//             case 2:
//               // if (logObj2[]) {}
//           }
//         }
//         console.log(newRes);
//       }
//     });

layui.use(['laypage', 'layer','laydate'], function(logStr){
  var laypage = layui.laypage
  ,layer = layui.layer, laydate = layui.laydate;;
  var logStr = "";
  laydate.render({
        elem: '#startTime', //指定元素
        theme: '#3EAFE0'
      });
      laydate.render({
        elem: '#endTime', //指定元素
        theme: '#3EAFE0'
      });
  $.ajax({
    type:"GET",
    url: "http://localhost:3303/data",
    success:function(res){
      console.log(res);
      laypage.render({
        elem: 'demo7'
        ,theme: '#3EAFE0'
        ,count: res.length
        ,layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip']
        ,prev: '上一页'
        ,next: '下一页'
        ,limit: 5
        ,jump: function(obj){
          $("#logTb tbody").html = function(){
            logStr = '';
            thisRes = res.concat().splice(obj.curr*obj.limit - obj.limit, obj.limit);
            for (var i = 0; i < thisRes.length; i++) {
              logStr += `<tr>
                          <td>${thisRes[i].id}</td>
                          <td>${thisRes[i].placeTime}</td>
                          <td>${thisRes[i].iName}</td>
                          <td>${thisRes[i].oper}</td>
                          <td>${thisRes[i].opertype}</td>
                      </tr>`
            }
            $("#logTb tbody").html(logStr);
          }();
        }
      });
    },
    error:function(res){
      console.log(res);
       logStr = `<tr>
                    <td colspan="5">暂无数据</td>
                  </tr>`
        $('#logTb tbody').html(logStr);
    }
  })
})