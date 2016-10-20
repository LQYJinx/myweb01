define(["jquery"],function($){
	function Myhover(){
		this.init=function(json){
			this.topimg=$(json.topid);
			this.bottomhover=$(json.bottomid);
			this.bigid=$(json.bigid);
			this.style1=json.styleon;
			this.style2=json.styledown;
			this.onAttr();
			return this;
		}
		this.onAttr=function(){
			var self= this;
			this.bottomhover.on("click","li",function(evt){
				evt.target;
				$(this).removeClass(self.style2).addClass(self.style1).siblings().removeClass(self.style1).addClass(self.style2)
				self.topimg.children().eq($(this).index()).show().siblings().hide();
				self.bigid.children().eq($(this).index()).show().siblings().hide();

			})
		}
	}
	return Myhover;
})