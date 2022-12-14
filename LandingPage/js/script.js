//////* FORMULÁRIO*//////


//* MAPEANDO O FORMULÁRIO*//

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

//* EVENTO DO BOTÃO*//

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

//* VALIDAÇÃO DOS CAMPOS*//

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

  if (usernameValue == "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue == "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue == "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue == "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue != passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }
}

//* ALTERAÇÃO DO NOME DA CLASSE*//

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}


//* VALIDAÇÃO DO EMAIL*//

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}



//////* CEP*///////

async function getCep(){

  try{

    let response = await fetch('https://viacep.com.br/ws/18030070/json/');
    let data = await response.json()
    document.getElementById("rua").innerHTML = data.logradouro
    document.getElementById("bairro").innerHTML = data.bairro
    document.getElementById("cidade").innerHTML = data.localidade
    document.getElementById("estado").innerHTML = data.uf
    

  } catch (error) {
    throw new Error('Erro ao buscar o endereço')
        
  }

}

getCep()