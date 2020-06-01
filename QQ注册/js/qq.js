var imgs=document.querySelectorAll(".left .banner>img");
var index=0;
var timer=setInterval(function(){
	index++;
	if(index==3){
		index=0;
	}
	for(var i=0;i<imgs.length;i++){
	imgs[i].className="";		
	}
	imgs[index].className="active";
},2000)


//表单验证部分
//昵称部分
inp1.onfocus=function(){
	inp1.style.borderColor="#3688ff";
	var err=this.nextElementSibling;
	err.style.opacity="0";
	err.style.position="absolute";
	var tick=this.nextElementSibling.nextElementSibling;
	tick.style.opacity="0";
}

inp1.onblur=function(){
	if(inp1.value==""){
		inp1.style.borderColor="#ff5b5b";	
		var err=this.nextElementSibling;
		err.style.opacity="1";
		err.style.position="static";
	}else{
		var tick=this.nextElementSibling.nextElementSibling;
		tick.style.opacity="1";
	}	
}
//密码部分
inp2.onfocus=function(){
	inp2.style.borderColor="#3688ff";
	var infotip=this.nextElementSibling.nextElementSibling;
	infotip.style.opacity="1";
	infotip.style.position="static";
	var tick=this.nextElementSibling.nextElementSibling.nextElementSibling;
		tick.style.opacity="0";
		tick.nextElementSibling.style.opacity="0";
	this.nextElementSibling.style.opacity="0";
	this.nextElementSibling.style.position="absolute";
		tip.style.position="absolute";
	
}
inp2.onblur=function(){
	var reg=/^[a-zA-Z]\w{8,16}$/;
	var bool=reg.test(this.value);
	var tick=this.nextElementSibling.nextElementSibling.nextElementSibling;
	if(bool){
		tick.style.opacity="1";
		tick.nextElementSibling.style.opacity="1";
		var 	infotip=this.nextElementSibling.nextElementSibling;
	infotip.style.opacity="0";
	infotip.style.position="absolute";
		
	}else{
		if(inp2.value==""){
			inp2.style.borderColor="#ff5b5b";
			var 	infotip=this.nextElementSibling.nextElementSibling;
	infotip.style.opacity="0";
	infotip.style.position="absolute";
			this.nextElementSibling.style.opacity="1";
			this.nextElementSibling.style.position="static";						
		}else{
			tick.nextElementSibling.style.opacity="1";
			inp2.style.borderColor="#ff5b5b";			
			var len=inp2.value.length;
			if(len<8){
				tip.style.position="static";
			var 	infotip=this.nextElementSibling.nextElementSibling;
				infotip.style.opacity="0";
				infotip.style.position="absolute";
			}
		}
	}
}
//手机验证
inp3.onfocus=function(){
	var none=this.parentNode.nextElementSibling;
	none.style.display="block";
	inp3.style.borderColor="#3688ff";
	inp4.onclick=function(){
		yzm();
	}
	
}
eye.onmouseover=function(){
	inp2.type="text";
}
eye.onmouseout=function(){
	inp2.type="password";
}
//提交验证
form.onsubmit=function(){
	if(inp1.value==""|| inp2.value==""|| inp3.value==""){
		er.style.opacity="1";
		er.style.position="static";
		er2.style.opacity="1";
		er2.style.position="static";
		return false;
	}
	if(inp1.style.borderColor=="#ff5b5b"&&inp2.style.borderColor=="#ff5b5b"){	
		return false;
	}
}

//随机验证码
function yzm(){
				
			var arr=[];
			for(var i=48;i<=57;i++){
				arr.push(String.fromCharCode(i));//push会修改原数组的
			}
			for(var i=65;i<=90;i++){
				arr.push(String.fromCharCode(i));//push会修改原数组的
			}
			for(var i=97;i<=122;i++){
				arr.push(String.fromCharCode(i));//push会修改原数组的
			}
			console.log(arr);
			//创建验证码
			for(var i=0, code="";i<4;i++){
				var r=parseInt(Math.random()*(61-0+1)+0);//大小写英文字母+数字共有61个
//				if(code.indexOf(arr[r])==-1){//判断有没有重复
//								
//				}
					code+=arr[r];
			}
			console.log(code);
			inp4.value=code;
		}	