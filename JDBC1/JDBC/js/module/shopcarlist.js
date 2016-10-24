define(["jquery"],function(){
	function Shopcarlist(){
		this.init=function(json){
			this.state = document.getElementById(json.id);
			this.classname=$("."+json.classname)
			this.listyles=json.listyle;
			this.spanstyle = json.spanstyle;
			this.shopcarshow();
			return this;
		}
		this.shopcarshow=function(){
			if(this.shopcarlength().json_length!=0){
				this.classname.show();
				this.showlist();
				this.joinstyle();
			}else{
				this.classname.hide();
			}
		}
		this.shopcarlength=function(){
			var json_length=0;
			this.shops=this.getCookie("shops");
			this.arr = JSON.parse(this.shops);
			for(var n in this.arr[0]){
				json_length++
			}
			return {
				data:this.arr,
				arr_length:this.arr.length,
				json_length:json_length,
			}
		}
		this.showlist=function(){
			for(var i=0;i<this.shopcarlength().arr_length;i++){
				var _ul = document.createElement("ul");
				this.state.appendChild(_ul);
				for (var j = 0; j <this.shopcarlength().json_length; j++) {
					var _li = document.createElement("li")
					_ul.appendChild(_li);
				};
			}
		}

		this.joinstyle=function(){
			this.uls = this.state.children;
			for (var i = 0; i < this.uls.length; i++) {
				var _input = document.createElement("input");
				_input.setAttribute("type","checkbox");
				var _p = document.createElement("p");
				var _i = document.createElement("i");
				var _span = document.createElement("span");
				var _i1 = document.createElement("i");
				var _span1 = document.createElement("span");
				_span1.className = this.spanstyle[0];
				var _span2 = document.createElement("span");
				_span2.className = this.spanstyle[1];
				var _input1 = document.createElement("input")
				_input1.setAttribute("type","text");
				var _span3 = document.createElement("span");
				var _i2 = document.createElement("i");
				var _img = document.createElement("img");
				for (var j = 0; j < this.uls[0].children.length; j++) {
					this.uls[i].children[j].className = this.listyles[j];
					this.uls[i].children[0].appendChild(_input);
					this.uls[i].children[1].appendChild(_img);
					this.uls[i].children[2].appendChild(_p);
					this.uls[i].children[2].appendChild(_i);
					this.uls[i].children[2].appendChild(_span);
					this.uls[i].children[4].appendChild(_i1);
					this.uls[i].children[6].appendChild(_span3);
					this.uls[i].children[6].appendChild(_i2);
					this.uls[i].children[4].children[0].appendChild(_span1);
					this.uls[i].children[4].children[0].appendChild(_input1);
					this.uls[i].children[4].children[0].appendChild(_span2);
					this.uls[i].children[1].children[0].setAttribute("src",this.shopcarlength().data[i].imgsrc);
					console.log(this.shopcarlength().data[i].imgsrc);
					this.uls[i].children[3].innerText = this.shopcarlength().data[i].price;
					this.uls[i].children[2].children[0].innerText=this.shopcarlength().data[i].shopname;
					this.uls[i].children[2].children[1].innerText="尺码:"+ this.shopcarlength().data[i].sizename;
					this.uls[i].children[2].children[2].innerText="颜色:"+ this.shopcarlength().data[i].color;
					this.uls[i].children[4].children[0].children[1].value=this.shopcarlength().data[i].count;
					this.uls[i].children[4].children[0].children[0].innerText = "-";
					this.uls[i].children[4].children[0].children[2].innerText = "+";
					this.uls[i].children[5].innerText=(parseInt(this.shopcarlength().data[i].count)*parseInt(this.shopcarlength().data[i].price)).toFixed(2);
					this.uls[i].children[6].children[0].innerText="移入收藏夹";
					this.uls[i].children[6].children[1].innerText="删除";
				};
			};
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
	return new Shopcarlist()
})