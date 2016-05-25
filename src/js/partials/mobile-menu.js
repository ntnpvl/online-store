$(document).ready(function() {
    
    var toggle_el = $("#mobile-menu-toggle").data("toggle");
    
    $(".layer").hide();
    $("#mobile-menu-toggle").click(function() {
        //toggle_el = $(this).data("toggle");
        $(toggle_el).addClass("open-sidebar");
        $(".layer").show();
    });

    $(".layer").click(function() {
        $(toggle_el).removeClass("open-sidebar");
        $(".layer").hide();
    });
    
    $(".mobile-menu-list-items ul li").click(function() {
        var mobileSubMenuSize = $(this).find('.mobile-submenu ul li').size();
        //console.log($(this).find('.mobile-submenu ul li').size());
        var heightLi = 30;

        
        $(this).find('.mobile-submenu.open-mobile-submenu').css({'height' : '0'});
        $(this).find('.mobile-submenu').toggleClass("open-mobile-submenu");
        $(this).find('span').toggleClass("mobile-submenu-opener-active");
        $(this).find('.mobile-submenu.open-mobile-submenu').css({'height' : heightLi*mobileSubMenuSize});
    });
});