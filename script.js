// tpSFqiCtPEJPqDxyOvQ3

const forum = document.querySelector('#forum')
const alertMsg = document.querySelector('.alert')

const getMessagesBtn = document.getElementById('get-chat-messages')

fetch('http://user08.test1.seschool.ru:3000/api/chat/').then((response)=> {
    if (response.ok) {
            return response.json()
        }
}).then((messages) => {
    let resaltHtml = ''
                messages.forEach(message => {
                resaltHtml += `<li class="list-group-item">${message.username}: ${message.message}
                </li>`
        });
        forum.innerHTML = resaltHtml
})
const evtSource = new EventSource("http://user08.test1.seschool.ru:3000/api/chat/subscribe");
evtSource.onmessage = function (event) {
    const newElement = document.createElement("li");
    newElement.classList.add("list-group-item")
    const data = JSON.parse(event.data)
    newElement.innerHTML = `${data.username}: ${data.message}`
    forum.insertBefore(newElement, forum.firstElementChild);
}


const postMessagesBtn = document.getElementById('post-chat-message')
const userForm = document.querySelector("#user_form")
// postMessagesBtn.addEventListener('click', () => {
const postMessage = () => {
    const username = userForm[0].value //получили значение инпута
    const email = userForm[1].value
    const message = userForm[2].value
    fetch('http://user08.test1.seschool.ru:3000/api/chat/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer TOKEN'
        },
        body: JSON.stringify({            
                username,
                email,
                message: message            
        })
    }).then(response => {  
        if(response.ok){
            return response.json()
        }   else {
            throw new Error(`Status: ${response.status}. Message: ${response.statusText}`)
        }   
                        
    }).then(response => {
        alertMsg.classList.remove('show')
        alertMsg.textContent = ''
        console.log(response)
    }).catch(err => {
        console.error(err)
        alertMsg.classList.add('show')
        alertMsg.textContent = err
    })
}


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
    postMessage ();

    // alertMsg.innerHTML = ''
    // //alertMsg.style.display = 'none'
    // alertMsg.classList.remove('show')

    // const userMessage = {
    //     userName: formData.get('user_name'),
    //     userEmail: formData.get('user_email'),
    //     userMessage: formData.get('user_message')
    // }
   
    // userForm[0].value = ''
    // userForm[1].value = ''
    // userForm[2].value = ''
    
    
    // forum.insertAdjacentHTML("afterbegin", `<li class="list-group-item">         
    //         <span>${userMessage.userName}: </span>
    //          <span>${userMessage.userMessage} </span>         
    //  </li>`)
    
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

