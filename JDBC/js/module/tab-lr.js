define(["jquery"],function($){
	
	function  SwitchOver(){
		this.init=function(json){
			this.leftBtn=$(json.leftBtn);
			this.rightBtn=$(json.rightBtn);
			this.handover=$(json.handover);
			this.moveleft();
			this.moveright();
			return this;
		}
		
		this.moveright=function(){
			var self = this;
			this.rightBtn.click(function(){
				self.handover.children().stop().animate({left:-self.getdistance()})
			})
		}
		this.moveleft=function(){
			var self = this;
			this.leftBtn.click(function(){
				self.handover.children().stop().animate({left:0})
			})
		}
		this.getdistance=function(){
			return this.handover.width();
		}
		
	}
	return new SwitchOver();
})