const input = document.querySelector('.login__input')
const button = document.querySelector('.login__button')
const form = document.querySelector('.login-form')

const validateInput = ({ target }) =>{ // FUNÇÃO PARA HABILITAR E DESABILITAR O BUTTÃO
    if(target.value.length > 2) {
        button.removeAttribute('disabled') // PARA ATIVAR O BUTTON
    }else{
        button.setAttribute('disabled', '')// PARA DESATIVAR O BUTTON
    }
}


const handleSubmit = (event) =>{
    event.preventDefault();
    

    localStorage.setItem('player', input.value)
    window.location = 'pages/game.html'
}



input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)

