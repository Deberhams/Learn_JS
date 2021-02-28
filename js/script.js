let h1 = document.querySelector('h1');
let button = document.querySelector('button');
let input = document.querySelector('input');

function changeText() { //Функция изменения Заголовка
    console.log('clicked') //Выводит количество раз нажатых на кнопку
    h1.textContent = input.value // Изменяет Заголовок на текст введенный внутри поля для ввода
}

h1.addEventListener('mouseenter', function(){ //Без именная функция для h1
    this.style.color = 'purple' // При наведении меняет цвет
    this.style.backgroundColor = 'yellow' //При наведении меняет фон
})

h1.addEventListener('mouseleave', function(){
    console.log('Mouse left h1') //При отведении от h1 выводит в консоль
    this.style.color = 'black' //Меняет цвет текста на черный при отведении
    this.style.backgroundColor = 'transparent' // Менят фон на прозрачный
})

button.addEventListener('click', changeText);
// Обейзательно вызывать функцию по ссылке т.е без ()
// Данный код говорит что при поисхождении события запускай функцию
