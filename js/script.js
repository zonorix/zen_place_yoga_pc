$(function () {

    var pageTop = $('#pageTop');
    pageTop.hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
    pageTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    })

});