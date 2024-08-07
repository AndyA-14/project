console.clear();
//!Змінна та константа
let a = 5
console.log(typeof(a),a)
a = 6
console.log(a)
const a1 = 7
console.log(typeof(a1),a1)
//a1 = 6
//console.log(a1)

//! Типи даних
//? undefind,null,number, string, arr
a = '5'
console.log(typeof(a),a+a)
a = [11,42,33,44,55]
console.log(typeof(a),a,a[4])
let b 
console.log(b)
//! Арифметичні операції
//? + - / % ** * ++ --
a = 6
console.log(a+2)
console.log(a-2)
console.log(a*2)
console.log(a**2)
console.log(a/2)
console.log(a%5)
a--
console.log(a)
a++
console.log(a)


//* Визнач скільки буде 2 в 5 степені та 2 в 15 степені
a = 2
console.log(a**5)
console.log(a**15)


//* Обрахуй значення рівняння x^2+2xy+y^2
let x = 4, y = 7
console.log(x**2+2*x*y+y**2)


//* Напишіть програму, яка перевіряє, чи число парне чи непарне.
//a = 5
//console.log( a % 2 == 0)
//a % 2 == 0 && console.log("Парне число")
//if(a % 2 == 0){
//    console.log("Парне число")
//}else{
//    console.log("Непарне число")
//}
//a % 2 == 0?console.log("Парне число") : console.log("Непарне число")


//* Створіть програму, яка визначає, чи є введене число додатним, від'ємним чи нулем.
a = 3
if(a>0){
    console.log("Число додатне")
}else if (a<0){
    console.log("Число від'ємне")
}else{
    console.log("Число є нулем")
}


//* Напишіть програму, яка обчислює площу прямокутника за його довжиною і шириною.
a = 4
b = 7
console.log('Площа прямокутника:'+ a*b)


//* Створіть програму, яка перевіряє, чи є введене число кратним 3 або 5.
z = 10
if (z%3==0 && z%5==0){
    console.log("Число кратне 3 і 5")
}else if(z%3==0){
        console.log("Число кратне 3")
}else if (z%5==0){
    console.log("Число кратне 5")
}else{
    console.log("Число не кратне 3 і 5")
}



////? Alert (Попередження):
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки
//alert("Консоль успішно підключено")
//b = prompt("Введіть ваше ім'я ")
//console.log(b)
//b = ("Чи бажаєте продовжити роботу на сайті?")
//console.log(b)


//let login, password;
//login=prompt('Введіть ваш логін')
//password=prompt('Введіть ваш пароль')
//if (login =='1' && password=='1') {
//    alert('Ви успішно авторизувалися')
//
//}else{
//    window.location= 'https://www.google.com/'
//}