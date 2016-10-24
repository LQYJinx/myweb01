require(["config"],function(){
	require(["jquery","register","userInfo"],function(jq,rt,ui){
		rt.init({
			usernameid:"username",
			pswid:"psw",
			repswid:"repsw",
			submitid:"sub",
			tipStyle:"tip",
			phone:"phone",
			email:"email"
		});
		$("#sub").click(function(){
			console.log(rt.getUserInfo().username,rt.getUserInfo().userpsw)
			var username = rt.getUserInfo().username;
			var userpsw = rt.getUserInfo().userpsw;
			if(username&&userpsw){
				ui.init({
					username:username,
					userpsw:userpsw
				});
			}
		})
	})
})