layui.use(['table','laydate'], function(){
      var table = layui.table;
      var laydate = layui.laydate;
      laydate.render({
        elem: '#startTime', //指定元素
        theme: '#3EAFE0'
      });
      laydate.render({
        elem: '#endTime', //指定元素
        theme: '#3EAFE0'
      });
      table.render({
        elem: '#tb',
        even: 'true', //开启隔行背景
        // url: ' ', //数据接口
        page: {
          theme: '#3EAFE0',
          first: false, //不显示首页
          last: false //不显示尾页
        },
        id: 'textReload',
        size: 'sm',
        limit: 10,//每页显示条数
        cols: [[ //表头
          {field: 'id', title: '序号',  fixed: 'left', align: 'center',width: '5%'},
          {field: 'placeTime', title: '发生时间', align: 'center',width: '30%'},
          {field: 'informName', title: '表单名称', align: 'center',width: '45%'},
          {field: 'oper', title: '操作人员', align: 'center',width: '10%'},
          {field: 'opertype', title: '操作类型', align: 'center',width: '10%'}
        ]],
        data:[
          {'id':'1','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'2','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'3','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'4','placeTime':'2018-07-16 15:26:17','informName':'实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'5','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'6','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'7','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'8','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'9','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'10','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'11','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'12','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'13','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'},
          {'id':'14','placeTime':'2018-07-16 15:26:17','informName':'境外实有人口信息采集','oper':'李玉玲','opertype':'启用表单'}
        ]
      });
      var $ = layui.$, active = {
        reload: function(){
          var iName = $('#iName');
          // console.log(iName.val())
          //执行重载
          table.reload('textReload', {
            page: {
              curr: 1 //重新从第 1 页开始
            }
            ,where: {
              key: {
                informName: iName.val()
              }
            }
            // ,where:{
            //  iName:iName.val()
            // }
          });
        }
      };
      $('#logMa-select').on('click', function(){
        var type = $(this).data('type');
        console.log(active[type]);
        active[type] ? active[type].call(this) : '';
      });
    });