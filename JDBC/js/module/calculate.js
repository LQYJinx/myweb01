define(["jquery"],function(){
	function Calculate(){
		this.init=function(json){
			this.center = $("#"+json.shoplistid);
			this.allid = $("#"+json.all);
			this.allprice=$("#"+json.allprice);
			this.shopnum = $("#"+json.shopnum);
			this.deletes = $("#"+json.deletes);
			this.allid.prop("checked","");
			this.btnall();
			this.shopbtn();
			this.addnum();
			this.downnum();
			this.checkprice();
			this.dele();
			this.deles();
		}

		this.deles=function(){
			var self = this;
			this.deletes.on("click",function(){
				self.searchcheck();
				self.deletitle();
				self.shopnum.text("0");
				self.allprice.text("0.00");
			})
		}

		this.searchcheck=function(){
			var self = this;
			var shops = JSON.parse(self.getCookie("shops"));
			this.center.children().find(".lia").children().each(function(index){
				if($(this).prop("checked")){
					shops.splice($(this).parent().parent().index(),1)
					self.setCookie("shops",JSON.stringify(shops),10);
					$(this).parent().parent().remove();
				}
			});
		}

		this.deletitle=function(){
			if(this.center.children().size()==0){
				$(".center").hide();
			}
		}

		this.dele=function(){
			var self = this;
			this.center.children().find(".lig").children("i").on("click",function(){
				self.deletitle();
				if(confirm("请确定要删除吗")==true){
					var shops = JSON.parse(self.getCookie("shops"));
					shops.splice($(this).parent().parent().index(),1);
					self.setCookie("shops",JSON.stringify(shops),10);
					$(this).parent().parent().remove();
				}
			})
		}
		this.btnall=function(){
			var self = this;
			this.allid.on("click",function(){
				if(self.allid.prop("checked")){
					self.center.children().find(".lia").children().prop("checked","checked");
					$(this).prop("checked","checked");
					self.allprice.text(self.countprice());
					self.shopnum.text(self.countnum());
				}else{
					$(this).prop("checked","");
					self.center.children().find(".lia").children().prop("checked","");
					self.shopnum.text("0");
					self.allprice.text("0.00")
				}
			})
		}
		this.countprice=function(){
			var count = 0;
			this.center.children().find(".lif").each(function(index){
				if($(this).parent().find(".lia").children().prop("checked")){
					count +=parseInt($(this).text());
				}
			})
			return count.toFixed(2);
		}
		this.countnum=function(){
			var count = 0;
			this.center.children().find(".lie").find("input").each(function(index){
				if($(this).parent().parent().parent().find(".lia").children().prop("checked")){
					count += parseInt($(this).val())
				}
			});
			return count;
		}
		this.shopbtn=function(){
			var self = this;
			this.shopfirstli=this.center.children().children().filter(function(index){
						return $(this).index()==0; 
					})
			this.shopfirstli.children().on("click",function(){
				if(self.shopfirstli.filter(function(index){return $(this).children().prop("checked")}).size()==self.center.children().size()){
					self.allid.prop("checked","checked");
				}else{
					self.allid.prop("checked","");
				}
			})
		}
		this.checkprice=function(){
			var self = this;
			this.shopfirstli.children().on("click",function(){
				if($(this).prop("checked")){
					// console.log(self.countprice());
					self.allprice.text(self.countprice());
					self.shopnum.text(self.countnum());
				}else{
					var allprice = parseInt(self.allprice.text());
					var allnum = parseInt(self.shopnum.text());
					allprice -=parseInt($(this).parent().parent().find(".lif").text());
					allnum -= parseInt($(this).parent().parent().find(".lie").children().find("input").val());
					self.allprice.text(allprice+".00");
					self.shopnum.text(allnum);
				}
			})
		}
		this.addnum=function(){
			var self = this;
			this.center.children().find(".lie").children().find(".right").on("click",function(){
				var price = parseInt($(this).parent().parent().parent().find(".lid").text());
				var shops = JSON.parse(self.getCookie("shops"));
				$(this).parent().find("input").val(parseInt($(this).parent().find("input").val())+1)
				$(this).parent().parent().next().text((parseInt($(this).parent().find("input").val())*price).toFixed(2));
				shops[$(this).parent().parent().parent().index()].count=$(this).parent().find("input").val();
				var checkedboxs=$(this).parent().parent().parent().parent().children().find(".lia").children().filter(function(index){
				 	return  $(this).prop("checked")
				 })
				var sum = 0;
				var num = 0;
				checkedboxs.each(function(){
					sum+=parseInt($(this).parent().parent().find(".lif").text());
					self.allprice.text(sum+".00");
				})
				checkedboxs.each(function(){
					num+=parseInt($(this).parent().parent().find(".lie").children().find("input").val());
					self.shopnum.text(num);
				})
				self.setCookie("shops",JSON.stringify(shops),10)				
			})
		}

		this.downnum=function(){
			var self = this;
			this.center.children().find(".lie").children().find(".left").on("click",function(){
				var price = parseInt($(this).parent().parent().parent().find(".lid").text());
				var shops = JSON.parse(self.getCookie("shops"));
				if(parseInt($(this).parent().find("input").val())>1){
					$(this).parent().find("input").val(parseInt($(this).parent().find("input").val())-1)
				}
				shops[$(this).parent().parent().parent().index()].count=$(this).parent().find("input").val();		
				$(this).parent().parent().next().text((parseInt($(this).parent().find("input").val())*price).toFixed(2));
				var checkedboxs=$(this).parent().parent().parent().parent().children().find(".lia").children().filter(function(index){
				 	return  $(this).prop("checked")
				 })
				var sum = 0;
				var num = 0;
				checkedboxs.each(function(){
					sum+=parseInt($(this).parent().parent().find(".lif").text());
					self.allprice.text(sum+".00");
				})
				checkedboxs.each(function(){
					num+=parseInt($(this).parent().parent().find(".lie").children().find("input").val());
					self.shopnum.text(num);
				})
				self.setCookie("shops",JSON.stringify(shops),10)
			})
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
	return new Calculate();
})