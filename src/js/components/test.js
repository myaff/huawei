/**
 * Тест
 * @module Test
 */

let sum = 0;
let carousel = $(".owl-carousel.carousel--test");
let testCtrl = $('.test-ctrl');
let testReset = $('.js-test-reset');
let resultModal = $('#test-result');

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
  let answer = parseInt($(el).closest('.test').attr('data-value'));
  let value = parseInt($(el).attr('value'));
  return answer === value;
}
function processTest(el, isLastSlide = false) {
  let answer = isCorrect(el);
  if (answer) {
    sum += 1;
  }
  let modal = getModal(answer);
  Main.Modal.openModal(modal, true);
  if (!isLastSlide) {
    showNext(el);
  }
  setTimeout(function(){
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
  let total = carousel.find('.owl-item').length;
  prepareResultModal(sum, total);
  Main.Modal.openModal(resultModal, true);
}
function resetTest() {
  sum = 0;
  testCtrl.each(function(){
    $(this).prop('checked', false);
  });
  carousel.trigger('to.owl.carousel', 0);
  setTimeout(function(){
    Main.Modal.closeModal(resultModal);
  }, 300, resultModal);
}

/**
 * Инициализация карусели
 */
function init(){

  carousel.owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    lazyLoad: true,
    mouseDrag: false,
    touchDrag: false,
    animateOut: 'fadeOut',
    autoHeight:true
  });
  
  testCtrl.on('click', function() {
    processTest(this, isLastSlide());
  });
  testReset.on('click', function() {
    resetTest();
  });
}

module.exports = {init};