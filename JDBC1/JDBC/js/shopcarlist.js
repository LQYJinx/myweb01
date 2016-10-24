
require(["config"],function(){
	require(["jquery","shopcarlist","calculate"],function(jq,scl,cal){
			scl.init({
				id:"center",
				classname:"center",
				listyle:["lia","lib","lic","lid","lie","lif","lig"],
				spanstyle:["left","right"]
			});
			cal.init({
				shoplistid:"center",
				all:"all",
				allprice:"allprice",
				shopnum:"shopnum",
				deletes:"del"
			})
	})
})