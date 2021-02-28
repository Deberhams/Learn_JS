// Тема урока: addEventListener, this, style, 

//-----------------------------------------------------------------------
// let h1 = document.querySelector('h1');
// let button = document.querySelector('button');
// let input = document.querySelector('input');

//-----------------------------------------------------------------------

// Функция изменяет Заголовок на текст введенный внутри поля для ввода
// function changeText() { //Функция изменения Заголовка
//     console.log('clicked') //Выводит количество раз нажатых на кнопку
//     h1.textContent = input.value // Изменяет Заголовок на текст введенный внутри поля для ввода
// }
// button.addEventListener('click', changeText);
// // Обейзательно вызывать функцию по ссылке т.е без ()
// // Данный код говорит что при поисхождении события запускай функцию

//-----------------------------------------------------------------------

// Функция меняет цвет Заголовка при наведений
// h1.addEventListener('mouseenter', function(){ //Без именная функция для h1
//     this.style.color = 'purple' // При наведении меняет цвет
//     this.style.backgroundColor = 'yellow' //При наведении меняет фон
// })


// Функция меняет цвет Заголовка после отведения курсора
// h1.addEventListener('mouseleave', function(){
//     console.log('Mouse left h1') //При отведении от h1 выводит в консоль
//     this.style.color = 'black' //Меняет цвет текста на черный при отведении
//     this.style.backgroundColor = 'transparent' // Менят фон на прозрачный
// })

//-----------------------------------------------------------------------

// Решение задач
// let button = document.querySelector('button')
// let h1 = document.querySelector('h1')

// Задача 1. Скрыть Заголовок после нажатия на кнопку
// button.addEventListener('click', function(){
//     h1.style.color = 'transparent'
// })

// Задача 2. Скрыть кнопку после нажатия на неё
// button.addEventListener('click', function(){
//     this.hidden = true
// })

//----------------------------------------------------------------
