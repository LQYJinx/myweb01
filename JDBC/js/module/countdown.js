define(["jquery"],function($){
	function Countdown(){
		this.init=function(json){
			this.txt=json.txt;
			this.txt=$("#"+json.id).children().children().find(".showtime");
			this.spanleft=this.txt.find("span");
			this.setCookie("time","2016/10/22 13:35:00",10);
			this.nowTime = new Date();
			this.finalTime = new Date(this.getCookie("time"));
			this.cd();
			return this;
		}
		this.mm=function(){
			return {
				nowTime:this.nowTime.getTime(),
				finalTime:this.finalTime.getTime()
			}
		}
		this.difference=function(){
			this.chazhi = parseInt((this.mm().finalTime-this.mm().nowTime)/1000);
			return this.chazhi;
		}
		this.toLocale=function(seconds){
			this.day=this.timeStyle(parseInt(seconds/86400));
			this.a=seconds-parseInt(seconds/86400)*86400;
			this.hour =this.timeStyle(parseInt(this.a/3600));
			this.b=this.a-this.hour*3600;
			this.minute=this.timeStyle(parseInt(this.b/60))
			this.second=this.timeStyle((this.b-parseInt(this.b/60)*60));
			return{
				day:this.day,
				hour:this.hour,
				minute:this.minute,
				second:this.second
			}
		}
		this.timeStyle=function(index){
			return index<10?"0"+index:index;
		}
		
		this.cd=function(){
			var self = this;
			this.num=this.difference();
			self.timer=setInterval(function(){
				self.num--;
				self.local=self.toLocale(self.num)
				self.txt.find("strong").text(self.local.day+"天"+self.local.hour+"时"+self.local.minute+"分"+self.local.second+"秒");
				self.txt.find("span").animate({left:self.percentage(self.num)})
				if(self.num==0){
					clearInterval(self.timer);
					self.txt.find("a").show();
				}
			},1000)
		}
		this.percentage=function(remain){
			return (this.txt.find("span").width()-remain/this.difference()*165);
		}
		/*this.getLeft=function(){
			return this.spanleft.position().left;
		}
		this.closeWindow=function(){
			var self = this;
			$(window).unload(function(){
				alert();
				self.setCookie("left",self.getLeft());
			})
		}*/
		this.setCookie=function(key, value, expires, path){
			expires = expires || 0 
			var d = null;
			if(expires) {
				d = new Date()
				d.setDate( d.getDate()+expires );
			}
			document.cookie = key+"="+value + (d?"; expires="+d:"") + (path?"; path="+path:"");
		}
		this.getCookie=function(key){
			var str = document.cookie;
			var list = str.split("; ");
			for(var i=0; i<list.length; i++) {
				var kvs = list[i].split("=");
				if(kvs[0] == key) {
					return kvs[1];
				}
			}
			return 0;
		}
	}
	
	return new Countdown();
})