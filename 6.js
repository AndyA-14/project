//?Створення масиву
const arr1 = [1,2,3,4,7,8,0,5]
console.log(arr1.length)
arr1[arr1.length] = 6
console.log(arr1)
arr1[6] = 9
console.log(arr1)

//?Задавання значень масиву
//?Визначення елемента масиву по індексу
const arr2 = [1,2,3,4,[5,6,7,[9,0]]]
console.log(arr2[4][1])
console.log(arr2[4][3][0])
console.log(arr2[1])
console.log(arr2[4][2])
console.log(arr2[4][3][1])
//?Зміна значень елементу в масиві
//?Додавання в кінець елементу
const arr3 = [...arr1,...arr2]
console.log(arr3)


//?Обєднання декількох масивів



//!Методи обходу масивів  - прототипи - функції
//?forEach(): Виконує задану функцію один раз для кожного елемента масиву.
let v = arr1.forEach(element=>element)
console.log(v)

//?map(): Створює новий масив, який містить результат виклику заданої функції для кожного елемента масиву.
//*Оновлює дані масиву
v = arr1.map(element=>element)
console.log(v)

//?filter(): Створює новий масив, який містить елементи, для яких задана функція повертає true.
v=v.filter(item=>item%2==0)
console.log(v)

//?find(): Повертає перший елемент масиву, для якого задана функція повертає true.
v.find((element,index)=>element==8 && console.log(element, index))

//?reduce(): Застосовує задану функцію до кожного елемента масиву, редагуючи її до одного значення.
//* Тяжке для розуміння, перша змінна використовується для підрахунку, друга це елемент масиву
let s = v.reduce((element, res)=>res+=element)
console.log(s)

//?sort(), але можна також реалізувати інші алгоритми сортування вручну. 
//?Метод sort() сортує елементи масиву і змінює сам масив.
console.log(arr1)
arr1[0]=11
arr1.sort((a,b)=>a-b)
console.log(arr1)
arr1.sort((a,b)=>b-a)
console.log(arr1)

//Напишіть функцію, яка виводить на консоль кожен елемент масиву.
const arr4 = [1, 2, 3, 4, 5]
let z =arr4
z.forEach(element=>console.log(element))

//Реалізуйте функцію, яка множить кожен елемент масиву на певне число та повертає новий масив.
//z =z.map(element=>element*3)
//console.log(z)

//Створіть функцію, яка фільтрує масив, залишаючи тільки парні числа.
//z=z.filter(element=>element%2==0)
//console.log(z)

//Напишіть функцію, яка знаходить перший додатний елемент у масиві.
z.find((element)=>element>0 && (console.log(element), true))

//Створіть функцію, яка знаходить суму всіх елементів у масиві.
let h = z.reduce((element, res)=>res+=element)
console.log(h)