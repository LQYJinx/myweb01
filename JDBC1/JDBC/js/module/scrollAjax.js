 define(["jquery"],function(){
	function ScrollAjax(){
		this.init=function(json){
			this.shops=$("#"+json.id);
			this.loaddata();
			this.mouseon();
		}
		this.loaddata=function(){
			var self = this;
			$.ajax({
				url:"detail.json",
				success:function(data){
					console.log(data);
					self.shops.children().children().each(function(index){
						$(this).find("dt").children().children().attr("src",data[index].src);
						$(this).find(".price").find("span").text(data[index].currentprice)
						$(this).find(".price").find("del").text(data[index].oldprice);
						$(this).find(".title").children().find("i").text(data[index].title.slice(0,4));
						$(this).find(".title").children().find("span").text(data[index].title.slice(4));
						$(this).find(".shop").children().text(data[index].store);
						self.changecolor($(this),data[index].title);
						self.dazhe($(this),data[index].oldprice);
						
					})
				}
			});
		}
		
		this.changecolor=function(attr,index){
			if(index.slice(0,1)=="["){
				attr.find(".title").find("i").css("color","#CC0000");
				attr.find(".title").find("i").css("margin-right","4px");
			}
		}
		this.dazhe=function(attr,index){
			if(!(index.slice(0,1)=="￥")){
				attr.find(".price").find("del").remove();
				attr.find(".price").append("<a>"+index+"</a>");
				attr.find(".price").find("a").css("color","#fff");
			}
		}
		
		this.mouseon=function(){
			var self = this;
			this.shops.children().each(function(index){
				$(this).hover(function(){
					self.mouseonstyle($(this).children());
					$(this).children().find(".imgsmall").show();	
					self.showsmallimg(index);
				},function(){
					self.mousedownstyle($(this).children());
					$(this).children().find(".imgsmall").find("ul").children().remove();
					$(this).children().find(".imgsmall").hide();
				})
			})
		}
		this.showsmallimg=function(currentindex){
			var self = this;
			$.ajax({
				type:"get",
				url:"shoplist.json",
				success:function(data){
					console.log(data);
					for(var i = 0 ;i<data[currentindex].src.length;i++){
						self.shops.children().eq(currentindex).find(".imgsmall").find(".small").find("ul").append("<li><img src="+data[currentindex].src[i]+"></li>");
					}
					if(data[currentindex].src.length>=4){
						self.shops.children().eq(currentindex).find(".imgsmall").find(".small").find("ul").find("li").eq(3).next().hide();
						self.shops.children().eq(currentindex).find(".imgsmall").find("span").show();
						self.rightspan(self.shops.children().eq(currentindex));
						self.lefttspan(self.shops.children().eq(currentindex));
					}
					
					self.clickli(currentindex,data[currentindex].src);
				}
			});
		}
		
		this.clickli=function(_li,index){
			this.shops.children().eq(_li).children().find(".small").find("ul").find("li").on("click",function(){
				$(this).css("border-color","#CC0000").siblings().css("border-color","#f5f5f5");
				$(this).parent().parent().parent().parent().children().eq(0).children().find("img").height(220)
				$(this).parent().parent().parent().parent().children().eq(0).children().find("img").attr("src",index[$(this).index()])
				
			})
		}
		
		this.rightspan=function(_spanleft){
			_spanleft.find(".imgsmall").find(".right").click(function(){
				$(this).parent().find(".small").find("ul").find("li").eq(3).next().show().siblings().hide()
			})
		}
		this.lefttspan=function(_spanright){
			_spanright.find(".imgsmall").find(".left").click(function(){
				$(this).parent().find(".small").find("ul").find("li").eq(3).next().hide().siblings().show()
			})
		}
		this.mouseonstyle=function(icon){
			icon.css("height","auto");
			icon.css("background","#fff");
			icon.css("z-index","10");
			icon.css("border-color","#cd2a2c");
			icon.css("box-shadow","5px 0px 3px #e9e9e9");
		}
		this.mousedownstyle=function(icon){
			icon.css("border-color","#F5F5F5");
			icon.css("height","322px");
			icon.css("box-shadow","0px 0px 0px #fff");
			icon.css("z-index","5");
		}
		
	}
	return new ScrollAjax();
})