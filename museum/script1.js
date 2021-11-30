document.querySelector('.tickets__buy-now').addEventListener('click', function(){
    document.querySelector('.tickets__buy-form').classList.toggle("animate");
})

document.querySelector('.tickets__payment-exit').addEventListener('click', function(){
    document.querySelector('.tickets__buy-form').classList.toggle("animate");
})

const progress = document.querySelector('.video__progress');
  
progress.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

const progressVolume = document.querySelector('.volume__progress');

progressVolume.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%)`
})

// let buyForm = document.querySelector('.tickets__buy-form');

// window.onclick = function(e) {
//   if (e.target == buyForm) {
//     buyForm.style.left='-2000';
//   }
// }
console.log("Оценка - 150 баллов")
console.log('Отзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1. кнопке "Book" в форме покупки билетов добавлен ripple-эффект.\n')
console.log('Частично выполненные пункты:\n1. форма плавно выдвигается слева при открытии и плавно возвращается назад при закрытии. В открытом состоянии под формой есть полупрозрачный overlay, который занимает весь экран. Форма и overlay прокручиваются вместе со страницей\n2. форма открывается при клике по кнопке Buy Now в секции Tickets и закрывается кликом по иконке с крестиком в верхнем правом углу или кликом по overlay\n3. вёрстка формы соответствует макету\n' )

console.log('Все остальные пункты я считаю полностью выполненными\nСвязь Discord: D.Na#1622')

