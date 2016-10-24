$(document).ready(function(){
	var leftBtn = $(".span-left");
	var rightBtn = $(".span-right");
	var smallimg_ul = $(".small-imgs").find("ul");
	var smallimgs=$(".small").find("img");
	var sizes = $(".size").find("i");
	
	leftBtn.click(function(){
		smallimg_ul.stop().animate({left:-4},300);
	})
	rightBtn.click(function(){
		smallimg_ul.stop().animate({left:-400},300);
	})
	smallimg_ul.find("li").mouseover(function(){
		$(this).removeClass("style-down").addClass("style-on").siblings().removeClass("style-on").addClass("style-down");
		smallimgs.eq($(this).index()).show().siblings().hide();
	})
	sizes.mouseenter(function(){
		$(this).children().eq(1).show();
	})
	sizes.mouseleave(function(){
		$(this).children().eq(1).hide()
	})
	sizes.click(function(){
		var bordercolor=$(this).css("border-color");
		console.log(bordercolor=="rgb")
//		$(this).children().eq(0).show();
//		$(this).css("border-color","#CC0000");
	})
})
