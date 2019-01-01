(function ($) {
    $(document).ready(function () {
        $("#features figure").click(function () {
            const $img = $(this).children("img");

            $.magnificPopup.open({items: {src: $img.attr('src')}, type: 'image'})
        });
    });
})(jQuery);