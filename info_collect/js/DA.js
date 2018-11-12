var meshdata = document.getElementById('meshdata'); //合并数据的按钮
var exportdata = document.getElementById('exportdata'); //导出数据的按钮
var choice = document.getElementById('choice'); //合并数据对应的页面
var exportpage = document.getElementById('exportpage'); //导出数据对应的页面
var addarrfiled = document.getElementById("addarrfiled"); //添加关联字段的按钮
var addexportfiled = document.getElementById("addexportfiled"); //添加导出字段的按钮
var choiceadd = document.getElementById("choiceadd"); //添加新的关联字段部分和导出字段部分的div
var sel1 = document.getElementById('sel1'); //第一个选择表的select
var sel2 = document.getElementById('sel2'); //第二个选择表的select
var sel3 = document.getElementById('sel3'); //第三个选择表的select
var value1 = sel1[sel1.selectedIndex].text;//第一个选择表单的select的当前选中的文本
var value2 = sel2[sel2.selectedIndex].text;//第二个选择表单的select的当前选中的文本
var value3 = sel3[sel3.selectedIndex].text;//第三个选择表单的select的当前选中的文本
var seltable1=document.getElementsByClassName("seltable1");
var seltable2=document.getElementsByClassName("seltable2");
var seltable3=document.getElementsByClassName("seltable3");
var exporttable1="";
var exporttable2="";
var exporttable3="";
//新的关联字段的内容
var str = '<select name="" id="" class="sel seltable1"><option value="请选择字段">请选择字段</option></select><select name="" id="" class="sel seltable2" style="margin-left:23px"><option value="请选择字段">请选择字段</option></select><select name="" id="" class="sel seltable3" style="margin-left:24px"><option value="请选择字段">请选择字段</option></select><input type="text " name="sybllname" class="sybllname" value="" style="margin-left:10px;" /><i class="iconfont icon-shanchu" class="iconfontshanchu" style="margin-left:36px;"></i>';
//新的导出字段里面的内容
var str2 = '<select name="" id="" class="sel exporttable1"><option value="请选择字段">请选择字段</option></select><select name="" id="" class="sel exporttable2" style="margin-left:23px"><option value="请选择字段">请选择字段</option></select><select name="" id="" class="sel exporttable3" style="margin-left:24px"><option value="请选择字段">请选择字段</option></select><i class="iconfont icon-shanchu" class="iconfontshanchu" style="margin-left:126px"></i>';

var newstr = "<option value='请选择表单'>请选择表单</option>";
var newstr1 = "<option value='请选择表单'>请选择表单</option>"; //添加option对应的内容
var newstr2 = "<option value='请选择表单'>请选择表单</option>";

var selstr1="<option value='请选择字段'>请选择字段</option>";
var selstr2="<option value='请选择字段'>请选择字段</option>";
var selstr3="<option value='请选择字段'>请选择字段</option>";
//给两个按钮添加点击事件，改变zindex和background
//点击合并数据按钮触发的事件
meshdata.addEventListener('click', function() {
	exportpage.style.zIndex = '-999'; //将导出数据的页面的zindex改变成-999
	exportdata.style.background = 'rgb(243,246,247)'; //将导出数据的按钮的背景颜色改为rgb(240,245,247)
	exportdata.style.border="1px solid whitesmoke";
	choice.style.zIndex = '999'; //将合并数据的页面的zindex改为999
	this.style.background = 'white'; //合并数据的背景色改为white
	this.style.borderTop="3px solid rgb(101,194,240)";
	this.style.borderLeft="1px solid whitesmoke";
	this.style.borderRight='1px solid whitesmoke';
})

//点击导出数据的按钮触发的事件

