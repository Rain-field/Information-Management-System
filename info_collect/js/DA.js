
// window.onload = function(){

	var meshdata=document.getElementById('meshdata');//合并数据的按钮
	var exportdata=document.getElementById('exportdata');//导出数据的按钮
	var choice=document.getElementById('choice');//合并数据对应的页面
	var exportpage=document.getElementById('exportpage');//导出数据对应的页面

	//给两个按钮添加点击事件，改变zindex和background
	//点击合并数据按钮触发的事件
	meshdata.addEventListener('click',function(){
		exportpage.style.zIndex='-999'; //将导出数据的页面的zindex改变成-999
		exportdata.style.background='rgb(240,245,247)';//将导出数据的按钮的背景颜色改为rgb(240,245,247)
		choice.style.zIndex='999';//将合并数据的页面的zindex改为999
		this.style.background='white';//合并数据的背景色改为white
	})
	
	//点击导出数据的按钮触发的事件
	
	exportdata.addEventListener('click',function(){
		choice.style.zIndex='-999';//将合并数据的页面的zindex改为-999
		meshdata.style.background='rgb(240,245,247)';//将合并数据的按钮的背景改为rgb(240,245,247)
		exportpage.style.zIndex='999';//将导出数据的页面的zindex改为999
		this.style.background='white';//将导出数据的按钮的背景改为white
	})
	
	//给两个div添加时间控件
	init_date('createtimestart');
	init_date('createtimeend');
// }

//layUI的时间控件的引入方法
function init_date(ele){
	var ele=ele;//将传入的元素存在ele变量中
	layui.use('laydate',function(){
		 var laydate = layui.laydate;
  		 laydate.render({
   			 elem: '#'+ele, //指定元素
   			 type:'date'
  		});
	})
}