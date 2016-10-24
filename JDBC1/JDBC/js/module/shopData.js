define(["jquery"],function(){
	function ShopInfoData(){
		this.init=function(){
			this.colorid = document.getElementById("color");
			this.sizeid =  document.getElementById("size");
			this.sizecheck = document.getElementsByClassName("size-check")[0];
			this.spanul = document.getElementById("span-lr").children[0];
			this.small = document.getElementById("small");
			this.glass=document.getElementById("glass");
			this.big = document.getElementById("big");
			this.getid();
			this.loaddata();
			this.loadfinish();
		}

		this.gethref=function(){
			return window.location.href
		}

		this.getid = function(){
			var id = parseInt(this.gethref().split("=")[1]);
			return id;
		}

		this.loaddata=function(){
			var self = this;
			$.ajax({
				url:"shopshoes.json",
				type:"get",
				success:function(data){
					self.loadinfo(data);
					self.loadcolor(data);
					self.loadsize(data);
					self.loadsmallimg(data);
					self.loadcenterimg(data);
					self.loadbigimg(data);
				}
			})
		}
		this.loadfinish=function(){
			$(window).ajaxComplete(function(){
				$("#span-lr").children().children().eq(0).addClass("style-on");
				$("#small").find("img").eq(0).show();
				$("#big").find("img").eq(0).show();
			})
		}
		this.loadbigimg=function(data){
			var bigimgs = data[this.getid()].bigimg;
			for(var i =0;i<bigimgs.length;i++){
				var imgbig = document.createElement("img");
				imgbig.setAttribute("src",bigimgs[i]);
				this.big.appendChild(imgbig);
			}

		}
		this.loadcenterimg = function(data){
			var centerimgs = data[this.getid()].smallimg;
			for (var i = 0; i < centerimgs.length; i++) {
				var cimg = document.createElement("img");
				cimg.setAttribute("src",centerimgs[i]);
				this.small.insertBefore(cimg,this.glass);
			};

		}
		this.loadsmallimg=function(data){
			var smallimgs = data[this.getid()].smallimg;
			for (var i = 0; i < smallimgs.length; i++) {
				var simgli = document.createElement("li");
				var simg = document.createElement("img");
				simg.setAttribute("src",smallimgs[i]);
				simgli.appendChild(simg);
				this.spanul.appendChild(simgli);
			};
		}

		this.loadinfo=function(data){
			$("#shopid").text(data[this.getid()].shopid);
			$("h2").text(data[this.getid()].title)
		}

		this.loadcolor=function(data){
			var colors = data[this.getid()].color;
			for (var i = 0; i < colors.length; i++) {
				var colori = document.createElement("i");
				var colorimg = document.createElement("img");
				colorimg.setAttribute("src",colors[i].src);
				colorimg.setAttribute("alt",colors[i].alt);
				var colorb = document.createElement("b");
				colori.appendChild(colorimg);
				colori.appendChild(colorb);
				this.colorid.appendChild(colori);
			};
		}
		this.loadsize=function(data){
			var sizes = data[this.getid()].size;
			for (var a = 0; a<sizes.length; a++) {
				var sizei = document.createElement("i");
				var sizeb = document.createElement("b");
				sizei.innerText=sizes[a];
				sizei.appendChild(sizeb);
				this.sizeid.insertBefore(sizei,this.sizecheck);

			};
		}


	}

	return new ShopInfoData();
})