exportdata.addEventListener('click', function() {
	choice.style.zIndex = '-999'; //将合并数据的页面的zindex改为-999
	meshdata.style.background = 'rgb(243,246,247)'; //将合并数据的按钮的背景改为rgb(240,245,247)
	meshdata.style.border="1px solid whitesmoke";
	exportpage.style.zIndex = '999'; //将导出数据的页面的zindex改为999
	this.style.background = 'white'; //将导出数据的按钮的背景改为white
	this.style.borderTop="3px solid rgb(101,194,240)";
	this.style.borderLeft="1px solid whitesmoke";
	this.style.borderRight='1px solid whitesmoke';
})
//点击添加关联字段触发的事件
addarrfiled.addEventListener('click', function() {
	var div = document.createElement('div');
	div.setAttribute('class', 'addstyle');
	div.innerHTML = str;
	choiceadd.appendChild(div);
	seltable1=document.getElementsByClassName("seltable1");
	seltable2=document.getElementsByClassName("seltable2");
	seltable3=document.getElementsByClassName("seltable3");
	for(var i=1;i<seltable1.length;i++){
		if(value1!="请选择表单"){
			seltable1[i].innerHTML=selstr1;
		}
	}
	for(var i=1;i<seltable2.length;i++){
		if(value2!="请选择表单"){
			seltable2[i].innerHTML=selstr2;
		}
	}
	for(var i=1;i<seltable3.length;i++){
		if(value3!="请选择表单"){
			seltable3[i].innerHTML=selstr3;
		}
	}
})

//添加导出字段触发的事件
addexportfiled.addEventListener('click', function() {
	var div = document.createElement('div');
	div.setAttribute('class', 'addstyle');
	div.innerHTML = str2;
	choiceadd.appendChild(div);
	exporttable1=document.getElementsByClassName("exporttable1");
	exporttable2=document.getElementsByClassName("exporttable2");
	exporttable3=document.getElementsByClassName("exporttable3");
	for(var i=0;i<exporttable1.length;i++){
		if(value1!="请选择表单"){
			exporttable1[i].innerHTML=selstr1;
		}
	}
	for(var i=0;i<exporttable2.length;i++){
		if(value2!="请选择表单"){
			exporttable2[i].innerHTML=selstr2;
		}
	}
	for(var i=0;i<exporttable3.length;i++){
		if(value3!="请选择表单"){
			exporttable3[i].innerHTML=selstr3;
		}
	}
})

//点击删除触发的事件
$(function() {
	$(choiceadd).on('click', 'i', function() {
		var thisparentnode = $(this).parent();
		if(thisparentnode.attr('class') == 'addstyle') {
			thisparentnode.remove();
		}
	})
})

//页面加载的时候给选择表单的select添加选项
$.ajax({
	'url': 'http://localhost:3003/news',
	'success': function(res) {
		for(var i = 0; i < res.length; i++) {
			newstr += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
		}
		sel1.innerHTML = newstr;
		sel2.innerHTML = newstr;
		sel3.innerHTML = newstr;
		newstr = "<option value='请选择表单'>请选择表单</option>"
	}
})

