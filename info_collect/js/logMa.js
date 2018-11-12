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
    url: "http://localhost:3003/data",
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