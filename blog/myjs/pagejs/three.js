/**
 * Created by 栾庆一 on 2016/10/21.
 */
require(["config"],function(){
    require(["jquery","mythree"],function($,mt){
        console.log(mt.init());
        $(function(){
            console.log($("#droplist"))
        })
    })
})