//给第一个选择表单的select添加事件，判断它是否被选择，如果选择了，第二个和第三个select的选择项做出相应的改变
setInterval(getsel1value, 10);
function getsel1value() {
	var newvalue = sel1[sel1.selectedIndex].text;
	var newindex;
	if(value1 != newvalue && newvalue != "请选择表单") {
		$.ajax({
			'url': 'http://localhost:3003/news',
			'success': function(res) {
				for(var i = 0; i < res.length; i++) {
					if(res[i].formname==newvalue){
						newindex=res[i].formid;
						selstr1="<option value='请选择字段'>请选择字段</option>";
						$.ajax({
							url:"http://localhost:3003/contents",
							success:function(res){
								for(var m=0;m<res.length;m++){
									if(newindex==res[m].formid){
										var arr=Object.keys(res[m]);
										for(var n=0;n<arr.length;n++){
											selstr1+="<option value='"+arr[n]+"'>"+arr[n]+"</option>";
										}
										for(var k=0;k<seltable1.length;k++){
											seltable1[k].innerHTML=selstr1;
										}
										if(exporttable1!=""){
											for(var z=0;z<exporttable1.length;z++){
												exporttable1[z].innerHTML=selstr1;
											}
										}
									}
								}
							}
						});
					}
					if(res[i].formname != newvalue) {
						if(res[i].formname!=value2){
							newstr1 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
						}
						if(res[i].formname!=value3){
							newstr2+="<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
						}
					}
				}
				if(value2=="请选择表单"){
					sel2.innerHTML = newstr2;
				}
				if(value3=="请选择表单"){
					sel3.innerHTML = newstr1;
				}
				newstr1 = "<option value='请选择表单'>请选择表单</option>";
				newstr2 = "<option value='请选择表单'>请选择表单</option>";
			}
		})
		value1=newvalue;
	}
	if(value1 != newvalue && newvalue == "请选择表单") {
		for(var k=0;k<seltable1.length;k++){
			seltable1[k].innerHTML="<option value='请选择字段'>请选择字段</option>";
		}
		if(exporttable1!=""){
			for(var z=0;z<exporttable1.length;z++){
				exporttable1[z].innerHTML="<option value='请选择字段'>请选择字段</option>";
			}
		}
		$.ajax({
			'url': 'http://localhost:3003/news',
			'success': function(res) {
				for(var i = 0; i < res.length; i++) {
					if(res[i].formname!=value2){
						newstr1 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
					}
					if(res[i].formname!=value3){
						newstr2+="<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
					}
				}
				if(value2=="请选择表单"){
					sel2.innerHTML = newstr2;
				}
				if(value3=="请选择表单"){
					sel3.innerHTML = newstr1;
				}
				newstr1 = "<option value='请选择表单'>请选择表单</option>";
				newstr2 = "<option value='请选择表单'>请选择表单</option>";
			}
		})
		value1=newvalue;
	}
}


//给第二个选择表单的select添加事件，判断它是否被选择，如果选择了，第一个和第三个select的选择项做出相应的改变
setInterval(getsel2value,10);
function getsel2value() {
	var newvalue = sel2[sel2.selectedIndex].text;
	if(value2 != newvalue && newvalue != "请选择表单") {
		$.ajax({
			'url': 'http://localhost:3003/news',
			'success': function(res) {
				for(var i = 0; i < res.length; i++) {
					if(res[i].formname==newvalue){
						newindex=res[i].formid;
						selstr2="<option value='请选择字段'>请选择字段</option>";
						$.ajax({
							url:"http://localhost:3003/contents",
							success:function(res){
								for(var m=0;m<res.length;m++){
									if(newindex==res[m].formid){
										var arr=Object.keys(res[m]);
										for(var n=0;n<arr.length;n++){
											selstr2+="<option value='"+arr[n]+"'>"+arr[n]+"</option>";
										}
										for(var k=0;k<seltable2.length;k++){
											seltable2[k].innerHTML=selstr2;
										}
										if(exporttable1!=""){
											for(var z=0;z<exporttable1.length;z++){
												exporttable2[z].innerHTML=selstr2;
											}
										}
									}
								}
							}
						});
					}
					if(res[i].formname!= newvalue) {
						if(res[i].formname!=value1){
							newstr1 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
						}
						if(res[i].formname!=value3){
							newstr2 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
						}
					}
				}
				if(value1=="请选择表单"){
					sel1.innerHTML = newstr2;
				}
				if(value3=="请选择表单"){
					sel3.innerHTML = newstr1;
				}
				newstr1 = "<option value='请选择表单'>请选择表单</option>";
				newstr2 = "<option value='请选择表单'>请选择表单</option>";
			}
		})
		value2=newvalue;
	}
	if(value2 != newvalue && newvalue == "请选择表单") {
		for(var k=0;k<seltable2.length;k++){
			seltable2[k].innerHTML="<option value='请选择字段'>请选择字段</option>";
		}
		if(exporttable1!=""){
			for(var z=0;z<exporttable1.length;z++){
				exporttable2[z].innerHTML="<option value='请选择字段'>请选择字段</option>";
			}
		}
		$.ajax({
			'url': 'http://localhost:3003/news',
			'success': function(res) {
				for(var i = 0; i < res.length; i++) {
					if(res[i].formname!=value1){
						newstr1 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
					}
					if(res[i].formname!=value3){
						newstr2 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
					}
				}
				if(value1=="请选择表单"){
					sel1.innerHTML = newstr2;
				}
				if(value3=="请选择表单"){
					sel3.innerHTML = newstr1;
				}
				newstr1 = "<option value='请选择表单'>请选择表单</option>";
				newstr2 = "<option value='请选择表单'>请选择表单</option>";
			}
		})
		value2=newvalue;
	}
}


