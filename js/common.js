
$(function(){
    $(".header .goBack").click(function(){
        history.back(-1);
    })
})
//底部导航点击
function onclicks(obj,num){
    // $("#bottom li:eq(0)").find("img").attr("src","")
    $("#bottom li:eq(0)").find("img").attr("src","")
}


//自适应布局
function getRem(){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    // html.style.fontSize = oWidth/10 + "px";
    // $("html").css("font-size",oWidth/10 +"px!important");
    html.setAttribute('style', 'font-size:'+oWidth/10 +'px!important');
    $("body").css("display","block")
}


var mainUrl ="http://llf.zjqqbdf.cn/nongfu/app/"
