(function($) {
    "use strict"
    $(function() {
        $('.screen.is--th').hide();

        // $('.screen.is--on').hide();
        $('.screen.is--s').hide();

        $('.btn.is--start').on('click', function() {
            $('.screen.is--on').hide();
            $('.screen.is--s').css({
                display: 'flex'
            })
        })

        var allResults = new Array()

        $('.field__submit button').on('click', function() {
            allResults = new Array()
            var items = $('.screen.is--s .field')
            var radiosOk = true
            var textOk = true
            var allOk = false

            items.each(function() {
                var allRadioButtons = $(this).find('input[type="radio"]')
                var checkedRadioButtons = $(this).find('input[type="radio"]:checked')
                var textFields = $(this).find('input.is--w')

                if(allRadioButtons.length != 0 && checkedRadioButtons.length <= 0) {
                    radiosOk = false
                }
                if(textFields.length != 0) {
                    textFields.each(function() {
                        if(parseInt($(this).val()) <= 0 || typeof parseInt($(this).val()) != 'number' || isNaN(parseInt($(this).val()))) {
                            textOk = false
                        }
                    })
                }
            })

            if(radiosOk && textOk) allOk = true

            if(!allOk) alert('Пожалуйста, заполните все поля.')
            else {
                items.each(function() {
                    var _this = this
                    var thisName = $(_this).find('.field__heading').html()

                    var allRadioButtons = $(this).find('input[type="radio"]')
                    var textFields = $(this).find('input.is--w')

                    if(allRadioButtons.length >= 1) {
                        allResults.push([thisName, $(_this).find('input[type="radio"]:checked').val()])
                    }
                    if(textFields.length >= 1) {
                        allResults.push([thisName, $(_this).find('input.is--w').val()])
                    }
                })

                $('.screen.is--s').hide()
                $('.screen.is--th').show()
            }

        })

        $('#finishForm').on('submit', function(e) {

            e.preventDefault()

            $('#modal-success').modal()

            $.ajax({
                url: 'send.php',
                type: 'POST',
                data: JSON.stringify(allResults)
            }).done(function(data) {
                $('#modal-success').modal({
                    fadeDuration: 100,
                    fadeDelay: 0.50,
                    escapeClose: false,
                    clickClose: false,
                    showClose: false
                })
            })
        })

    })
})(jQuery);