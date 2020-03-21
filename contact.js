var messageRowHeight = $("#message").prop("scrollHeight") + "px";

$(document).ready(function() {

    $("#message").keyup(function() {
        var scrollHeight = $(this).prop("scrollHeight") + "px";
        $(this).css("height", scrollHeight);

        var message = $(this).val();
        if (message !== '') {
            $(this).css("background", "rgba(250, 250, 250, 0.05)");
        }   else {
            $(this).css("background", "transparent");
            $(this).css("height", messageRowHeight);
        }
    });
    
    $(".contactForm #send").click(function() {
        $(".contactForm input, textarea").attr("disabled", "disabled");
        
        // ajax in future

        $("#name, #email, #message").val('');
        $(".contactForm input, textarea").removeAttr("disabled");
    });

});