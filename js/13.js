"use strict";

// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "");
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько Вам лет?", "");

// document.write(answers);

// alert("Hello World!");

// const result = confirm("Are you here?"); 
// console.log(result);

// const answer = +prompt("Вам есть 18?", "");
// console.log(typeof(answer));

const answers = [];
answers[0] = prompt("Введите имя:", '');
answers[1] = prompt("Введите фамилию:", '');
answers[2] = +prompt("Введите возраст: ", '');

document.write(answers);