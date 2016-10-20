window.onload=function(){
	var down = document.getElementById("down");
	var up =document.getElementById("up");
	var num = document.getElementById("num");
	var shopnum = null;
	down.onmousedown=function(){
		shopnum =parseInt(num.value);
		if(shopnum>=2){
			down.className="i-left-b"
			num.value=shopnum-1;
		}
	}
	down.onmouseup=function(){
		shopnum =parseInt(num.value)
			if(shopnum==1){
				down.className="i-left-a";	
			}
	}
	up.onmousedown=function(){
		shopnum = parseInt(num.value);
		num.value=shopnum+1;
		down.className="i-left-b";
	}
}
