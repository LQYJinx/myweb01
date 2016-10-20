$(document).ready(function(){
	var index = 1; 
	$(".brands-top").find("img").hover(function(){
		$(this).stop().animate({left:-10},300);
	},function(){
		$(this).stop().animate({left:0},300)
	});
	var timer = setInterval(function(){
		if(index>=4){
			index=0;
			$(".banner-lb").find("ul").animate({left:0})
		}
		$(".banner-lb").find(".banner-li").children().eq(index).addClass("li-on").siblings().removeClass("li-on").addClass("li-out");
		$(".banner-lb").find("ul").animate({left:-index*780},500);
		index++;
	},3000)
	
	$(".banner-lb").find(".banner-li").children().mouseover(function(){
		$(this).addClass("li-on").siblings().removeClass("li-on").addClass("li-out");
		$(".banner-lb").find("ul").animate({left:-($(this).index())*780})
	})

	

	$(".banner-lb").mouseover(function(){
		clearInterval(timer);
		$(".rightbtn").stop().animate({right:10},500);
		$(".leftbtn").stop().animate({left:10},500);
	})
	$(".banner-lb").mouseout(function(){
		$(".rightbtn").stop().animate({right:-50},500);
		$(".leftbtn").stop().animate({left:-50},500);
	})
	
	$(".rightbtn").click(function(){
		if(index>=4){
			index=0;
			$(".banner-lb").find("ul").animate({left:0})
		}
		$(".banner-lb").find(".banner-li").children().eq(index).addClass("li-on").siblings().removeClass("li-on").addClass("li-out");
		$(".banner-lb").find("ul").animate({left:-index*780},500);
		index++;
	})

	$(".leftbtn").click(function(){
		index=index-2;
		if(index<0){
			$(".banner-lb").find("ul").animate({left:-2340});
			index=3;
		}
		$(".banner-lb").find(".banner-li").children().eq(index).addClass("li-on").siblings().removeClass("li-on").addClass("li-out");
		$(".banner-lb").find("ul").animate({left:-index*780},500);
		index++;
	})
	
	$(".nav").find("ul").children().hover(function(){
		$(this).find(".box").stop().animate({left:20},500).parent();
	},function(){
		$(this).find(".box").stop().animate({left:0},500).parent();
		
	})


	$(".tuijian").find("h4").children().mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".tuijian ul").eq($(this).index()).removeClass("hide").addClass("show").siblings().filter("ul").removeClass("show").addClass("hide");
	});
	$(".tuijian ul").mouseover(function(){
		$(this)
	})
	 $(".special").find(".guide").children().click(function(){
		if($(".special").position().top==90){
			$(".special").animate({top:182},500).find("i").removeClass("up").addClass("down");
		}
		if($(".special").position().top==182){
			$(".special").animate({top:90},500).find("i").removeClass("down").addClass("up");
		}

	})
	$(".small").find("a").mouseover(function(){
		$(this).find("span").removeClass("on-opa").addClass("no-opa").parent().siblings().find("span").removeClass("no-opa").addClass("on-opa");
	})
	$(".small").find("a").mouseout(function(){
		$(this).find("span").removeClass("on-opa").parent().siblings().find("span").addClass("on-opa");
	})
});