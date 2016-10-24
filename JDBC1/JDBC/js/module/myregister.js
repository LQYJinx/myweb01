define(["jquery"],function(){
	function Register(){
		this.init=function(json){
			this.username=$("#"+json.usernameid);
			this.psw =$("#"+json.pswid);
			this.repsw =$("#"+json.repswid);
			this.sub = $("#"+json.submitid);
			this.tipStyle=json.tipStyle;
			this.phone = $("#"+json.phone);
			this.email = $("#"+json.email);
			this.clearValue();
			this.backValue();
			this.passw();
			this.repassw();
			this.subBtn();
			this.checkname();
			this.checkpaw();
			this.repasswblur();
			this.clickcode();
			return this;
		}
		this.checkname=function(){
			var self =this;
			var str1 = /^1(3|4|5|7|8)\d{9}$/;
			var str2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
			this.username.blur(function(){
				if(str1.test($(this).val())||str2.test($(this).val())){
					$(this).next().hide();
					$(this).parent().find("i").show();
					if(str1.test($(this).val())){
						self.phoneshow();
					}
					if(str2.test($(this).val())){
						self.emailshow();
						self.checkcode();
					}
				}else{
					self.phone.parent().hide();
					if($(this).val()=="邮箱/手机号"){
						self.tip($(this),"请输入邮箱/手机号");
					}else{
						self.tip($(this),"邮箱/手机格式错误");
						self.flaseColor($(this));
					}
				}
			})
		}
		
		this.codes=function(){
			return{
				num:[0,1,2,3,4,5,6,7,8,9],
				color:["red","blue","yellow","green","#ac1818","#60ace2","#3bf60f","#3bf60f","#ef0909","#999999"]
			}
			
		}
		this.codeIcon=function(index){
		 return	index.find("div");
		}
		this.checkcode=function(){
			this.codeIcon(this.email).text(this.getCode().join(" "));
			this.codeIcon(this.email).css("color",this.getcolor()[0]);
			this.codeIcon(this.email).css("background",this.getcolor()[1]);
		}
		this.clickcode=function(){
			var self=this;
			this.codeIcon(this.email).click(function(){
				self.checkcode();
			})
		}
		this.getCode=function(){
			var code =[];
			var colors=[];
			for(var i=0;i<4;i++){
				var x =Math.floor(Math.random()*10);
				code.push(this.codes().num[x]);
			}
			return code;
		}
		this.getcolor=function(){
			var colors=[];
			for(var i=0;i<2;i++){
				var y =Math.floor(Math.random()*10);
				colors.push(this.codes().color[y]);
			}
			return colors;
		}
		
		this.phoneshow=function(){
			this.phone.parent().show();
			this.phone.show();
		}
		this.emailshow=function(){
			this.email.parent().show();
			this.email.show();
		}
		
		this.checkpaw=function(){
			var self = this;
			var str3 = /^[a-z0-9_-]{6,20}$/;
			this.psw.blur(function(){
				if($(this).val().length<6||$(this).val().length>20){
					self.tip($(this),"密码长度只能在6-20位字符之间");
					self.flaseColor($(this));
				}else{
					$(this).next().hide();
					$(this).parent().find("i").show();
				}
			})
		}
		
		
		this.clearValue=function(){
			var self=this;
			this.username.focus(function(){
				if($(this).val()=="邮箱/手机号")
				{
					$(this).val("");
					self.tip($(this),"请输入邮箱/手机号");
				}
				if($(this).val().length!=0){
					$(this).parent().find("i").hide();
					self.tip($(this),"请输入邮箱/手机号");
					self.trueColor($(this));
				}
			})
		}
		
		this.flaseColor=function(attr){
			attr.next().css("background","#fdeaea");
			attr.next().css("border-color","#f9dddd");
		}
		
		this.trueColor=function(attr){
			attr.next().css("background","#eef9ff");
			attr.next().css("border-color","#ddf3ff");
		}
		
		this.passw=function(){
			var self = this;
			this.psw.focus(function(){
				if($(this).val().length==0){
					self.trueColor($(this));
					self.tip($(this),"6-20位字符,可使用数字、字母、符号的组合");
				}if($(this).val().length!=0){
					$(this).parent().find("i").hide();
					self.tip($(this),"请输入密码");
					self.trueColor($(this));
				}
			})
		}
		
		this.repassw=function(){
			var self = this;
			this.repsw.focus(function(){
					self.tip($(this),"请再次输入密码");
					$(this).parent().find("i").hide();
					self.trueColor($(this));
			})
		}
		this.getpaw=function(){
			
			return this.psw.val();
		}
		this.getrepaw=function(){
			return this.repsw.val();
		}
		
		this.repasswblur=function(){
			var self = this;
			this.repsw.blur(function(){
				if($(this).val().length<6||$(this).val().length>20){
					self.tip($(this),"密码长度只能在6-20位字符之间");
					self.flaseColor($(this));
				}else{
					if(self.getpaw()==self.getrepaw()){
						$(this).parent().find("i").show();
						$(this).parent().find(".tip").hide();
					}else{
						$(this).parent().find("i").hide();
						$(this).parent().find(".tip").show().text("两次输入的密码不一致");
						self.flaseColor($(this));
					}
				}
			})
		}
		
		this.checkpassword = function(){
			//console.log(this.getpaw()==this.getrepaw(),this.getpaw(),this.getrepaw())
			if(this.getpaw()==this.getrepaw()){
				$(this).parent().find("i").show();
			}else{
				$(this).next().text("两次输入的密码不一致");
			}
			
		}
		this.backValue=function(){
			this.username.blur(function(){
				if($(this).val().length==0){
					$(this).val("邮箱/手机号");
				}
			})
		}
		
		this.tip=function(attr,txt){
			attr.next().show().text(txt);
		}
		
		this.subBtn=function(){
			var self = this;
			this.sub.click(function(e){
				e.preventDefault?e.preventDefault():e.returnValue=false;
				if(self.username.val()=="邮箱/手机号"){
					self.tip(self.username,"请输入邮箱/手机号");
				}
				if(self.psw.val().length==0){
					self.tip(self.psw,"6-20位字符,可使用数字、字母、符号的组合");
				}
				if(self.repsw.val().length==0){
					self.tip(self.repsw,"请再次输入密码");	
				}
				if(self.getI(self.username)=="block"&&self.getI(self.psw)=="block"&&self.getI(self.repsw)=="block"){
					self.user_name = self.username.val();
					self.user_psw = self.psw.val();
				}
			})
		}
		
		this.getI=function(index){
			return index.parent().find("i").css("display")
		}
		
		this.getUserInfo=function(){
			return {username:this.user_name,userpsw:this.user_psw};
		}
	}
	return new Register();
})