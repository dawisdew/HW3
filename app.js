function checkAge(age){
    (age > 18) ? console.log('Проходи') : confirm('Родители разрешили?')
}
checkAge(19)
checkAge()
// // 1.2
let result;

a = 1;
b = 2;
result = (a + b < 4) ? 'Мало' : 'Много';
alert(result)
//
// // 1.3
const login = prompt("Who are you?");
let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' :
            '';
alert(login)

let a = 1
let ggg = function (a){
    if (a > 0){
        console.log(1)
    }else {
        console.log(2)
    }
}
ggg(a)
// 2.2 & 2.3
const elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];
const checkLenght = (item) => {
    return console.log(item.length)
}
checkLenght(elements)


