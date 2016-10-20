window.onload=function(){
	var nav = document.getElementById("nav");
	var navs = nav.getElementsByTagName("li");
	var box = document.getElementById("boxs");
	var boxs = box.getElementsByClassName("nav-box");
	var btn = document.getElementsByClassName("btn")[0];
	for (var i=0;i<navs.length;i++) {
		(function(index){
			navs[i].onmouseover=function(){
			box.style.display="block";
			//console.log(this);
			for (var j = 0;j<boxs.length;j++) {
				boxs[j].style.display="none";
			}
			boxs[index].style.display="block";
			hide(index);
			}
			navs[i].onmouseout=function(){
				box.style.display="none";
				show(index);
				box.onmouseover=function(){
					box.style.display="block";
					btn.onclick=function(){
						box.style.display="none";
					}
					hide(index);
				}
				box.onmouseout=function(){
					box.style.display="none";
					show(index);
				}
			}
		})(i)
	}
	
	function hide(index){
		navs[index].style.borderRight="none";
	}
	function show(index){
		navs[index].style.borderRight="1px solid #e7e7e7";
	}
	
	box.onmouseover=function(){
		box.style.display="block";
		console.log(index);
		hide(index);
	}
	box.onmouseout=function(){
		box.style.display="none";
	}
}
