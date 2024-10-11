'use strict'
alert ('Я JavaScript')

let name = prompt('Введите имя', 'Без имени')
let surename = prompt('Введите фамилию', 'Без имени')
let patronymic = prompt('Введите отчество', 'Без имени')
 
let isTrue = confirm(`Верны ли данные ${name} ${surename} ${patronymic}?`);

alert(isTrue)