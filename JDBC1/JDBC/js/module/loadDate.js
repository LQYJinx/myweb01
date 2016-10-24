define(["jquery"],function(){
	function LoadData(){
		this.init=function(json){
			this.divName=$("."+json.ClassNames);
			this.shoe=$("#"+json.shoe);
			this.girl=$("#"+json.girl);
			this.boy=$("#"+json.boy);
			this.children=$("#"+json.children);
			this.bag=$("#"+json.bag);
			this.scrollAjax();
		}
		
		
		this.scrollAjax=function(){
			var self = this;
			$(window).scroll(function(){
				if($(window).scrollTop()>=self.shoe.offset().top-150){
					self.myAjax(self.shoe,"shoe1.json");
				}
				if($(window).scrollTop()>=self.girl.offset().top-150){
					self.myAjax(self.girl,"shoe2.json");
				}
				if($(window).scrollTop()>=self.boy.offset().top-150){
					self.myAjax(self.boy,"shoe3.json")
				}
				if($(window).scrollTop()>=self.children.offset().top-150){
					self.myAjax(self.children,"shoe6.json");
				}
				if($(window).scrollTop()>=self.bag.offset().top-150){
					self.myAjax(self.bag,"shoe5.json");
				}
			})
		}
		this.myAjax=function(id,url){
			var self = this;
			$.ajax({
				url:url,
				success:function(data){
					self.boxs=id.find("ul").find("li");
					self.boxs.each(function(index){
						$(this).children().eq(0).find("img").attr("src",data[index].src);
						$(this).children().eq(1).text(data[index].title);
						$(this).children().eq(2).text(data[index].price);
					})
				}
			})
		}
	}
	return new LoadData();
})