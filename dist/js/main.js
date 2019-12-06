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

            if(value > 1500 || value < 0 || value == NaN) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJxdWl6LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm1vdXNlbW92ZShmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICQoJ1tkYXRhLXRyXScpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKCcgKyBlLmNsaWVudFggLyA2MCArICdweCkgdHJhbnNsYXRlWSgnICsgZS5jbGllbnRZIC8gNjAgKyAncHgpJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAkKCdbZGF0YS10cmldJykuY3NzKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLScgKyBlLmNsaWVudFggLyA2MCArICdweCkgdHJhbnNsYXRlWSgtJyArIGUuY2xpZW50WSAvIDYwICsgJ3B4KSdcclxuICAgICAgICAgICAgfSkgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2V0VmFsdWUoc2xpZGVyLCBmaWVsZCwgdmFsdWUsIHNldCkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpbmFsVmFsdWUgPSB2YWx1ZVxyXG5cclxuICAgICAgICAgICAgaWYodmFsdWUgPiAxNTAwIHx8IHZhbHVlIDwgMCB8fCB2YWx1ZSA9PSBOYU4pIHtcclxuICAgICAgICAgICAgICAgIGZpbmFsVmFsdWUgPSAwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpZWxkLnZhbCgnJylcclxuICAgICAgICAgICAgZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCBmaW5hbFZhbHVlICsgJyDRiNGCLicpXHJcblxyXG4gICAgICAgICAgICBzbGlkZXIucGFyZW50KCkuc2libGluZ3MoJ2lucHV0W3R5cGU9XCJuaWRkZW5cIl0nKS52YWwoZmluYWxWYWx1ZSlcclxuXHJcbiAgICAgICAgICAgIHNsaWRlci5zaWJsaW5ncygnaW5wdXRbdHlwZT1cImhpZGRlblwiXScpLnZhbChmaW5hbFZhbHVlKVxyXG5cclxuICAgICAgICAgICAgaWYoc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuc2xpZGVyKCdvcHRpb24nLCAndmFsdWUnLCBmaW5hbFZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLm1haW4tc2xpZGVyJykuc2xpZGVyKHtcclxuICAgICAgICAgICAgbWluOiAxMDAsXHJcbiAgICAgICAgICAgIG1heDogMTUwMCxcclxuICAgICAgICAgICAgcmFuZ2U6IFwibWluXCIsXHJcbiAgICAgICAgICAgIHNsaWRlOiBmdW5jdGlvbihlLCB1aSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygnLmlucHV0LXNsaWRlcl9fcmlnaHQnKS5jaGlsZHJlbignaW5wdXQnKVxyXG5cclxuICAgICAgICAgICAgICAgIHNldFZhbHVlKCQodGhpcyksIGlucHV0LCB1aS52YWx1ZSwgZmFsc2UpXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgJCgnLmlucHV0LXNsaWRlcl9fcmlnaHQgaW5wdXQnKS5mb2N1c291dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIHNsaWRlciA9ICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dC1zbGlkZXJfX2xlZnQnKS5jaGlsZHJlbignLm1haW4tc2xpZGVyJylcclxuXHJcbiAgICAgICAgICAgIHZhciB0aGlzVmFsID0gTnVtYmVyLnBhcnNlSW50KCQodGhpcykudmFsKCkpXHJcblxyXG4gICAgICAgICAgICBzZXRWYWx1ZShzbGlkZXIsICQodGhpcyksIHRoaXNWYWwsIHRydWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuc2NyZWVuLmlzLS1vbicpLmhpZGUoKTtcclxuICAgICAgICAkKCcuYnRuLmlzLS1zdGFydCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCcuc2NyZWVuLmlzLS1vbicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnLnNjcmVlbi5pcy0tcycpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICAkKCcuZmllbGRfX3N1Ym1pdCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gJCgnLnNjcmVlbi5pcy0tcyAuZmllbGQnKVxyXG5cclxuICAgICAgICAgICAgaXRlbXMuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaGVja2VkUmFkaW9CdXR0b25zID0gJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCcpXHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dEZpZWxkcyA9ICQodGhpcykuZmluZCgnaW5wdXQuaXMtLXcnKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoZWNrZWRSYWRpb0J1dHRvbnMsIHRleHRGaWVsZHMpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxufSkoalF1ZXJ5KTsiXX0=
