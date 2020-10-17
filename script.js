// console.log('step1')
// alert ('step2')
// console.log('step3')

const button = document.querySelector('#click')
const userName = document.querySelector('input') //$(selector)
let inputValue = document.querySelector('#input-value')
const inputs =  document.querySelectorAll('input') //$(selector)

// button.onclick = function () {
//     console.log('Click')
// }


button.addEventListener('click', function (event) {
    inputValue.innerText = userName.value

    console.log (event)

})

const inputListener = function (event) {
    const input = event.target
    inputValue.innerText = input.value
}

for (const input of inputs) {

    //console.log(input)
    input.addEventListener('input', inputListener) 
}

//userName.addEventListener('input', inputListener)

