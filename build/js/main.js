var Main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/calvin-klein/build/js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var DeviceDetection = __webpack_require__(1);
	var Togglers = __webpack_require__(2);
	var Carousel = __webpack_require__(3);
	var Modal = __webpack_require__(4);
	var Anchor = __webpack_require__(5);
	//let Input = require("./components/input");
	//let Select = require("./components/select");
	var Animation = __webpack_require__(6);
	var Test = __webpack_require__(7);

	$(document).ready(function () {

	  DeviceDetection.run();
	  Togglers.init();
	  Carousel.init();
	  Modal.init();
	  Anchor.init();
	  //Input.init();
	  //Select.init();
	  Animation.init();
	  Test.init();
	});

	/**
	 * Список экспортируемых модулей, чтобы иметь к ним доступ извне
	 * @example
	 * Main.Form.isFormValid();
	 */
	module.exports = {
	  DeviceDetection: DeviceDetection,
	  Togglers: Togglers,
	  Carousel: Carousel,
	  Modal: Modal,
	  Anchor: Anchor,
	  Animation: Animation,
	  Test: Test
	  //Input,
	  //Select
		};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';

	var breakpoints = {
		sm: 576,
		md: 768,
		lg: 992,
		xl: 1200
	};

	function isMobile() {
		return $(window).width() <= breakpoints.sm;
	}
	function isTablet() {
		return $(window).width() > breakpoints.sm && $(window).width() <= breakpoints.md;
	}
	function isTouch() {
		return 'ontouchstart' in window || navigator.maxTouchPoints;
	}

	function run() {
		if (isTouch()) {
			$('html').removeClass('no-touch').addClass('touch');
		} else {
			$('html').removeClass('touch').addClass('no-touch');
		}
	}

	module.exports = { run: run, isTouch: isTouch, isMobile: isMobile, isTablet: isTablet };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Переключение классов по различным событиям
	 * @module Togglers
	 */

	function toggleClassIf(el, cond, toggledClass) {
		if (cond) {
			el.addClass(toggledClass);
		} else {
			el.removeClass(toggledClass);
		}
	}

	/**
	 * Функция добавляет к элементу класс, если страница прокручена больше, чем на указанное значение, 
	 * и убирает класс, если значение меньше
	 * @param {object} el - элемент, с которым взаимодействуем
	 * @param {mixed} [scrollValue=0] - значение прокрутки, на котором меняем css-класс, ожидаемое значение - число или ключевое слово 'this'. Если передано 'this', подставляется положение el.offset().top минус половина высоты экрана
	 * @param {string} [toggledClass=scrolled] - css-класс, который переключаем
	 */
	function toggleElementClassOnScroll(el) {
		var scrollValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var toggledClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'scrolled';

		if (el.length == 0) {
			//console.error("Необходимо передать объект, с которым вы хотите взаимодействовать");
			return false;
		}

		if (scrollValue == 'this') {
			scrollValue = el.offset().top - $(window).outerHeight() / 2;
		}

		$(window).on('scroll', function (e) {
			if ($(window).scrollTop() > scrollValue) {
				el.addClass(toggledClass);
			} else {
				el.removeClass(toggledClass);
			}
		});
	};

	/**
	 * инициализация событий для переключателей классов
	 * @example
	 * Togglers.init();
	 */
	function init() {

		//toggleElementClassOnScroll($('.header'), $(window).outerHeight() / 3);

	}

	module.exports = { init: init, toggleClassIf: toggleClassIf, toggleElementClassOnScroll: toggleElementClassOnScroll };

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Карусель
	 * @module Carousel
	 */

	/**
	 * Инициализация карусели
	 */
	function init() {
	  var carouselHome = $(".owl-carousel.carousel--home");
	  var carouselDefault = $(".owl-carousel.carousel--default");

	  carouselHome.owlCarousel({
	    items: 1,
	    nav: true,
	    navText: ['', ''],
	    dots: false,
	    loop: true,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    lazyLoad: true,
	    mouseDrag: false,
	    animateOut: 'fadeOut'
	  });
	  carouselDefault.owlCarousel({
	    items: 1,
	    nav: true,
	    navText: ['', ''],
	    dots: false,
	    loop: true,
	    lazyLoad: true,
	    mouseDrag: false,
	    animateOut: 'fadeOut'
	  });
	}

	module.exports = { init: init };

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Всплывающие окна
	 * @module Modal
	 */

	var layout = $('.layout');
	var modalWrapperClass = '.modal__wrapper';
	//let modalWrapper = $('.modal__wrapper');

	function openModal(modal) {
	  var isFullscreen = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var modalWrapper = modal.closest(modalWrapperClass);
	  modalWrapper.removeClass('invisible');
	  modal.removeClass('invisible');
	  var wrapperClasses = 'is-opened';
	  if (isFullscreen) {
	    wrapperClasses += ' is-fullscreen';
	  }
	  layout.addClass('modal-open');
	  modalWrapper.addClass(wrapperClasses);
	  modal.addClass('is-opened');
	  $('html, body').css('overflow-y', 'hidden');
	}

	function closeModal(modal) {
	  var openNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var modalWrapper = modal.closest(modalWrapperClass);
	  modal.removeClass('is-opened');
	  if (!openNext) {
	    layout.removeClass('modal-open');
	    modalWrapper.removeClass('is-opened is-fullscreen');
	    $('html, body').css('overflow-y', '');
	  }
	  setTimeout(function () {
	    modal.addClass('invisible');
	    modalWrapper.addClass('invisible');
	  }, 300);
	}

	/**
	 * инициализация событий для всплывающих окон
	 * @example
	 * Modal.init();
	 */
	function init() {

	  $('.js-modal').click(function (e) {
	    e.preventDefault();
	    var target = $(this).attr('data-target');
	    var modal = $(target);
	    var isFullscreen = modal.attr('data-fullscreen') !== undefined;
	    if (!modal.hasClass('is-opened')) {
	      openModal(modal, isFullscreen);
	    } else {
	      closeModal(modal);
	    }
	  });

	  function openModalHash() {
	    var hash = ['competition'],
	        isFullscreen = void 0,
	        modal = void 0,
	        i = void 0;

	    for (i = 0; i < hash.length; i++) {
	      if ('#' + hash[i] == window.location.hash && $('#' + hash[i]).length) {
	        modal = $('#' + hash[i]);
	        isFullscreen = modal.attr('data-fullscreen') !== undefined;

	        openModal(modal, isFullscreen);
	      }
	    }
	  }

	  openModalHash();
	}

	module.exports = { init: init, openModal: openModal, closeModal: closeModal };

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Anchor scrolling
	 * @module Anchor
	 */

	function scrollToAnchor(newpos) {
	  TweenMax.to(window, 0.5, { scrollTo: { y: newpos, offsetY: 200 } });
	}

	/**
	 * инициализация событий якорного меню
	 * @example
	 * Anchor.init();
	 */
	function init() {

	  $('.js-anchor').click(function (e) {
	    var id = $(this).attr('href');
	    var scrollToID = id + '-title';
	    if (!!$(this).closest('.modal')) {
	      Main.Modal.closeModal($(this).closest('.modal'));
	    }
	    if ($(id).length > 0 && $(scrollToID).length > 0) {
	      e.preventDefault();

	      setTimeout(scrollToAnchor, 400, scrollToID);
	      ;

	      //if (window.history && window.history.pushState) {
	      //  history.pushState("", document.title, id);
	      //}
	    }
	  });
	}

	module.exports = { init: init };

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Переключение классов по различным событиям
	 * @module Animation
	 */

	var scrollAnimationBlocks = $('.a-scroll-box');
	var parallaxBlocks = $('.a-parallax-box');

	function addClassTogglerScene(el, controller) {
	  new ScrollMagic.Scene({
	    triggerElement: el,
	    triggerHook: 0.7
	  }).setClassToggle(el, 'animate').addTo(controller);
	}

	function addClassTogglerController(animationBlocks) {
	  var controller = new ScrollMagic.Controller();
	  animationBlocks.each(function () {
	    var aDelay = 0;
	    if ($(this).attr('data-a-delay') !== undefined) {
	      aDelay = Number($(this).attr('data-a-delay')) * 1000;
	    }
	    setTimeout(addClassTogglerScene, aDelay, this, controller);
	  });
	}

	function getFromPosition(el) {
	  var defaultPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  return el.attr('data-parallax-from') !== undefined ? Number(el.attr('data-parallax-from')) : defaultPosition;
	}
	function getToPosition(el) {
	  var defaultPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  return el.attr('data-parallax-to') !== undefined ? Number(el.attr('data-parallax-to')) : defaultPosition;
	}

	function getParallaxTimeline(el) {
	  var tween = new TimelineMax();
	  var tweensArr = [];
	  if ($(el).find('.a-parallax-back')) {
	    var targetEl = $(el).find('.a-parallax-back');
	    var fromPos = getFromPosition(targetEl, -20);
	    var toPos = getToPosition(targetEl);
	    tweensArr.push(TweenMax.fromTo(targetEl, 1, { yPercent: fromPos }, { yPercent: toPos, ease: Linear.easeNone }));
	  }
	  if ($(el).find('.a-parallax-middle')) {
	    var _targetEl = $(el).find('.a-parallax-middle');
	    var _fromPos = getFromPosition(_targetEl, -15);
	    var _toPos = getToPosition(_targetEl);
	    tweensArr.push(TweenMax.fromTo(_targetEl, 1, { yPercent: _fromPos }, { yPercent: _toPos, ease: Linear.easeNone }));
	  }
	  if ($(el).find('.a-parallax-front')) {
	    var _targetEl2 = $(el).find('.a-parallax-front');
	    var _fromPos2 = getFromPosition(_targetEl2, -10);
	    var _toPos2 = getToPosition(_targetEl2, 10);
	    tweensArr.push(TweenMax.fromTo(_targetEl2, 1, { yPercent: _fromPos2 }, { yPercent: _toPos2, ease: Linear.easeNone }));
	  }
	  tween.add(tweensArr);
	  return tween;
	}

	function addParallaxScene(el, tween, controller) {
	  new ScrollMagic.Scene({
	    triggerElement: el,
	    duration: $(el).height()
	  }).setTween(tween).addTo(controller);
	}

	function addParallaxController(animationBlocks) {
	  var controller = new ScrollMagic.Controller();
	  animationBlocks.each(function () {
	    var tween = getParallaxTimeline(this);
	    addParallaxScene(this, tween, controller);
	  });
	}

	function init() {
	  if (scrollAnimationBlocks.length > 0 && $(window).width() > 1024) {
	    $('html').addClass('is-animating');
	    addClassTogglerController(scrollAnimationBlocks);
	  }
	  if (parallaxBlocks.length > 0 && $(window).width() > 1024) {
	    $('html').addClass('is-animating');
	    addParallaxController(parallaxBlocks);
	  }
	}

	module.exports = { init: init };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	/**
	 * Тест
	 * @module Test
	 */

	var sum = 0;
	var carousel = $(".owl-carousel.carousel--test");
	var testCtrl = $('.test-ctrl');
	var testReset = $('.js-test-reset');
	var resultModal = $('#test-result');

	function isLastSlide() {
	  return carousel.find('.owl-item').filter(':last').hasClass('active');
	}
	function getModal(answer) {
	  return answer ? $('#test-correct') : $('#test-incorrect');
	}
	function prepareResultModal(sum, total) {
	  resultModal.find('#sum').text(sum);
	  resultModal.find('#total').text(total);
	}

	function isCorrect(el) {
	  var answer = parseInt($(el).closest('.test').attr('data-value'));
	  var value = parseInt($(el).attr('value'));
	  return answer === value;
	}
	function processTest(el) {
	  var isLastSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	  var answer = isCorrect(el);
	  if (answer) {
	    sum += 1;
	  }
	  var modal = getModal(answer);
	  Main.Modal.openModal(modal, true);
	  if (!isLastSlide) {
	    showNext(el);
	  }
	  setTimeout(function () {
	    Main.Modal.closeModal(modal, isLastSlide);
	  }, 600, modal, isLastSlide);
	  if (isLastSlide) {
	    showResult();
	  }
	}
	function showNext(el) {
	  carousel.trigger('next.owl.carousel');
	}
	function showResult() {
	  var total = carousel.find('.owl-item').length;
	  prepareResultModal(sum, total);
	  Main.Modal.openModal(resultModal, true);
	}
	function resetTest() {
	  sum = 0;
	  testCtrl.each(function () {
	    $(this).prop('checked', false);
	  });
	  carousel.trigger('to.owl.carousel', 0);
	  setTimeout(function () {
	    Main.Modal.closeModal(resultModal);
	  }, 300, resultModal);
	}

	/**
	 * Инициализация карусели
	 */
	function init() {

	  carousel.owlCarousel({
	    items: 1,
	    nav: false,
	    dots: false,
	    lazyLoad: true,
	    mouseDrag: false,
	    touchDrag: false,
	    animateOut: 'fadeOut',
	    autoHeight: true
	  });

	  testCtrl.on('change', function () {
	    processTest(this, isLastSlide());
	  });
	  testReset.on('click', function () {
	    resetTest();
	  });
	}

	module.exports = { init: init };

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4ZWRjZjNiMmM2ZGFhOWY0MDNlMyIsIndlYnBhY2s6Ly8vc3JjL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3RvZ2dsZXJzLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9jYXJvdXNlbC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2FuY2hvci5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYW5pbWF0aW9uLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy90ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jYWx2aW4ta2xlaW4vYnVpbGQvanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOGVkY2YzYjJjNmRhYTlmNDAzZTMiLCJsZXQgRGV2aWNlRGV0ZWN0aW9uID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9kZXZpY2UtZGV0ZWN0aW9uXCIpO1xyXG5sZXQgVG9nZ2xlcnMgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL3RvZ2dsZXJzXCIpO1xyXG5sZXQgQ2Fyb3VzZWwgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2Nhcm91c2VsXCIpO1xyXG5sZXQgTW9kYWwgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL21vZGFsXCIpO1xyXG5sZXQgQW5jaG9yID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hbmNob3JcIik7XHJcbi8vbGV0IElucHV0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9pbnB1dFwiKTtcclxuLy9sZXQgU2VsZWN0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9zZWxlY3RcIik7XHJcbmxldCBBbmltYXRpb24gPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FuaW1hdGlvblwiKTtcclxubGV0IFRlc3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGVzdCcpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICBcclxuICBEZXZpY2VEZXRlY3Rpb24ucnVuKCk7XHJcbiAgVG9nZ2xlcnMuaW5pdCgpO1xyXG4gIENhcm91c2VsLmluaXQoKTtcclxuICBNb2RhbC5pbml0KCk7XHJcbiAgQW5jaG9yLmluaXQoKTtcclxuICAvL0lucHV0LmluaXQoKTtcclxuICAvL1NlbGVjdC5pbml0KCk7XHJcbiAgQW5pbWF0aW9uLmluaXQoKTtcclxuICBUZXN0LmluaXQoKTtcclxufSk7XHJcblxyXG5cclxuLyoqXHJcbiAqINCh0L/QuNGB0L7QuiDRjdC60YHQv9C+0YDRgtC40YDRg9C10LzRi9GFINC80L7QtNGD0LvQtdC5LCDRh9GC0L7QsdGLINC40LzQtdGC0Ywg0Log0L3QuNC8INC00L7RgdGC0YPQvyDQuNC30LLQvdC1XHJcbiAqIEBleGFtcGxlXHJcbiAqIE1haW4uRm9ybS5pc0Zvcm1WYWxpZCgpO1xyXG4gKi9cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgIERldmljZURldGVjdGlvbixcclxuICAgVG9nZ2xlcnMsXHJcbiAgIENhcm91c2VsLFxyXG4gICBNb2RhbCxcclxuICAgQW5jaG9yLFxyXG4gICBBbmltYXRpb24sXHJcbiAgIFRlc3RcclxuICAgLy9JbnB1dCxcclxuICAgLy9TZWxlY3RcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL21haW4uanMiLCJsZXQgYnJlYWtwb2ludHMgPSB7XHJcblx0c206IDU3NixcclxuXHRtZDogNzY4LFxyXG5cdGxnOiA5OTIsXHJcblx0eGw6IDEyMDBcclxufTtcclxuXHJcbmZ1bmN0aW9uIGlzTW9iaWxlKCl7XHJcblx0cmV0dXJuICgkKHdpbmRvdykud2lkdGgoKSA8PSBicmVha3BvaW50cy5zbSk7XHJcbn1cclxuZnVuY3Rpb24gaXNUYWJsZXQoKXtcclxuXHRyZXR1cm4gKCQod2luZG93KS53aWR0aCgpID4gYnJlYWtwb2ludHMuc20gJiYgJCh3aW5kb3cpLndpZHRoKCkgPD0gYnJlYWtwb2ludHMubWQpXHJcbn1cclxuZnVuY3Rpb24gaXNUb3VjaCgpe1xyXG5cdHJldHVybiAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cgfHwgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW4oKXtcclxuXHRpZihpc1RvdWNoKCkpe1xyXG5cdFx0JCgnaHRtbCcpLnJlbW92ZUNsYXNzKCduby10b3VjaCcpLmFkZENsYXNzKCd0b3VjaCcpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHQkKCdodG1sJykucmVtb3ZlQ2xhc3MoJ3RvdWNoJykuYWRkQ2xhc3MoJ25vLXRvdWNoJyk7XHJcblx0fVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtydW4sIGlzVG91Y2gsIGlzTW9iaWxlLCBpc1RhYmxldH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2RldmljZS1kZXRlY3Rpb24uanMiLCIvKipcclxuICog0J/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INC60LvQsNGB0YHQvtCyINC/0L4g0YDQsNC30LvQuNGH0L3Ri9C8INGB0L7QsdGL0YLQuNGP0LxcclxuICogQG1vZHVsZSBUb2dnbGVyc1xyXG4gKi9cclxuIFxyXG5mdW5jdGlvbiB0b2dnbGVDbGFzc0lmKGVsLCBjb25kLCB0b2dnbGVkQ2xhc3Mpe1xyXG5cdGlmKGNvbmQpe1xyXG5cdFx0ZWwuYWRkQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZWwucmVtb3ZlQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC+0LHQsNCy0LvRj9C10YIg0Log0Y3Qu9C10LzQtdC90YLRgyDQutC70LDRgdGBLCDQtdGB0LvQuCDRgdGC0YDQsNC90LjRhtCwINC/0YDQvtC60YDRg9GH0LXQvdCwINCx0L7Qu9GM0YjQtSwg0YfQtdC8INC90LAg0YPQutCw0LfQsNC90L3QvtC1INC30L3QsNGH0LXQvdC40LUsIFxyXG4gKiDQuCDRg9Cx0LjRgNCw0LXRgiDQutC70LDRgdGBLCDQtdGB0LvQuCDQt9C90LDRh9C10L3QuNC1INC80LXQvdGM0YjQtVxyXG4gKiBAcGFyYW0ge29iamVjdH0gZWwgLSDRjdC70LXQvNC10L3Rgiwg0YEg0LrQvtGC0L7RgNGL0Lwg0LLQt9Cw0LjQvNC+0LTQtdC50YHRgtCy0YPQtdC8XHJcbiAqIEBwYXJhbSB7bWl4ZWR9IFtzY3JvbGxWYWx1ZT0wXSAtINC30L3QsNGH0LXQvdC40LUg0L/RgNC+0LrRgNGD0YLQutC4LCDQvdCwINC60L7RgtC+0YDQvtC8INC80LXQvdGP0LXQvCBjc3Mt0LrQu9Cw0YHRgSwg0L7QttC40LTQsNC10LzQvtC1INC30L3QsNGH0LXQvdC40LUgLSDRh9C40YHQu9C+INC40LvQuCDQutC70Y7Rh9C10LLQvtC1INGB0LvQvtCy0L4gJ3RoaXMnLiDQldGB0LvQuCDQv9C10YDQtdC00LDQvdC+ICd0aGlzJywg0L/QvtC00YHRgtCw0LLQu9GP0LXRgtGB0Y8g0L/QvtC70L7QttC10L3QuNC1IGVsLm9mZnNldCgpLnRvcCDQvNC40L3Rg9GBINC/0L7Qu9C+0LLQuNC90LAg0LLRi9GB0L7RgtGLINGN0LrRgNCw0L3QsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RvZ2dsZWRDbGFzcz1zY3JvbGxlZF0gLSBjc3Mt0LrQu9Cw0YHRgSwg0LrQvtGC0L7RgNGL0Lkg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvFxyXG4gKi9cclxuZnVuY3Rpb24gdG9nZ2xlRWxlbWVudENsYXNzT25TY3JvbGwoZWwsIHNjcm9sbFZhbHVlID0gMCwgdG9nZ2xlZENsYXNzID0gJ3Njcm9sbGVkJyl7XHJcblx0aWYoZWwubGVuZ3RoID09IDApIHtcclxuXHRcdC8vY29uc29sZS5lcnJvcihcItCd0LXQvtCx0YXQvtC00LjQvNC+INC/0LXRgNC10LTQsNGC0Ywg0L7QsdGK0LXQutGCLCDRgSDQutC+0YLQvtGA0YvQvCDQstGLINGF0L7RgtC40YLQtSDQstC30LDQuNC80L7QtNC10LnRgdGC0LLQvtCy0LDRgtGMXCIpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHRcclxuXHRpZihzY3JvbGxWYWx1ZSA9PSAndGhpcycpIHtcclxuXHRcdHNjcm9sbFZhbHVlID0gZWwub2Zmc2V0KCkudG9wIC0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KCkgLyAyO1xyXG5cdH1cclxuXHRcclxuXHQkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0aWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVmFsdWUpe1xyXG5cdFx0XHRlbC5hZGRDbGFzcyh0b2dnbGVkQ2xhc3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0ZWwucmVtb3ZlQ2xhc3ModG9nZ2xlZENsYXNzKTtcclxuXHRcdH1cclxuXHR9KTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDRgdC+0LHRi9GC0LjQuSDQtNC70Y8g0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70LXQuSDQutC70LDRgdGB0L7QslxyXG4gKiBAZXhhbXBsZVxyXG4gKiBUb2dnbGVycy5pbml0KCk7XHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgICBcclxuXHQvL3RvZ2dsZUVsZW1lbnRDbGFzc09uU2Nyb2xsKCQoJy5oZWFkZXInKSwgJCh3aW5kb3cpLm91dGVySGVpZ2h0KCkgLyAzKTtcclxuICBcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7aW5pdCwgdG9nZ2xlQ2xhc3NJZiwgdG9nZ2xlRWxlbWVudENsYXNzT25TY3JvbGx9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy90b2dnbGVycy5qcyIsIi8qKlxyXG4gKiDQmtCw0YDRg9GB0LXQu9GMXHJcbiAqIEBtb2R1bGUgQ2Fyb3VzZWxcclxuICovXHJcblxyXG5cclxuLyoqXHJcbiAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC60LDRgNGD0YHQtdC70LhcclxuICovXHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuICBsZXQgY2Fyb3VzZWxIb21lID0gJChcIi5vd2wtY2Fyb3VzZWwuY2Fyb3VzZWwtLWhvbWVcIik7XHJcbiAgbGV0IGNhcm91c2VsRGVmYXVsdCA9ICQoXCIub3dsLWNhcm91c2VsLmNhcm91c2VsLS1kZWZhdWx0XCIpO1xyXG5cclxuICBjYXJvdXNlbEhvbWUub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBuYXY6IHRydWUsXHJcbiAgICBuYXZUZXh0OiBbJycsICcnXSxcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgbG9vcDogdHJ1ZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlUaW1lb3V0OiAzMDAwLFxyXG4gICAgbGF6eUxvYWQ6IHRydWUsXHJcbiAgICBtb3VzZURyYWc6IGZhbHNlLFxyXG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnXHJcbiAgfSk7XHJcbiAgY2Fyb3VzZWxEZWZhdWx0Lm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiAxLFxyXG4gICAgbmF2OiB0cnVlLFxyXG4gICAgbmF2VGV4dDogWycnLCAnJ10sXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBsYXp5TG9hZDogdHJ1ZSxcclxuICAgIG1vdXNlRHJhZzogZmFsc2UsXHJcbiAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7aW5pdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2Nhcm91c2VsLmpzIiwiLyoqXHJcbiAqINCS0YHQv9C70YvQstCw0Y7RidC40LUg0L7QutC90LBcclxuICogQG1vZHVsZSBNb2RhbFxyXG4gKi9cclxuXHJcbmxldCBsYXlvdXQgPSAkKCcubGF5b3V0Jyk7XHJcbmxldCBtb2RhbFdyYXBwZXJDbGFzcyA9ICcubW9kYWxfX3dyYXBwZXInO1xyXG4vL2xldCBtb2RhbFdyYXBwZXIgPSAkKCcubW9kYWxfX3dyYXBwZXInKTtcclxuIFxyXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwsIGlzRnVsbHNjcmVlbiA9IGZhbHNlKSB7XHJcbiAgbGV0IG1vZGFsV3JhcHBlciA9IG1vZGFsLmNsb3Nlc3QobW9kYWxXcmFwcGVyQ2xhc3MpO1xyXG4gIG1vZGFsV3JhcHBlci5yZW1vdmVDbGFzcygnaW52aXNpYmxlJyk7XHJcbiAgbW9kYWwucmVtb3ZlQ2xhc3MoJ2ludmlzaWJsZScpO1xyXG4gIGxldCB3cmFwcGVyQ2xhc3NlcyA9ICdpcy1vcGVuZWQnO1xyXG4gIGlmIChpc0Z1bGxzY3JlZW4pIHtcclxuICAgIHdyYXBwZXJDbGFzc2VzICs9ICcgaXMtZnVsbHNjcmVlbic7XHJcbiAgfVxyXG4gIGxheW91dC5hZGRDbGFzcygnbW9kYWwtb3BlbicpO1xyXG4gIG1vZGFsV3JhcHBlci5hZGRDbGFzcyh3cmFwcGVyQ2xhc3Nlcyk7XHJcbiAgbW9kYWwuYWRkQ2xhc3MoJ2lzLW9wZW5lZCcpO1xyXG4gICQoJ2h0bWwsIGJvZHknKS5jc3MoJ292ZXJmbG93LXknLCAnaGlkZGVuJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwsIG9wZW5OZXh0ID0gZmFsc2UpIHtcclxuICBsZXQgbW9kYWxXcmFwcGVyID0gbW9kYWwuY2xvc2VzdChtb2RhbFdyYXBwZXJDbGFzcyk7XHJcbiAgbW9kYWwucmVtb3ZlQ2xhc3MoJ2lzLW9wZW5lZCcpO1xyXG4gIGlmICghb3Blbk5leHQpIHtcclxuICAgIGxheW91dC5yZW1vdmVDbGFzcygnbW9kYWwtb3BlbicpO1xyXG4gICAgbW9kYWxXcmFwcGVyLnJlbW92ZUNsYXNzKCdpcy1vcGVuZWQgaXMtZnVsbHNjcmVlbicpO1xyXG4gICAgJCgnaHRtbCwgYm9keScpLmNzcygnb3ZlcmZsb3cteScsICcnKTtcclxuICB9XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgbW9kYWwuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xyXG4gICAgbW9kYWxXcmFwcGVyLmFkZENsYXNzKCdpbnZpc2libGUnKTtcclxuICB9LCAzMDApO1xyXG59XHJcblxyXG4vKipcclxuICog0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0YHQvtCx0YvRgtC40Lkg0LTQu9GPINCy0YHQv9C70YvQstCw0Y7RidC40YUg0L7QutC+0L1cclxuICogQGV4YW1wbGVcclxuICogTW9kYWwuaW5pdCgpO1xyXG4gKi9cclxuZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgXHJcbiAgJCgnLmpzLW1vZGFsJykuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgbGV0IHRhcmdldCA9ICQodGhpcykuYXR0cignZGF0YS10YXJnZXQnKTtcclxuICAgICAgbGV0IG1vZGFsID0gJCh0YXJnZXQpO1xyXG4gICAgICBsZXQgaXNGdWxsc2NyZWVuID0gbW9kYWwuYXR0cignZGF0YS1mdWxsc2NyZWVuJykgIT09IHVuZGVmaW5lZDtcclxuICAgICAgaWYgKCFtb2RhbC5oYXNDbGFzcygnaXMtb3BlbmVkJykpIHtcclxuICAgICAgICBvcGVuTW9kYWwobW9kYWwsIGlzRnVsbHNjcmVlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XHJcbiAgICAgIH1cclxuICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWxIYXNoKCkge1xyXG4gICAgICAgIGxldCBoYXNoID0gWydjb21wZXRpdGlvbiddLFxyXG4gICAgICAgICAgICBpc0Z1bGxzY3JlZW4sXHJcbiAgICAgICAgICAgIG1vZGFsLFxyXG4gICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICBmb3IgKGkgPSAwO2kgPCBoYXNoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICggJyMnK2hhc2hbaV0gPT0gd2luZG93LmxvY2F0aW9uLmhhc2ggJiYgJCgnIycraGFzaFtpXSkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbCA9ICQoJyMnK2hhc2hbaV0pO1xyXG4gICAgICAgICAgICAgICAgaXNGdWxsc2NyZWVuID0gbW9kYWwuYXR0cignZGF0YS1mdWxsc2NyZWVuJykgIT09IHVuZGVmaW5lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwobW9kYWwsIGlzRnVsbHNjcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1vZGFsSGFzaCgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtpbml0LCBvcGVuTW9kYWwsIGNsb3NlTW9kYWx9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9tb2RhbC5qcyIsIi8qKlxyXG4gKiBBbmNob3Igc2Nyb2xsaW5nXHJcbiAqIEBtb2R1bGUgQW5jaG9yXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gc2Nyb2xsVG9BbmNob3IobmV3cG9zKSB7XHJcbiAgVHdlZW5NYXgudG8od2luZG93LCAwLjUsIHtzY3JvbGxUbzoge3k6IG5ld3Bvcywgb2Zmc2V0WTogMjAwfX0pO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINGB0L7QsdGL0YLQuNC5INGP0LrQvtGA0L3QvtCz0L4g0LzQtdC90Y5cclxuICogQGV4YW1wbGVcclxuICogQW5jaG9yLmluaXQoKTtcclxuICovXHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuICAgIFxyXG4gICQoJy5qcy1hbmNob3InKS5jbGljayhmdW5jdGlvbihlKXtcclxuICAgIGxldCBpZCA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG4gICAgbGV0IHNjcm9sbFRvSUQgPSBpZCArICctdGl0bGUnO1xyXG4gICAgaWYgKCEhJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwnKSkge1xyXG4gICAgICBNYWluLk1vZGFsLmNsb3NlTW9kYWwoJCh0aGlzKS5jbG9zZXN0KCcubW9kYWwnKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoJChpZCkubGVuZ3RoID4gMCAmJiAkKHNjcm9sbFRvSUQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBcclxuICAgICAgc2V0VGltZW91dChzY3JvbGxUb0FuY2hvciwgNDAwLCBzY3JvbGxUb0lEKTtcclxuICAgICAgO1xyXG4gICAgICBcclxuICAgICAgLy9pZiAod2luZG93Lmhpc3RvcnkgJiYgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKSB7XHJcbiAgICAgIC8vICBoaXN0b3J5LnB1c2hTdGF0ZShcIlwiLCBkb2N1bWVudC50aXRsZSwgaWQpO1xyXG4gICAgICAvL31cclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7aW5pdH07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2FuY2hvci5qcyIsIi8qKlxyXG4gKiDQn9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LrQu9Cw0YHRgdC+0LIg0L/QviDRgNCw0LfQu9C40YfQvdGL0Lwg0YHQvtCx0YvRgtC40Y/QvFxyXG4gKiBAbW9kdWxlIEFuaW1hdGlvblxyXG4gKi9cclxuXHJcbmxldCBzY3JvbGxBbmltYXRpb25CbG9ja3MgPSAkKCcuYS1zY3JvbGwtYm94Jyk7XHJcbmxldCBwYXJhbGxheEJsb2NrcyA9ICQoJy5hLXBhcmFsbGF4LWJveCcpO1xyXG4gXHJcbmZ1bmN0aW9uIGFkZENsYXNzVG9nZ2xlclNjZW5lIChlbCwgY29udHJvbGxlcikge1xyXG4gIG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XHJcbiAgICB0cmlnZ2VyRWxlbWVudDogZWwsXHJcbiAgICB0cmlnZ2VySG9vazogMC43XHJcbiAgfSlcclxuICAuc2V0Q2xhc3NUb2dnbGUoZWwsICdhbmltYXRlJylcclxuICAuYWRkVG8oY29udHJvbGxlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsYXNzVG9nZ2xlckNvbnRyb2xsZXIgKGFuaW1hdGlvbkJsb2Nrcykge1xyXG4gIGxldCBjb250cm9sbGVyID0gbmV3IFNjcm9sbE1hZ2ljLkNvbnRyb2xsZXIoKTtcclxuICBhbmltYXRpb25CbG9ja3MuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgbGV0IGFEZWxheSA9IDA7XHJcbiAgICBpZiAoJCh0aGlzKS5hdHRyKCdkYXRhLWEtZGVsYXknKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIGFEZWxheSA9IE51bWJlcigkKHRoaXMpLmF0dHIoJ2RhdGEtYS1kZWxheScpKSAqIDEwMDA7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KGFkZENsYXNzVG9nZ2xlclNjZW5lLCBhRGVsYXksIHRoaXMsIGNvbnRyb2xsZXIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGcm9tUG9zaXRpb24gKGVsLCBkZWZhdWx0UG9zaXRpb24gPSAwKXtcclxuICByZXR1cm4gKGVsLmF0dHIoJ2RhdGEtcGFyYWxsYXgtZnJvbScpICE9PSB1bmRlZmluZWQpID8gTnVtYmVyKGVsLmF0dHIoJ2RhdGEtcGFyYWxsYXgtZnJvbScpKSA6IGRlZmF1bHRQb3NpdGlvbjtcclxufVxyXG5mdW5jdGlvbiBnZXRUb1Bvc2l0aW9uIChlbCwgZGVmYXVsdFBvc2l0aW9uID0gMCl7XHJcbiAgcmV0dXJuIChlbC5hdHRyKCdkYXRhLXBhcmFsbGF4LXRvJykgIT09IHVuZGVmaW5lZCkgPyBOdW1iZXIoZWwuYXR0cignZGF0YS1wYXJhbGxheC10bycpKSA6IGRlZmF1bHRQb3NpdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UGFyYWxsYXhUaW1lbGluZSAoZWwpIHtcclxuICBsZXQgdHdlZW4gPSBuZXcgVGltZWxpbmVNYXgoKTtcclxuICBsZXQgdHdlZW5zQXJyID0gW107XHJcbiAgaWYgKCQoZWwpLmZpbmQoJy5hLXBhcmFsbGF4LWJhY2snKSkge1xyXG4gICAgbGV0IHRhcmdldEVsID0gJChlbCkuZmluZCgnLmEtcGFyYWxsYXgtYmFjaycpO1xyXG4gICAgbGV0IGZyb21Qb3MgPSBnZXRGcm9tUG9zaXRpb24odGFyZ2V0RWwsIC0yMCk7XHJcbiAgICBsZXQgdG9Qb3MgPSBnZXRUb1Bvc2l0aW9uKHRhcmdldEVsKTtcclxuICAgIHR3ZWVuc0Fyci5wdXNoKFR3ZWVuTWF4LmZyb21Ubyh0YXJnZXRFbCwgMSwge3lQZXJjZW50OiBmcm9tUG9zfSwge3lQZXJjZW50OiB0b1BvcywgZWFzZTogTGluZWFyLmVhc2VOb25lfSkpO1xyXG4gIH1cclxuICBpZiAoJChlbCkuZmluZCgnLmEtcGFyYWxsYXgtbWlkZGxlJykpIHtcclxuICAgIGxldCB0YXJnZXRFbCA9ICQoZWwpLmZpbmQoJy5hLXBhcmFsbGF4LW1pZGRsZScpO1xyXG4gICAgbGV0IGZyb21Qb3MgPSBnZXRGcm9tUG9zaXRpb24odGFyZ2V0RWwsIC0xNSk7XHJcbiAgICBsZXQgdG9Qb3MgPSBnZXRUb1Bvc2l0aW9uKHRhcmdldEVsKTtcclxuICAgIHR3ZWVuc0Fyci5wdXNoKFR3ZWVuTWF4LmZyb21Ubyh0YXJnZXRFbCwgMSwge3lQZXJjZW50OiBmcm9tUG9zfSwge3lQZXJjZW50OiB0b1BvcywgZWFzZTogTGluZWFyLmVhc2VOb25lfSkpO1xyXG4gIH1cclxuICBpZiAoJChlbCkuZmluZCgnLmEtcGFyYWxsYXgtZnJvbnQnKSkge1xyXG4gICAgbGV0IHRhcmdldEVsID0gJChlbCkuZmluZCgnLmEtcGFyYWxsYXgtZnJvbnQnKTtcclxuICAgIGxldCBmcm9tUG9zID0gZ2V0RnJvbVBvc2l0aW9uKHRhcmdldEVsLCAtMTApO1xyXG4gICAgbGV0IHRvUG9zID0gZ2V0VG9Qb3NpdGlvbih0YXJnZXRFbCwgMTApO1xyXG4gICAgdHdlZW5zQXJyLnB1c2goVHdlZW5NYXguZnJvbVRvKHRhcmdldEVsLCAxLCB7eVBlcmNlbnQ6IGZyb21Qb3N9LCB7eVBlcmNlbnQ6IHRvUG9zLCBlYXNlOiBMaW5lYXIuZWFzZU5vbmV9KSk7XHJcbiAgfVxyXG4gIHR3ZWVuLmFkZCh0d2VlbnNBcnIpO1xyXG4gIHJldHVybiB0d2VlbjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUGFyYWxsYXhTY2VuZSAoZWwsIHR3ZWVuLCBjb250cm9sbGVyKSB7XHJcbiAgbmV3IFNjcm9sbE1hZ2ljLlNjZW5lKHtcclxuICAgIHRyaWdnZXJFbGVtZW50OiBlbCxcclxuICAgIGR1cmF0aW9uOiAkKGVsKS5oZWlnaHQoKVxyXG4gIH0pXHJcbiAgLnNldFR3ZWVuKHR3ZWVuKVxyXG4gIC5hZGRUbyhjb250cm9sbGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUGFyYWxsYXhDb250cm9sbGVyIChhbmltYXRpb25CbG9ja3MpIHtcclxuICBsZXQgY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XHJcbiAgYW5pbWF0aW9uQmxvY2tzLmVhY2goZnVuY3Rpb24oKXtcclxuICAgIGxldCB0d2VlbiA9IGdldFBhcmFsbGF4VGltZWxpbmUodGhpcyk7XHJcbiAgICBhZGRQYXJhbGxheFNjZW5lKHRoaXMsIHR3ZWVuLCBjb250cm9sbGVyKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgaWYgKHNjcm9sbEFuaW1hdGlvbkJsb2Nrcy5sZW5ndGggPiAwICYmICQod2luZG93KS53aWR0aCgpID4gMTAyNCl7XHJcbiAgICAkKCdodG1sJykuYWRkQ2xhc3MoJ2lzLWFuaW1hdGluZycpO1xyXG4gICAgYWRkQ2xhc3NUb2dnbGVyQ29udHJvbGxlcihzY3JvbGxBbmltYXRpb25CbG9ja3MpO1xyXG4gIH1cclxuICBpZiAocGFyYWxsYXhCbG9ja3MubGVuZ3RoID4gMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDEwMjQpe1xyXG4gICAgJCgnaHRtbCcpLmFkZENsYXNzKCdpcy1hbmltYXRpbmcnKTtcclxuICAgIGFkZFBhcmFsbGF4Q29udHJvbGxlcihwYXJhbGxheEJsb2Nrcyk7XHJcbiAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtpbml0fTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvYW5pbWF0aW9uLmpzIiwiLyoqXHJcbiAqINCi0LXRgdGCXHJcbiAqIEBtb2R1bGUgVGVzdFxyXG4gKi9cclxuXHJcbmxldCBzdW0gPSAwO1xyXG5sZXQgY2Fyb3VzZWwgPSAkKFwiLm93bC1jYXJvdXNlbC5jYXJvdXNlbC0tdGVzdFwiKTtcclxubGV0IHRlc3RDdHJsID0gJCgnLnRlc3QtY3RybCcpO1xyXG5sZXQgdGVzdFJlc2V0ID0gJCgnLmpzLXRlc3QtcmVzZXQnKTtcclxubGV0IHJlc3VsdE1vZGFsID0gJCgnI3Rlc3QtcmVzdWx0Jyk7XHJcblxyXG5mdW5jdGlvbiBpc0xhc3RTbGlkZSgpIHtcclxuICByZXR1cm4gY2Fyb3VzZWwuZmluZCgnLm93bC1pdGVtJykuZmlsdGVyKCc6bGFzdCcpLmhhc0NsYXNzKCdhY3RpdmUnKTtcclxufVxyXG5mdW5jdGlvbiBnZXRNb2RhbChhbnN3ZXIpIHtcclxuICByZXR1cm4gYW5zd2VyID8gJCgnI3Rlc3QtY29ycmVjdCcpIDogJCgnI3Rlc3QtaW5jb3JyZWN0Jyk7XHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyZVJlc3VsdE1vZGFsKHN1bSwgdG90YWwpIHtcclxuICByZXN1bHRNb2RhbC5maW5kKCcjc3VtJykudGV4dChzdW0pO1xyXG4gIHJlc3VsdE1vZGFsLmZpbmQoJyN0b3RhbCcpLnRleHQodG90YWwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvcnJlY3QoZWwpIHtcclxuICBsZXQgYW5zd2VyID0gcGFyc2VJbnQoJChlbCkuY2xvc2VzdCgnLnRlc3QnKS5hdHRyKCdkYXRhLXZhbHVlJykpO1xyXG4gIGxldCB2YWx1ZSA9IHBhcnNlSW50KCQoZWwpLmF0dHIoJ3ZhbHVlJykpO1xyXG4gIHJldHVybiBhbnN3ZXIgPT09IHZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIHByb2Nlc3NUZXN0KGVsLCBpc0xhc3RTbGlkZSA9IGZhbHNlKSB7XHJcbiAgbGV0IGFuc3dlciA9IGlzQ29ycmVjdChlbCk7XHJcbiAgaWYgKGFuc3dlcikge1xyXG4gICAgc3VtICs9IDE7XHJcbiAgfVxyXG4gIGxldCBtb2RhbCA9IGdldE1vZGFsKGFuc3dlcik7XHJcbiAgTWFpbi5Nb2RhbC5vcGVuTW9kYWwobW9kYWwsIHRydWUpO1xyXG4gIGlmICghaXNMYXN0U2xpZGUpIHtcclxuICAgIHNob3dOZXh0KGVsKTtcclxuICB9XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgTWFpbi5Nb2RhbC5jbG9zZU1vZGFsKG1vZGFsLCBpc0xhc3RTbGlkZSk7XHJcbiAgfSwgNjAwLCBtb2RhbCwgaXNMYXN0U2xpZGUpO1xyXG4gIGlmIChpc0xhc3RTbGlkZSkge1xyXG4gICAgc2hvd1Jlc3VsdCgpO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBzaG93TmV4dChlbCkge1xyXG4gIGNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XHJcbn1cclxuZnVuY3Rpb24gc2hvd1Jlc3VsdCgpIHtcclxuICBsZXQgdG90YWwgPSBjYXJvdXNlbC5maW5kKCcub3dsLWl0ZW0nKS5sZW5ndGg7XHJcbiAgcHJlcGFyZVJlc3VsdE1vZGFsKHN1bSwgdG90YWwpO1xyXG4gIE1haW4uTW9kYWwub3Blbk1vZGFsKHJlc3VsdE1vZGFsLCB0cnVlKTtcclxufVxyXG5mdW5jdGlvbiByZXNldFRlc3QoKSB7XHJcbiAgc3VtID0gMDtcclxuICB0ZXN0Q3RybC5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgfSk7XHJcbiAgY2Fyb3VzZWwudHJpZ2dlcigndG8ub3dsLmNhcm91c2VsJywgMCk7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgTWFpbi5Nb2RhbC5jbG9zZU1vZGFsKHJlc3VsdE1vZGFsKTtcclxuICB9LCAzMDAsIHJlc3VsdE1vZGFsKTtcclxufVxyXG5cclxuLyoqXHJcbiAqINCY0L3QuNGG0LjQsNC70LjQt9Cw0YbQuNGPINC60LDRgNGD0YHQtdC70LhcclxuICovXHJcbmZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xyXG4gICAgaXRlbXM6IDEsXHJcbiAgICBuYXY6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBsYXp5TG9hZDogdHJ1ZSxcclxuICAgIG1vdXNlRHJhZzogZmFsc2UsXHJcbiAgICB0b3VjaERyYWc6IGZhbHNlLFxyXG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxyXG4gICAgYXV0b0hlaWdodDp0cnVlXHJcbiAgfSk7XHJcbiAgXHJcbiAgdGVzdEN0cmwub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgcHJvY2Vzc1Rlc3QodGhpcywgaXNMYXN0U2xpZGUoKSk7XHJcbiAgfSk7XHJcbiAgdGVzdFJlc2V0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgcmVzZXRUZXN0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge2luaXR9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy90ZXN0LmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBOzs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDeEJBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqREE7Ozs7O0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUNBOzs7Ozs7Ozs7QUNwQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ25DQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN2RkE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=