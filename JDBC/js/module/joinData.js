define(["jquery"],function(){
	function JoinData(){
		this.init=function(json){
			this.username = json.username;
			this.userpsw = json.userpsw;
			this.successJoin();
			this.userjoin();
			console.log(this.username,this.userpsw)
		}
		this.cookies=function(){
			return{
				name:this.username,
				userpsw:this.userpsw
			}
		}
		
		this.successJoin=function(){
			confirm("注册成功");
		}
		this.userjoin=function(){
			var strArr = this.getCookie("user");
			console.log(strArr);
			if(strArr!=null){
				var arr = eval(strArr);
				var isIn = false;
				for(var i in arr){
					if(arr[i].name==this.cookies().name){
						isIn=true;
						break;
					}
					if(!isIn){
						arr.push(this.cookies())
					}
				}
				this.setCookie("user",JSON.stringify(arr),10)
			}else{
				var arr = [this.cookies()]
				this.setCookie("user",JSON.stringify(arr),10);
			}
		}
		
		this.setCookie=function(key, value, expires, path){
			expires = expires || 0 
			var d = null;
			if(expires) {
				d = new Date()
				d.setDate( d.getDate()+expires );
			}
			document.cookie = key+"="+value + (d?"; expires="+d:"") + (path?"; path="+path:"");
		}
		this.getCookie=function(key) {
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

	return new JoinData();
})