const userForm = document.querySelector("#user_form")

const forum = document.querySelector('#forum')
const alertMsg = document.querySelector('.alert')

console.log(userForm)
console.dir(userForm)

userForm.addEventListener('submit', function(event) {
    console.log(event)
    event.preventDefault()
    const formData = new FormData(userForm)

    if (!(userForm[0].value && userForm[1].value && userForm[2].value)) {
        const errorMsg = (userForm[0].value ? '' : 'Введите имя<br>') + 
            (userForm[1].value ? '' : 'Введите email<br>') +
            (userForm[2].value ? '' : 'Введите сообщение<br>')       
       alertMsg.innerHTML = errorMsg
      // alertMsg.style.display = 'block'
      alertMsg.classList.add('show')
        return
    }

    alertMsg.innerHTML = ''
    //alertMsg.style.display = 'none'
    alertMsg.classList.remove('show')

    const userMessage = {
        userName: formData.get('user_name'),
        userEmail: formData.get('user_email'),
        userMessage: formData.get('user_message')
    }
   
    userForm[0].value = ''
    userForm[1].value = ''
    userForm[2].value = ''
    
    
    forum.insertAdjacentHTML("afterbegin", `<li class="list-group-item">         
            <span>${userMessage.userName}: </span>
             <span>${userMessage.userMessage} </span>         
     </li>`)
    
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

