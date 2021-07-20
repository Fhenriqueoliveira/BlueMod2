let inputNome = document.querySelector('#nome') //Criando uma variavel e colocando o elemento que possui o ID
let inputEmail = document.querySelector('#email')
let textareaMensagem = document.querySelector('#mensagem')
let btnEnviar = document.querySelector('#enviar')
//Validando o campo nome, com no minimo 3 letras no nome. Alterando a borda do input para mostrar se esta certo ou errado.

inputNome?.addEventListener('keyup', ()=>{
   if (inputNome.value.length < 3){
    inputNome.style.borderColor = 'red'
   } else {inputNome.style.borderColor = 'green'}   
  
})

//Validando o campo email, com no minimo @ e '.'  Alterando a borda do input para mostrar se esta certo ou errado.
inputEmail?.addEventListener('keyup', ()=>{
    if (inputEmail.value.indexOf("@")==-1 || inputEmail.value.indexOf(".") ==-1 ){
     inputEmail.style.borderColor = 'red'
    } else {inputEmail.style.borderColor = 'green'}   
    })
 
    textareaMensagem?.addEventListener('keyup', ()=>{
        if (textareaMensagem.value.length > 100){
            textareaMensagem.style.borderColor = 'red'
        } else textareaMensagem.style.borderColor='green'
    })

    btnEnviar.addEventListener('click', () => {
        alert('Formulário enviado com sucesso!')
     })