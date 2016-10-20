require(["config"],function(){
	require(["jquery","circlemove","countdown","normalTab","opacity","loaddata","jquery_ui","menu"],function(jq,cm,cd,nt,opa,ld,mu,menu){
		cm.init({
			id:"dangji",
			myattr:"dl"
		});
		cd.init({
			id:"rush",
		});
		opa.init({
			id:"more"
		});
		opa.init({
			id:"buy"
		});
		ld.init({
			ClassNames:"same-right",
			shoe:"shoe",
			girl:"girl",
			boy:"boy",
			children:"children",
			bag:"bag"
		});
		menu.init({
		 	parentid :"nav",
		 	childrenid:"boxs"
		 });
		//楼梯
		$("#subtxt").autocomplete({
			source:function(request,response){
				window.test=function(data){
					response(data.s);
				}
				var _script = document.createElement("script");
					_script.src = "http://suggestion.baidu.com/su?wd="+request.term+"&cb=test";
					document.body.appendChild(_script);
			}
		})
		var isClick=false;
		$(".leftside").children().children().click(function(){
			isClick=true;
			$(this).children().show().parent().siblings().children().hide();
			var _height=$(".same").eq($(this).index()).offset().top
			$("body,html").animate({scrollTop:_height},500,function(){
				isClick=false;
			});
		})
		$(window).scroll(function(){
			if(!isClick){
				// console.log($(window).scrollTop(),$(".same").eq(4).offset().top+$(".same").eq(4).height())
				if($(window).scrollTop()>=$(".same").eq(0).offset().top){
					$(".leftside").show();
				}
				if($(window).scrollTop()>=$(".same").eq(4).offset().top+$(".same").eq(4).height()||$(window).scrollTop()<=$(".same").eq(0).offset().top){
					$(".leftside").hide();
				}
				var height = $(window).scrollTop();
				var currentFloor = $(".same").filter(function(){
						return Math.abs(height - $(this).offset().top) < $(this).outerHeight()/2;
				});
				var li = $(".leftside").children().children().eq(currentFloor.index()-6);
				li.children().show();
				li.siblings().children().hide();
			}
		})

		//轮播图
		var index = 1; 
		$(".brands-top").find("img").hover(function(){
			$(this).stop().animate({left:-10},300);},
			function(){
				$(this).stop().animate({left:0},300)
		});

		function move(){
			if(index>=4){
				index=0;
				$(".banner-lb").find("ul").animate({left:0})
			}
			$(".banner-lb").find(".banner-li").children().eq(index).addClass("li-on").siblings().removeClass("li-on").addClass("li-out");
			$(".banner-lb").find("ul").animate({left:-index*780},500);
			index++;
		}
		var timer = setInterval(move,3000);
	
		$(".banner-lb").find(".banner-li").children().mouseover(function(){
			$(this).addClass("li-on").siblings().removeClass("li-on").addClass("li-out");
			$(".banner-lb").find("ul").animate({left:-($(this).index())*780})
		})

	

		$(".banner-lb").mouseenter(function(){
			clearInterval(timer);
			$(".rightbtn").stop().animate({right:10},500);
			$(".leftbtn").stop().animate({left:10},500);
		})
		$(".banner-lb").mouseleave(function(){
			timer = setInterval(move,3000);
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
		$(".special").on("click","i",function(){
			console.log($(this).parent().parent().position());
			if($(this).parent().parent().position().top==90){
				$(this).parent().parent().animate({top:182},500).find("i").removeClass("up").addClass("down");
			}else{
				$(this).parent().parent().animate({top:90},500).find("i").removeClass("down").addClass("up");
			}

		})
	})
})