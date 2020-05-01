var nav_close = 0;

$("#nav-close").click(function(){
    if(nav_close==0){
        $("nav").css("width","50px");
        $("section").css("width","calc(100% - 50px)");
        $(".small_logo").css("margin-top","14px");
        $("#nav-close").text(">");
        $(".logo").hide();
        nav_close = 1;
    }else{
        $("nav").css("width","230px");
        $("section").css("width","calc(100% - 230px)");
        $(".small_logo").css("margin-top","0");
        $("#nav-close").text("<");
        $(".logo").show();
        nav_close = 0;
    }
});