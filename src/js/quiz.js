(function($) {
    "use strict"
    $(function() {
        $('.screen.is--on').hide();
        $('.btn.is--start').on('click', function() {
            $('.screen.is--on').hide();
            $('.screen.is--s').css({
                display: 'flex'
            })
        })

        $('.field__submit button').on('click', function() {
            var items = $('.screen.is--s .field')

            items.each(function() {
                var checkedRadioButtons = $(this).find('input[type="radio"]:checked')
                var textFields = $(this).find('input.is--w')

                console.log(checkedRadioButtons, textFields)
            })

        })

    })
})(jQuery);