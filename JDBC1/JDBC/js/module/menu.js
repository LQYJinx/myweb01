define(["jquery"],function(){
	function Menu(){
		this.init=function(json){
			this.navs = $("#"+json.parentid);
			this.boxs = $("#"+json.childrenid);
			this.navmove();
			this.boxdown();
		}
		this.navmove=function(){
			var self = this;
			this.navs.children().on("mouseenter",function(){
				self.boxs.show();
				self.boxon($(this).index());
				$(this).children().stop().animate({left:18},500);
				$(this).css("border-right-color","#fff").siblings().css("border-right-color","#e7e7e7");
				self.boxs.children().eq($(this).index()).show().siblings().hide();
				if($(this).index()>=4){
					self.boxs.children().eq($(this).index()).parent().css("top",180)
				}else{
					self.boxs.children().eq($(this).index()).parent().css("top",0)
				}
			})
			this.navs.children().on("mouseleave",function(){
				self.boxs.hide();
				$(this).children().stop().animate({left:0},500);
				$(this).css("border-right-color","#e7e7e7");
			})
		}


		this.boxon=function(index){
			var self = this;
			this.boxs.on("mouseenter",function(){
				$(this).show();
				console.log(index);
				self.navs.children().eq(index).css("border-right-color","#fff").siblings().css("border-right-color","#e7e7e7");
			})
		}
		this.boxdown=function(){
			this.boxs.on("mouseleave",function(){
				$(this).hide();
			})
		}

	}
	return  new Menu();
})