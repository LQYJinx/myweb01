define(["jquery"],function($){
	
	function Magnify(){
		this.init=function(smallid,glassid,bigid){
			this.glass=$(glassid);
			this.big = $(bigid);
			this.small = $(smallid);
			this.inSmall();
			return this;
		}
		this.setGlassWidth=function(){
			this.glasswidth=this.getBigWidth()/this.getBigImgWidth()*this.getSmallWidth();
			this.glass.width(this.glasswidth).height(this.glasswidth);
		}
		this.getGlassWidth=function(){
			return this.glass.width();
		}
		this.getSmallWidth=function(){
			return this.small.outerWidth()
		}
		this.getBigImgWidth=function(){
			return this.big.find("img").outerWidth();
		}
		this.getBigWidth=function(){
			return this.big.outerWidth();
		}
		this.inSmall=function(){
			this.getMousePosition();
			this.glassShow();
			this.glassHide();
		}
		this.setGlassPosition=function(_left,_top){
			this.glass.css({
				left:Math.min(Math.max(0,_left),this.getSmallWidth()-this.getGlassWidth()-2),
				top:Math.min(Math.max(0,_top),this.getSmallWidth()-this.getGlassWidth()-2)
			})
		}
		
		this.getMousePosition=function(){
			var self = this;
			this.small.mousemove(function(evt){
				self.setGlassPosition(
					evt.clientX-self.small.offset().left-self.getGlassWidth()/2,
					evt.clientY+$(window).scrollTop()-self.small.offset().top-self.getGlassWidth()/2
				)
				self.setBigImgPosition(self.glass.position().left,self.glass.position().top)
			})
		}


		this.glassShow=function(){
			var self = this;
			this.small.mouseenter(function(){

				self.glass.show();
				self.bigShow();
				self.loadfinish();
			})
		}

		this.loadfinish=function(){
			$(window).ajaxComplete(function(){
				$("#big").find("img").eq(0).show();
			})
		}
		this.glassHide=function(){
			var self = this;
			this.small.mouseleave(function(){
				self.glass.hide();
				self.bigHide();
			})
		}
		this.bigShow=function(){
			this.big.show();
			this.setGlassWidth();
			this.setBigImgPosition();
			
		}
		this.setBigImgPosition=function(_left,_top){
			this.big.children().css({
				left:-_left*this.big.children().width()/this.small.width(),
				top:-_top*this.big.children().width()/this.small.width()
			})
		}
		this.bigHide=function(){
			this.big.hide();
		}
	}
	return new Magnify();
})