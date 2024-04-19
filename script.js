const nome = document.getElementById("nome");
const email = document.getElementById("email");
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");
const enviar = document.getElementById("enviar");
const form = document.querySelector(".formulario");

nome.addEventListener("change", (evento) => 
{
    if (evento.target.value.length < 7 || evento.target.value === "") 
    {
        nome.classList.add("invalido");
        nome.focus();
    }
    else 
    {
        nome.classList.remove("invalido");
    }
})

email.addEventListener("change", (evento) => 
{
    const emailInput = evento.target.value;
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValido.test(emailInput) == false) 
    {
        email.classList.add("invalido");
    }
    else {

        email.classList.remove("invalido");
    }

})

assunto.addEventListener("change", (evento) => 
{
    if (evento.target.value.length < 10 || evento.target.value === "") 
    {
        assunto.classList.add("invalido");
    }
    else {

        assunto.classList.remove("invalido");
    }
})

mensagem.addEventListener("change", (evento) => 
{
    const inputArea = evento.target.value;

    if (inputArea.length < 10) {
        mensagem.classList.add("invalido");
    }
    else 
    {

        mensagem.classList.remove("invalido");
    }
})

enviar.disabled = true;
function validarCampos()
{
    var campos = form.querySelectorAll("input,textarea");
    campos.forEach((campo) => {
        if(campo.value !== "")
        {
            enviar.disabled = false;
        }
        else
        {
            enviar.disabled = true;
        }
    })
   
}
const inputs = form.querySelectorAll("input,textarea");
inputs.forEach((input) => {
    input.addEventListener("input",validarCampos);
})

enviar.addEventListener("submit",() => {
    enviar.onsubmit();
   
})

