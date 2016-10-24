define(["jquery"],function($){
	function Shopcar(){
		this.init=function(json){
			this.color=$("#"+json.color);
			this.size=$("#"+json.size);
			this.num=$("#"+json.num);
			this.bynow=$("#"+json.bynow);
			this.join=$("#"+json.join);
			this.leftnum = $("#"+json.numleft);
			this.rightnum = $("#"+json.numright);
			this.shopAttr=$("#"+json.id);
			this.shopName=$(json.shopname);
			this.price=$("#"+json.price);
			this.shopid = $("#"+json.shopid);
			this.shopAttrStyle=json.shopAttrStyle;
			this.leftStyleA=json.numleftStyleA;
			this.leftStyleB=json.numleftStyleB;
			this.rightStyleA=json.numrightStyleA;
			this.rightStyleB=json.numrightStyleB;
			this.bynowBtn();
			this.joinCar();
			this.setUp();
			this.setDown();
			this.xiugai();
			this.focusInput();
			return this;
		}

		this.getShopid=function(){
			return this.shopid.text().slice(5);
		}

		this.getPrice=function(){
			return this.price.text();
		}
		this.getNum=function(){
			return this.num.val();
		}
		this.getSize=function(){
			this.flag=this.size.find("i").find("b").attr("style");
			if(!this.flag){
				this.open();
				this.close();
				return;
			}else{
				return this.size.find("i").find("b").filter(function(){
					return $(this).css("display")=="block";
				}).parent().text();
			}
		}
		this.getColor=function(){
			this.flag=this.color.find("i").find("b").attr("style");
			if(!this.flag){
				this.open();
				this.close();
				return;
			}else{
				return this.color.find("i").find("b").filter(function(){
					return $(this).css("display")=="block";
				}).parent().find("img").attr("alt");
			}
		}
		this.getImgSrc=function(){
			this.flag=this.color.find("i").find("b").attr("style");
			if(!this.flag){
				this.open();
				this.close();
				return;
			}else{
				return this.color.find("i").find("b").filter(function(){
					return $(this).css("display")=="block";
				}).parent().find("img").attr("src");
			}
		}
		this.getSizeName=function(){
			return this.getSize().slice(0,2);
		}
		this.getPriceName=function(){
			return this.getPrice().slice(1);
		}
		this.getShopName=function(){
			return this.shopName.text();
		}
		
		this.setUp=function(){
			var self = this;
			this.rightnum.click(function(){
				self.zengjia();
			})
		}
		this.setDown=function(){
			var self = this;
			this.leftnum.click(function(){
				self.jianshao();
			})
		}
		this.zengjia=function(){
			this.n=parseInt(this.getNum());
			if(this.n>=1){
				this.leftnum.removeClass(this.leftStyleA).addClass(this.leftStyleB);
			}
			this.n++;
			this.num.val(this.n);
		}
		this.jianshao=function(){
			this.n=parseInt(this.getNum());
			if(this.n>1){
				this.n--;
			}else{
				this.leftnum.removeClass(this.leftStyleB).addClass(this.leftStyleA);
			}
			this.num.val(this.n);
		}
		this.focusInput=function(){
			var self =this;
			this.focusnum = null;
			this.num.focus(function(){
				self.focusnum=self.getNum();
			})
		}
		this.xiugai = function(){
			var self = this;
			var str = /^[1-9]$/
			this.num.blur(function(){
				if(!str.test(self.getNum())){
					self.num.val(self.focusnum);
				}
			})
		}
		this.open=function(){
			this.shopAttr.addClass(this.shopAttrStyle);
			this.shopAttr.children().show();
		}
		this.close=function(){
			var self = this;
			this.shopAttr.find(".queding").click(function(){
				console.log(self.shopAttr.children().eq(0).find("span"))
				self.shopAttr.removeClass(self.shopAttrStyle);
				self.shopAttr.children().eq(0).hide();
				self.shopAttr.children().eq(self.shopAttr.children().size()-1).hide();
			})
		}
		this.bynowBtn=function(){
			var self =this;
			this.bynow.click(function(){
				self.getColor();
				self.getSize();
			})
		}
		
		this.joinCar=function(){
			var self =this;
			this.join.click(function(){
				if(self.getColor()&&self.getSize()){
					console.log(self.getCookie("shops"));
					var attr = JSON.parse(self.getCookie("shops"));
					if(attr!=null){
						var isIn = false;
						for(var i in attr){
							if(attr[i].shopid==self.cookies().shopid&&attr[i].color==self.cookies().color&&attr[i].sizename==self.cookies().sizename){
								console.log(attr[i].sizename,self.cookies().sizename,attr[i].shopid,self.cookies().shopid)
								isIn=true;
								attr[i].count=parseInt(attr[i].count)+parseInt(self.cookies().count);
								break;
							}
						}
						if(!isIn){
							attr.push(self.cookies());
						}
						self.setCookie("shops",JSON.stringify(attr),10);
					}else{
						var attr = [self.cookies()];
						self.setCookie("shops",JSON.stringify(attr),10);
					}
				}
			})
		}
		this.cookies=function(){
			return {
				imgsrc:this.getImgSrc(),
				shopid:this.getShopid(),
				shopname:this.getShopName(),
				color:this.getColor(),
				sizename:this.getSizeName(),
				count:this.getNum(),
				price:this.getPriceName()
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
			console.log(str);
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
	return new Shopcar();
})