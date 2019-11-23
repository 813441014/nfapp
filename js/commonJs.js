
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



//获取上一页传过来的值
function getQueryString(name) {

    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');

    var r = window.location.search.substr(1).match(reg);

    if (r != null) {
        // console.log(unescape(r[2]));
        // console.log(encodeURI(r[2]));
        // console.log(escape(r[2]));
        console.log(decodeURI(r[2]));
        return escape(r[2]);

    }

    return null;

}


function formatTime(timestamp){
    var date = new Date(timestamp*1000)
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    return [year, month, day].map(formatNumber).join('-') + ' '
    //    + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}