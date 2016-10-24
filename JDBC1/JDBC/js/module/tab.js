define(["jquery"],function(){
	function TabSpecial(){
		this.init=function(json){
			this.nav=$("#"+json.navid);
			this.liStyle=json.liStyle;
			this.spxq=$("#"+json.spxq);
			this.guideContent=$("#"+json.guideContent);
			this.guideImg=$("#"+json.guideImg);
			this.contents=$("#"+json.content);
			this.judge = $("."+json.judge);
			this.navHover();
			this.guideHover();
			this.guideImgHover();
		}
		this.navHover=function(){
			var self=this;
			this.nav.children().children().hover(function(){
				$(this).children().addClass(self.liStyle).parent().siblings().children().removeClass(self.liStyle);
				self.shopHover($(this).index())
				self.guide($(this).index());
				self.circleHover($(this).index());
				self.content($(this).index());
				
			})
		}
		this.shopHover=function(index){
			if(index==0){
				this.spxq.show();
			}else{
				this.spxq.hide();
			}
		}
		this.guideHover=function(){
			var self = this;
			this.guideContent.children().click(function(){
				$(this).css("color","#cf2525").siblings().css("color","#999999");
				self.navMove($(this).index());
				self.circleHover($(this).index());
				self.content($(this).index());
				self.shopHover($(this).index());
			})
		}
		this.guideImgHover=function(){
			var self=this;
			this.guideImg.children().click(function(){
				$(this).children().css("background","#cf2525").parent().siblings().children().css("background","#D1D1D1");
				self.guide($(this).index());
				self.navMove($(this).index());
				self.content($(this).index());
				self.shopHover($(this).index());
			})
		}
		this.guide=function(index){
			this.guideContent.children().eq(index).css("color","#cf2525").siblings().css("color","#d1d1d1");
		}
		this.navMove=function(index){
			this.nav.children().children().children().eq(index).addClass(this.liStyle).parent().siblings().children().removeClass(this.liStyle);
		}
		this.circleHover=function(index){
			this.guideImg.children().children().eq(index).css("background","#cf2525").parent().siblings().children().css("background","#d1d1d1");
		}
		this.content=function(index){
			var self=this;
			this.contents.find(this.judge).eq(index).show().siblings().filter(function(index){
				return $(this).is(self.judge);
			}).hide()
		}
	}
	return new TabSpecial();
})