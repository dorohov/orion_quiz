(function($) {
    "use strict"
    $(function() {

        $('body').mousemove(function(e) {
            $('[data-tr]').css({
                transform: 'translateX(' + e.clientX / 60 + 'px) translateY(' + e.clientY / 60 + 'px)'
            })
            $('[data-tri]').css({
                transform: 'translateX(-' + e.clientX / 60 + 'px) translateY(-' + e.clientY / 60 + 'px)'
            }) 
        })

        function setValue(slider, field, value, set) {

            var finalValue = value

            if(value > 1500 || value < 0 || isNaN(value)) {
                finalValue = 0
            }

            field.val('')
            field.attr('placeholder', finalValue + ' шт.')

            slider.parent().siblings('input[type="nidden"]').val(finalValue)

            slider.siblings('input[type="hidden"]').val(finalValue)

            if(set) {
                slider.slider('option', 'value', finalValue)
            }

        }

        $('.main-slider').slider({
            min: 100,
            max: 1500,
            value: 500,
            range: "min",
            slide: function(e, ui) {
                var input = $(this).parent().siblings('.input-slider__right').children('input')

                setValue($(this), input, ui.value, false)

            }
        })

        $('.input-slider__right input').focusout(function() {
            var slider = $(this).parent().siblings('.input-slider__left').children('.main-slider')

            var thisVal = Number.parseInt($(this).val())

            setValue(slider, $(this), thisVal, true)
        })

        $('form').parsley()

        var phoneInputs = document.getElementsByClassName('input-phone');

        if(phoneInputs.length) {
            for(var i = 0; i < phoneInputs.length; i++) {
                new IMask(
                    phoneInputs[i], {
                    mask: '+{7}(900)000-00-00'
                });
            }
        }

    })
})(jQuery);