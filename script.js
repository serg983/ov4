const userForm = document.querySelector("#user_form")

const forum = document.querySelector('#forum')

console.log(userForm)
console.dir(userForm)

userForm.addEventListener('submit', function(event) {
    console.log(event)
    event.preventDefault()
    const formData = new FormData(userForm)
    const userMessage = {
        userName: formData.get('user_name'),
        userEmail: formData.get('user_email'),
        userMessage: formData.get('user_message')
    }
    // formData.set('user_name','')
    // formData.set('user_email','')
    // formData.set('user_message','')

    userForm[0].value = ''
    userForm[1].value = ''
    userForm[2].value = ''
    
        forum.innerHTML += `<div>
        <span>${userMessage.userName}: </span>
        <span>${userMessage.userMessage} </span>
    </div>`
    
})













// // console.log('step1')
// // alert ('step2')
// // console.log('step3')

// const button = document.querySelector('#click')
// const userName = document.querySelector('input') //$(selector)
// let inputValue = document.querySelector('#input-value')
// const inputs =  document.querySelectorAll('input') //$(selector)

// // button.onclick = function () {
// //     console.log('Click')
// // }


// button.addEventListener('click', function (event) {
//     inputValue.innerText = userName.value

//     console.log (event)

// })

// const inputListener = function (event) {
//     const input = event.target
//     inputValue.innerText = input.value
// }

// for (const input of inputs) {

//     //console.log(input)
//     input.addEventListener('input', inputListener) 
// }

// //userName.addEventListener('input', inputListener)

