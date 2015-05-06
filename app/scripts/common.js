//Слайдер для > 800px экранов. Если Экран меньше, слайдер заменяется на блок с радио.
$(function () {

	'use strict';

	var sliderElem = document.getElementById('slider');
    var thumbElem = sliderElem.children[0];
    var width = document.body.clientWidth;

    thumbElem.onmousedown = function(e) {
      var thumbCoords = getCoords(thumbElem);
      var shiftX = e.pageX - thumbCoords.left;

      var sliderCoords = getCoords(sliderElem);

      document.onmousemove = function(e) {
        var newLeft = e.pageX - shiftX - sliderCoords.left;
        // курсор ушёл вне слайдера и прилипание к ключевым точкам
        if (newLeft < 0) {
          newLeft = -4;
        }
        var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        } else if (newLeft > 0 && newLeft < 10) {
          newLeft = -4;
        } else if (newLeft >  140 && newLeft < 150) {
          newLeft = 144;
        } else if (newLeft >  360 && newLeft < 380) {
          newLeft = 369;
        } else if (newLeft >  740) {
          newLeft = 752;
        } 

        thumbElem.style.left = newLeft + 'px';
      }

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };

      return false;
    };

    thumbElem.ondragstart = function() {
      return false;
    };

    function getCoords(elem) {
      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }

});

// Подставляет текст из слайдера в radiobox (чтобы не было дублирования контента)
$(function () {
var sliderItem1 = document.getElementById('slider__item-1'),
    sliderItem2 = document.getElementById('slider__item-2'),
    sliderItem3 = document.getElementById('slider__item-3'),
    sliderItem4 = document.getElementById('slider__item-4'),
    radiobox = document.querySelectorAll('.radiobox__radio--for-tablet label');
radiobox[0].textContent = sliderItem1.textContent;
radiobox[1].textContent = sliderItem2.textContent;
radiobox[2].textContent = sliderItem3.textContent;
radiobox[3].textContent = sliderItem4.textContent;
});