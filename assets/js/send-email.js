<<<<<<< HEAD
const user_name = document.getElementById('user_name');
const user_email = document.getElementById('user_email');
const message = document.getElementById('message');


/*=============== CLEAR INPUTS  ===============*/

function clearInput(){
    user_name.value = '';
    user_email.value = '';
    message.value = '';
}

/*=============== INPUT VALIDATION===============*/
function checkInput(){
    if (user_name.value|| user_email.value || message.value === '') {
        sendAlert('Please fill all inputs ')
    }
}

/*=============== ALERT AFTER SEND SUBMIT===============*/
function sendAlert(message){
    const parentDiv = document.getElementById('contact__container')
    const newDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML = message;
    newDiv.classList.add('alert__div');
    h2.classList.add('alert__h2');
    newDiv.appendChild(h2);
    parentDiv.appendChild(newDiv);

}

/*=============== SEND EMAIL  ===============*/

function sendMail(){
    let params = {
        user_name: user_name.value,
        user_email: user_email.value,
        message: message.value
    }
    
    emailjs.send('service_ga99ezj','template_wd6raas', params).then(
        function (res){
            console.log(res);
            clearInput();

        }
    )
}

=======
const user_name = document.getElementById('user_name');
const user_email = document.getElementById('user_email');
const message = document.getElementById('message');


/*=============== CLEAR INPUTS  ===============*/

function clearInput(){
    user_name.value = '';
    user_email.value = '';
    message.value = '';
}

/*=============== INPUT VALIDATION===============*/
function checkInput(){
    if (user_name.value|| user_email.value || message.value === '') {
        sendAlert('Please fill all inputs ')
    }
}

/*=============== ALERT AFTER SEND SUBMIT===============*/
function sendAlert(message){
    const parentDiv = document.getElementById('contact__container')
    const newDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerHTML = message;
    newDiv.classList.add('alert__div');
    h2.classList.add('alert__h2');
    newDiv.appendChild(h2);
    parentDiv.appendChild(newDiv);

}

/*=============== SEND EMAIL  ===============*/

function sendMail(){
    let params = {
        user_name: user_name.value,
        user_email: user_email.value,
        message: message.value
    }
    
    emailjs.send('service_ga99ezj','template_wd6raas', params).then(
        function (res){
            console.log(res);
            clearInput();

        }
    )
}

>>>>>>> 585f5cea9afb141e38541cbc147291348de658e1
