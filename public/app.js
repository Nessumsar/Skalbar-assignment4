const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', e =>{
    e.preventDefault();
    const credentials = {
        username : username.value,
        password : password.value
    }
    
    fetch('/secure/login', {
        method:'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(response => {
        if (response.status === 'success') {
            localStorage.setItem('token', response.token);   
            location.href = response.redirect;         
        }else{
            alert('Incorrect username and/or password.')
        }
    })

});