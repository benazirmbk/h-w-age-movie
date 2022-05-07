// console log
// console.log('hello world')
// console.log(5 + 5)

// Переменные
// var name = 'Benazir'

// let age = 32
// const name ="ogogo"
// console.log();
// типы данных
// 1. number
// let number=2
// // 2. String
// // конкотенация -работает только со строками number+string, string+string
// let str = "hello world"
// // 3. boolean
// let tr= true
// let fl=false
// 4.Null спец пустота

// let name=null
// console.log(name)
// 5. Underfined не спец пустота

// 6.Object
// let user = {
// 	name: 'benazir',
// 	lastName: 'madieva',
// 	age: 32,
// 	email: 'kamillosan89@gmail.com',
// 	position: 'Frontend student',
// 	avatar:
// 		'https://images.unsplash.com/photo-1638913662380-9799def8ffb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
// 	hobby: true,
// }
// // переназнчение ключа
// user.lastName = 'qwerty'
// // добавление новых ключей
// user.car = 'mazda'
// // удаление ключей из обьекта
// delete user.name
// // 7. Array
// let array = ['benazir', 32, true, { car: 'bmw' }, user]
// console.log(user)
// console.log(array[4].position)

// шаблонные строки

// let name = 'benazir'
// let age = 32
// диалоговое окно
// alert(`имя$ [name], возраст: $[age]`)

// задача
// let one = prompt('Введите число')
// let two = prompt('Введите число')
// console.log(one, two)

// Присвоение переменной
// let apple = 120 * 1.5
// let bread = 35
// let carrot = 17 * 2.8
// let crisps = 78 * 3
// let smoke = 168 * 20
// let total = apple + bread + carrot + crisps + smoke
// let average = total / 5
// let uselessProducts = crisps + smoke

// alert(`
// Сумма покупок:${total / 2}
// Сред.сумма: ${average}
// Вредные продукты: ${uselessProducts}
// `)

// Примитивы:
// String,number, Boolean, null, underfind, bigint,symbol

// Ссылочные
// OBJ+Array=link

// let a = 5
// let b = a
// console.log(a)
// console.log(b)

// let product = {
// 	type: 'car',
// 	name: 'bmw',
// 	color: 'black',
// 	ye: 2020,
// }
// let obj2 = product
// console.log(product)
// console.log(obj2)

// Условные операторы
// if(5>2){
// 	console.log("Верно");
// }else{
// 	console.log("Ложь");
// }
// if (5 + 2 === 8) {
// 	console.log('это число 7')
// } else if (5 + 2 === 7) {
// 	console.log('Сработал блок 2')
// } else if (10 - 5 === 4) {
// 	console.log('Сработал блок 3')
// } else {
// 	console.log('Ошибка')
// }

// let userAge= +prompt ("Введите ваш возраст");
// if (userAge 1>&& userAge <=13){
// alert ("посмотрите мультфильм ""Душа")

let userAge = +prompt('Введите ваш возраст')
if (userAge > 1 && userAge <= 13) {
	alert('Предлагаем посмотреть мульфильмы "Душа","Тайна Коко')
} else if (userAge > 14 && userAge <= 17) {
	alert('Предлагаем посмотреть фильм "Мстители"')
} else if (userAge > 18 && userAge <= 100) {
	alert('Предлагаем посмотреть "Законопослушный гражданин"')
} else if (userAge === 0) {
	alert('Вы ввели неверный возарст')
} else if ((userAge = 'abcdefghijklmnopqrstuvwxyz')) {
	alert(' Вы неверно ввели возраст')
} else if (userAge < 100) {
	alert('Вы ввели неверный возарст')
}
