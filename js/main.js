let mail = document.querySelector('#mail')
let password = document.querySelector('#password')
let tex1 = document.querySelector('#tex1')
let tex2 = document.querySelector('#tex2')
let button = document.querySelector('#button')
let glav = document.querySelector('#glav')
let login
let porol


mail.addEventListener('input', function () {
    login = mail.value
})
password.addEventListener('input', function () {
    porol = password.value
})
button.addEventListener('click', function () {
    for (let i = 0; i < log.length; i++) {
        if (login === log[i][0] && Number(porol) === log[i][1]) {

            window.location.href = '../html/home.html'
            break
        } else {
            tex1.innerText = ''
            tex2.innerText = 'Не верный пороль или логин'
        }
    }

})


let log = [
    ['Aktan', 1234],
    ['Erlan', 12345],
    ['Akysh', 123456],
    ['Alma', 1234567],
    ['Islam', 12345678]
]
