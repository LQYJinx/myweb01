define(["jquery"],function($){
	function Login(){
		
		this.init=function(json){
			this.username=$("#"+json.username);
			this.password=$("#"+json.password);
			this.sub=$("#"+json.sub)
			this.userlogin();
			return this;
		}
		
		
		this.successLogin=function(){
			confirm("注册成功");
		}
		
		this.userlogin=function(){
			var self = this;
			this.sub.click(function(event){
				event.preventDefault()
				self.userName = self.username.val();
				self.userPsw = self.password.val();
				self.userinfo = self.getCookie("user");
				self.userinfo = JSON.parse(self.userinfo);
				console.log(self.userinfo )
					for(var i in self.userinfo){
						console.log(self.userName,self.userinfo[i].name,self.userPsw,self.userinfo[i].userpsw)
						if(self.userName==self.userinfo[i].name&&self.userPsw==self.userinfo[i].userpsw){
							self.password.parent().parent().children().eq(2).hide();
							break;
						}else{
							self.password.parent().parent().children().eq(2).show();
						}
					}

			})
		}
		this.getCookie=function(key){
			var str = document.cookie;
			var list = str.split("; ");
			for(var i=0; i<list.length; i++) {
				var kvs = list[i].split("=");
				if(kvs[0] == key) {
					return kvs[1];
				}else{
					return null;
				}
			}
		}
	}
	
	return new Login();
})