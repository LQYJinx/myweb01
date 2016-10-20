define(["jquery"],function(){
	
	function ShowHide(){
		this.init=function(json){
			this.list=$(json.id);
			this.iconin=json.myattr;
			this.righticon=json.righticon;
			this.check=json.check;
			this.ylcolor="#E7E7E7";
			this.color = json.borderColor;
			this.iconsh();
			this.listBtn();
			return this;
		}
		this.iconsh=function(){
			var self=this;
			this.list.hover(function(){
				$(this).find(self.righticon).show();
			},function(){
				$(this).find(self.righticon).hide();
			})
		}
		this.listBtn=function(){
			var self =this;
			this.list.on("click","i",function(evt){
				console.log(evt.target);
				$(this).find("b").show().parent().siblings().find("b").hide();
			})
		}
	}
	return new ShowHide();
})