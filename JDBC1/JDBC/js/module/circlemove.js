define(["jquery"],function(){
	function CircleMove(){
		
		this.init=function(json){
			this.id=$("#"+json.id);
			this.myattr=json.myattr;
			this.moveattr=this.id.find(this.myattr).find("dt").children();
			this.move();
			return this;
		}
		this.move=function(){
			var self = this;
			this.moveattr.hover(function(){
				$(this).children().eq(0).stop().animate({top:-16})
				$(this).children().eq(1).stop().animate({top:-10})	
			},function(){
				$(this).children().eq(0).stop().animate({top:10})
				$(this).children().eq(1).stop().animate({top:0})	
			})
		}
	}
	
	
	return new CircleMove()
})