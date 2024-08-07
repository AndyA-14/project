//!В JavaScript об'єкт є колекцією властивостей, де кожна властивість асоціюється з іменем (ключем) та значенням. 
//!Об'єкти дозволяють зберігати і маніпулювати складними даними.

//?Створення об'єкта
//?Об'єкти можуть бути створені різними способами:

//*Літеральний синтаксис
const person = {
    name: "Іван",
    age: 30,
    greet() {
        console.log("Привіт, я " + this.name);
    }
};
person.greet();
//console.log(person.name)
//console.log(person.greet())
//*Конструктор Object:
const person1 = new Object();
person1.name = "Іван";person.age = 30;
person1.greet =()=> {
    console.log("Привіт, я " + person.name);
};

person.greet()




//!Що таке this?
//?Ключове слово this в JavaScript є контекстним посиланням, яке вказує на об'єкт,
//?до якого воно належить в поточному контексті виконання. Значення this змінюється в залежності від контексту виклику функції.

//*В методі об'єкта, this посилається на сам об'єкт.
//const person = {
//    name: "Іван",
//    greet: function() {
//        console.log("Привіт, я " + this.name); // this посилається на об'єкт person
//    }
//};

//person.greet(); // Привіт, я Іван

//*У конструкторі функції, this посилається на новий екземпляр, що створюється.
//function Person(name) {
//    this.name = name;
//}

//const ivan = new Person("Іван");
//console.log(ivan.name); // Іван

//!Висновок
//*Об'єкти в JavaScript є основою для зберігання складних структур даних, що дозволяє зберігати та організовувати дані в ключ-значення парах.
//*Ключове слово this є динамічним посиланням, яке змінюється в залежності від контексту виконання функції.
//*Розуміння контексту this є важливим для правильного використання та маніпулювання об'єктами в JavaScript.



//? Розробіть об'єкт бібліотека з з можливістю отримання підручників та авторів
const textbooks = [
    {
        title: "Математика для початківців",
        author: "Іван Іванов",
        year: 2015,
        publisher: "Видавництво Наука",
        ISBN: "978-5-00100-001-2"
    },
    {
        title: "Основи програмування",
        author: "Анна Петрова",
        year: 2018,
        publisher: "Прогрес",
        ISBN: "978-5-00100-002-9"
    },
    {
        title: "Історія України",
        author: "Олександр Коваленко",
        year: 2020,
        publisher: "Освіта",
        ISBN: "978-5-00100-003-6"
    },
    {
        title: "Українська література",
        author: "Марія Лисенко",
        year: 2017,
        publisher: "Літера",
        ISBN: "978-5-00100-004-3"
    },
    {
        title: "Фізика. Основи",
        author: "Дмитро Шевченко",
        year: 2019,
        publisher: "Техніка",
        ISBN: "978-5-00100-005-0"
    }
];
const objectBook = {
    render(){
        btn:document.getElementById('btn'),
        get.All(){
            textbooks.forEach((item,i)=>
                console.log
            )
        },
        this.btn.getElementById
    }
}
//? Проаналізуйте об'єкт школа. Створіть об'єкт що буде аланізувати його з власними можливостями взаємодії
const school = {
    name: "Школа №1",
    address: "вул. Шевченка, 12, Київ",
    principal: "Олена Кравченко",
    numberOfStudents: 500,
    phone: "+380 44 123 4567",
    email: "info@school1.kiev.ua",
    students: [
        {
            name: "Андрій Сидоренко",
            age: 15,
            grade: 10,
            email: "andriy.s@school1.kiev.ua"
        },
        {
            name: "Марія Ковальчук",
            age: 14,
            grade: 9,
            email: "maria.k@school1.kiev.ua"
        },
        {
            name: "Олександр Петренко",
            age: 17,
            grade: 11,
            email: "olexandr.p@school1.kiev.ua"
        },
        {
            name: "Ірина Лисенко",
            age: 13,
            grade: 8,
            email: "iryna.l@school1.kiev.ua"
        },
        {
            name: "Вікторія Гнатюк",
            age: 16,
            grade: 10,
            email: "viktoria.g@school1.kiev.ua"
        }
    ]
};

