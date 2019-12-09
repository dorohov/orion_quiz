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

    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {
        $('.screen.is--th').hide();

        $('.screen.is--on').hide();
        // $('.screen.is--s').hide();

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
                        if(Number.parseInt($(this).val()) <= 0 || typeof Number.parseInt($(this).val()) != 'number' || isNaN(Number.parseInt($(this).val()))) {
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

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJxdWl6LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5tb3VzZW1vdmUoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAkKCdbZGF0YS10cl0nKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgnICsgZS5jbGllbnRYIC8gNjAgKyAncHgpIHRyYW5zbGF0ZVkoJyArIGUuY2xpZW50WSAvIDYwICsgJ3B4KSdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgJCgnW2RhdGEtdHJpXScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0nICsgZS5jbGllbnRYIC8gNjAgKyAncHgpIHRyYW5zbGF0ZVkoLScgKyBlLmNsaWVudFkgLyA2MCArICdweCknXHJcbiAgICAgICAgICAgIH0pIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldFZhbHVlKHNsaWRlciwgZmllbGQsIHZhbHVlLCBzZXQpIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaW5hbFZhbHVlID0gdmFsdWVcclxuXHJcbiAgICAgICAgICAgIGlmKHZhbHVlID4gMTUwMCB8fCB2YWx1ZSA8IDAgfHwgaXNOYU4odmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gMFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmaWVsZC52YWwoJycpXHJcbiAgICAgICAgICAgIGZpZWxkLmF0dHIoJ3BsYWNlaG9sZGVyJywgZmluYWxWYWx1ZSArICcg0YjRgi4nKVxyXG5cclxuICAgICAgICAgICAgc2xpZGVyLnBhcmVudCgpLnNpYmxpbmdzKCdpbnB1dFt0eXBlPVwibmlkZGVuXCJdJykudmFsKGZpbmFsVmFsdWUpXHJcblxyXG4gICAgICAgICAgICBzbGlkZXIuc2libGluZ3MoJ2lucHV0W3R5cGU9XCJoaWRkZW5cIl0nKS52YWwoZmluYWxWYWx1ZSlcclxuXHJcbiAgICAgICAgICAgIGlmKHNldCkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLnNsaWRlcignb3B0aW9uJywgJ3ZhbHVlJywgZmluYWxWYWx1ZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJy5tYWluLXNsaWRlcicpLnNsaWRlcih7XHJcbiAgICAgICAgICAgIG1pbjogMTAwLFxyXG4gICAgICAgICAgICBtYXg6IDE1MDAsXHJcbiAgICAgICAgICAgIHZhbHVlOiA1MDAsXHJcbiAgICAgICAgICAgIHJhbmdlOiBcIm1pblwiLFxyXG4gICAgICAgICAgICBzbGlkZTogZnVuY3Rpb24oZSwgdWkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dC1zbGlkZXJfX3JpZ2h0JykuY2hpbGRyZW4oJ2lucHV0JylcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZSgkKHRoaXMpLCBpbnB1dCwgdWkudmFsdWUsIGZhbHNlKVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgICQoJy5pbnB1dC1zbGlkZXJfX3JpZ2h0IGlucHV0JykuZm9jdXNvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciBzbGlkZXIgPSAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCcuaW5wdXQtc2xpZGVyX19sZWZ0JykuY2hpbGRyZW4oJy5tYWluLXNsaWRlcicpXHJcblxyXG4gICAgICAgICAgICB2YXIgdGhpc1ZhbCA9IE51bWJlci5wYXJzZUludCgkKHRoaXMpLnZhbCgpKVxyXG5cclxuICAgICAgICAgICAgc2V0VmFsdWUoc2xpZGVyLCAkKHRoaXMpLCB0aGlzVmFsLCB0cnVlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnNjcmVlbi5pcy0tdGgnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICQoJy5zY3JlZW4uaXMtLW9uJykuaGlkZSgpO1xyXG4gICAgICAgIC8vICQoJy5zY3JlZW4uaXMtLXMnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICQoJy5idG4uaXMtLXN0YXJ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5zY3JlZW4uaXMtLW9uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuc2NyZWVuLmlzLS1zJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBhbGxSZXN1bHRzID0gbmV3IEFycmF5KClcclxuXHJcbiAgICAgICAgJCgnLmZpZWxkX19zdWJtaXQgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFsbFJlc3VsdHMgPSBuZXcgQXJyYXkoKVxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSAkKCcuc2NyZWVuLmlzLS1zIC5maWVsZCcpXHJcbiAgICAgICAgICAgIHZhciByYWRpb3NPayA9IHRydWVcclxuICAgICAgICAgICAgdmFyIHRleHRPayA9IHRydWVcclxuICAgICAgICAgICAgdmFyIGFsbE9rID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWxsUmFkaW9CdXR0b25zID0gJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWRSYWRpb0J1dHRvbnMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJylcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0RmllbGRzID0gJCh0aGlzKS5maW5kKCdpbnB1dC5pcy0tdycpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYWxsUmFkaW9CdXR0b25zLmxlbmd0aCAhPSAwICYmIGNoZWNrZWRSYWRpb0J1dHRvbnMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByYWRpb3NPayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0ZXh0RmllbGRzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihOdW1iZXIucGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgPD0gMCB8fCB0eXBlb2YgTnVtYmVyLnBhcnNlSW50KCQodGhpcykudmFsKCkpICE9ICdudW1iZXInIHx8IGlzTmFOKE51bWJlci5wYXJzZUludCgkKHRoaXMpLnZhbCgpKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYocmFkaW9zT2sgJiYgdGV4dE9rKSBhbGxPayA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIGlmKCFhbGxPaykgYWxlcnQoJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQt9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPLicpXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNOYW1lID0gJChfdGhpcykuZmluZCgnLmZpZWxkX19oZWFkaW5nJykuaHRtbCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbGxSYWRpb0J1dHRvbnMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRGaWVsZHMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0LmlzLS13JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWxsUmFkaW9CdXR0b25zLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlc3VsdHMucHVzaChbdGhpc05hbWUsICQoX3RoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykudmFsKCldKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0ZXh0RmllbGRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlc3VsdHMucHVzaChbdGhpc05hbWUsICQoX3RoaXMpLmZpbmQoJ2lucHV0LmlzLS13JykudmFsKCldKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLnNjcmVlbi5pcy0tcycpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgJCgnLnNjcmVlbi5pcy0tdGgnKS5zaG93KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
