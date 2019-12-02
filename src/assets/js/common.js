



    var html = document.getElementsByTagName("html")[0];
    var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
    // html.style.fontSize = oWidth/10 + "px";
    // $("html").css("font-size",oWidth/10 +"px!important");
    html.setAttribute('style', 'font-size:'+oWidth/10 +'px!important');

