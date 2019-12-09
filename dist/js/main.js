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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJxdWl6LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm1vdXNlbW92ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXRyXScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKCcgKyBlLmNsaWVudFggLyA2MCArICdweCkgdHJhbnNsYXRlWSgnICsgZS5jbGllbnRZIC8gNjAgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdbZGF0YS10cmldJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLScgKyBlLmNsaWVudFggLyA2MCArICdweCkgdHJhbnNsYXRlWSgtJyArIGUuY2xpZW50WSAvIDYwICsgJ3B4KSdcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0VmFsdWUoc2xpZGVyLCBmaWVsZCwgdmFsdWUsIHNldCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpbmFsVmFsdWUgPSB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgaWYodmFsdWUgPiAxNTAwIHx8IHZhbHVlIDwgMCB8fCBpc05hTih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpZWxkLnZhbCgnJylcclxuICAgICAgICAgICAgZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCBmaW5hbFZhbHVlICsgJyDRiNGCLicpXHJcblxyXG4gICAgICAgICAgICBzbGlkZXIucGFyZW50KCkuc2libGluZ3MoJ2lucHV0W3R5cGU9XCJuaWRkZW5cIl0nKS52YWwoZmluYWxWYWx1ZSlcclxuXHJcbiAgICAgICAgICAgIHNsaWRlci5zaWJsaW5ncygnaW5wdXRbdHlwZT1cImhpZGRlblwiXScpLnZhbChmaW5hbFZhbHVlKVxyXG5cclxuICAgICAgICAgICAgaWYoc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCBmaW5hbFZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLm1haW4tc2xpZGVyJykuc2xpZGVyKHtcclxuICAgICAgICAgICAgbWluOiAxMDAsXHJcbiAgICAgICAgICAgIG1heDogMTUwMCxcclxuICAgICAgICAgICAgdmFsdWU6IDUwMCxcclxuICAgICAgICAgICAgcmFuZ2U6IFwibWluXCIsXHJcbiAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbihlLCB1aSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmlucHV0LXNsaWRlcl9fcmlnaHQnKS5jaGlsZHJlbignaW5wdXQnKVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCQodGhpcyksIGlucHV0LCB1aS52YWx1ZSwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmlucHV0LXNsaWRlcl9fcmlnaHQgaW5wdXQnKS5mb2N1c291dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dC1zbGlkZXJfX2xlZnQnKS5jaGlsZHJlbignLm1haW4tc2xpZGVyJylcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzVmFsID0gTnVtYmVyLnBhcnNlSW50KCQodGhpcykudmFsKCkpXHJcblxyXG4gICAgICAgICAgICBzZXRWYWx1ZShzbGlkZXIsICQodGhpcyksIHRoaXNWYWwsIHRydWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnZm9ybScpLnBhcnNsZXkoKVxyXG5cclxuICAgICAgICB2YXIgcGhvbmVJbnB1dHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbnB1dC1waG9uZScpO1xyXG5cclxuICAgICAgICBpZihwaG9uZUlucHV0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHBob25lSW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBuZXcgSU1hc2soXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVJbnB1dHNbaV0sIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXNrOiAnK3s3fSg5MDApMDAwLTAwLTAwJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24oJCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCJcclxuICAgICQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLnNjcmVlbi5pcy0tdGgnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgIC8vICQoJy5zY3JlZW4uaXMtLW9uJykuaGlkZSgpO1xyXG4gICAgICAgICQoJy5zY3JlZW4uaXMtLXMnKS5oaWRlKCk7XHJcblxyXG4gICAgICAgICQoJy5idG4uaXMtLXN0YXJ0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICQoJy5zY3JlZW4uaXMtLW9uJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcuc2NyZWVuLmlzLS1zJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4J1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBhbGxSZXN1bHRzID0gbmV3IEFycmF5KClcclxuXHJcbiAgICAgICAgJCgnLmZpZWxkX19zdWJtaXQgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFsbFJlc3VsdHMgPSBuZXcgQXJyYXkoKVxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSAkKCcuc2NyZWVuLmlzLS1zIC5maWVsZCcpXHJcbiAgICAgICAgICAgIHZhciByYWRpb3NPayA9IHRydWVcclxuICAgICAgICAgICAgdmFyIHRleHRPayA9IHRydWVcclxuICAgICAgICAgICAgdmFyIGFsbE9rID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYWxsUmFkaW9CdXR0b25zID0gJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nKVxyXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrZWRSYWRpb0J1dHRvbnMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJylcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0RmllbGRzID0gJCh0aGlzKS5maW5kKCdpbnB1dC5pcy0tdycpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYoYWxsUmFkaW9CdXR0b25zLmxlbmd0aCAhPSAwICYmIGNoZWNrZWRSYWRpb0J1dHRvbnMubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByYWRpb3NPayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0ZXh0RmllbGRzLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEZpZWxkcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihwYXJzZUludCgkKHRoaXMpLnZhbCgpKSA8PSAwIHx8IHR5cGVvZiBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSAhPSAnbnVtYmVyJyB8fCBpc05hTihwYXJzZUludCgkKHRoaXMpLnZhbCgpKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRPayA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgaWYocmFkaW9zT2sgJiYgdGV4dE9rKSBhbGxPayA9IHRydWVcclxuXHJcbiAgICAgICAgICAgIGlmKCFhbGxPaykgYWxlcnQoJ9Cf0L7QttCw0LvRg9C50YHRgtCwLCDQt9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPLicpXHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRoaXNOYW1lID0gJChfdGhpcykuZmluZCgnLmZpZWxkX19oZWFkaW5nJykuaHRtbCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhbGxSYWRpb0J1dHRvbnMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRleHRGaWVsZHMgPSAkKHRoaXMpLmZpbmQoJ2lucHV0LmlzLS13JylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYWxsUmFkaW9CdXR0b25zLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlc3VsdHMucHVzaChbdGhpc05hbWUsICQoX3RoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkJykudmFsKCldKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih0ZXh0RmllbGRzLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFJlc3VsdHMucHVzaChbdGhpc05hbWUsICQoX3RoaXMpLmZpbmQoJ2lucHV0LmlzLS13JykudmFsKCldKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnLnNjcmVlbi5pcy0tcycpLmhpZGUoKVxyXG4gICAgICAgICAgICAgICAgJCgnLnNjcmVlbi5pcy0tdGgnKS5zaG93KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcjZmluaXNoRm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblxyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgICAgICQoJyNtb2RhbC1zdWNjZXNzJykubW9kYWwoKVxyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHVybDogJ3NlbmQucGhwJyxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGFsbFJlc3VsdHMpXHJcbiAgICAgICAgICAgIH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgJCgnI21vZGFsLXN1Y2Nlc3MnKS5tb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFkZUR1cmF0aW9uOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFkZURlbGF5OiAwLjUwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVzY2FwZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjbGlja0Nsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