//给第三个选择表单的select添加事件，判断它是否被选择，如果选择了，第二个和第一个select的选择项做出相应的改变
setInterval(getsel3value,10);
function getsel3value() {
	var newvalue = sel3[sel3.selectedIndex].text;
//	console.log(newvalue);
	if(value3 != newvalue && newvalue != "请选择表单") {
		$.ajax({
			'url': 'http://localhost:3003/news',
			'success': function(res) {
				for(var i = 0; i < res.length; i++) {
					if(res[i].formname==newvalue){
						selstr3="<option value='请选择字段'>请选择字段</option>";
						$.ajax({
							url:"http://localhost:3003/contents",
							success:function(res){
								for(var m=0;m<res.length;m++){
									if(newindex==res[m].formid){
										var arr=Object.keys(res[m]);
										for(var n=0;n<arr.length;n++){
											selstr3+="<option value='"+arr[n]+"'>"+arr[n]+"</option>";
										}
										for(var k=0;k<seltable3.length;k++){
											seltable3[k].innerHTML=selstr3;
										}
										if(exporttable1!=""){
											for(var z=0;z<exporttable1.length;z++){
												exporttable3[z].innerHTML=selstr3;
											}
										}
									}
								}
							}
						});
					}
					if(res[i].formname!= newvalue) {
						if(res[i].formname!=value1){
							newstr1 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
						}
						if(res[i].formname!=value2){
							newstr2 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
						}
					}
				}
				if(value1=="请选择表单"){
					sel1.innerHTML = newstr2;
				}
				if(value2=="选择表单"){
					sel2.innerHTML = newstr1;
				}
				newstr1 = "<option value='请选择表单'>请选择表单</option>";
				newstr2 = "<option value='请选择表单'>请选择表单</option>";
			}
		})
		value3=newvalue;
	}
	if(value3 != newvalue && newvalue == "请选择表单") {
		for(var k=0;k<seltable3.length;k++){
			seltable3[k].innerHTML="<option value='请选择字段'>请选择字段</option>";
		}
		if(exporttable1!=""){
			for(var z=0;z<exporttable1.length;z++){
				exporttable3[z].innerHTML="<option value='请选择字段'>请选择字段</option>";
			}
		}
		$.ajax({
			'url': 'http://localhost:3003/news',
			'success': function(res) {
				for(var i = 0; i < res.length; i++) {
					if(res[i].formname!=value1){
						newstr1 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
					}
					if(res[i].formname!=value2){
						newstr2 += "<option value=" + res[i].formname + ">" + res[i].formname + "</option>";
					}
				}
				if(value1=="请选择表单"){
					sel1.innerHTML = newstr2;
				}
				if(value2=="请选择表单"){
					sel2.innerHTML = newstr1;
				}
				newstr1 = "<option value='请选择表单'>请选择表单</option>";
				newstr2 = "<option value='请选择表单'>请选择表单</option>";
			}
		})
		value3=newvalue;
	}
}

//给两个div添加时间控件
init_date('createtimestart');
init_date('createtimeend');

//layUI的时间控件的引入方法
function init_date(ele) {
	var ele = ele; //将传入的元素存在ele变量中
	layui.use('laydate', function() {
		var laydate = layui.laydate;
		laydate.render({
			elem: '#' + ele, //指定元素
			type: 'date'
		});
	})
}