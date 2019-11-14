
//底部导航点击
function onclicks(obj,num){
    // $("#bottom li:eq(0)").find("img").attr("src","")
    $("#bottom li:eq(0)").find("img").attr("src","")
}


//自适应布局
function getRem(){
    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = oWidth/10 + "px";
    $("body").css("display","block")
}
