$(document).ready(function() {

    $(window).scroll(function() {
        $(".header").addClass("sticky");
        $(".aboutMe").css("margin-top", $(".header").height());

        if ($(window).scrollTop() == 0) {
            $(".header").removeClass("sticky");
            $(".aboutMe").css("margin-top", '0');
        }
    });

    // scroll to subpages:
    $(".menu li").click(function() {
        var className = '.' + $(this).attr("id");   // id of li(which schould scroll us to subpage) is this same as class subpage
        $("html, body").animate({scrollTop: $(className).offset().top - $(".header").height()}, 500, function() {
            //end of animate, maybe here i remove sth
        });
    });

    $(window).trigger("scroll");    // thanks to that header will be sticky when user reset the page
});
