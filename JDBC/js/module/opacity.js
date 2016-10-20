define(["jquery"],function($){
	
	function Opacity(){
		this.init=function(json){
			this.aim=$("#"+json.id);
			this.changeOpa();
		}
		this.changeOpa=function(){
			this.aim.hover(function(){
				$(this).animate({opacity:1})
			},function(){
				$(this).animate({opacity:0.6})
			})
		}
	}
	
	
	return new Opacity(); 
})