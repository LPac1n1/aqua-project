// CONTACT_BACK_END

var load = document.querySelector('.load')
var thanks = document.querySelector('.thanks-container');
var situation = document.querySelector('.status');

var aboutContainer = document.querySelector('.about-container')
var descriptionContainer = document.querySelector('.description-container')

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    window.scrollTo({ top: 0 })

    thanks.classList.remove('hide')
    aboutContainer.classList.add('blur-div')
    descriptionContainer.classList.add('blur-div')

    // Cria um objeto FormData com os dados do formulário
    const formData = new FormData(this)

    // Envia os dados usando fetch
    fetch('https://formsubmit.co/aquaseaware@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            console.log("Email enviado com sucesso!")
            situation.style.color = 'rgb(149, 224, 149)'
            situation.style.marginTop = '10px'
            situation.style.fontWeight = 'bold'
            situation.innerText = 'Mensagem enviada com sucesso'
            load.classList.add('hide')
            setTimeout(succes, 3000)
        } else {
            console.error("Erro ao enviar o email:", response.statusText)
            situation.style.color = 'red'
            situation.innerText = 'Houve um erro ao enviar sua mensagem. Tente novamente.'
        }
    })
    .catch(error => {
        console.error("Erro ao enviar o email:", error);
    });
});

function succes() {
  thanks.classList.add('hide');
  aboutContainer.classList.remove('blur-div')
  descriptionContainer.classList.remove('blur-div')
  document.getElementById('contactForm').reset() // Limpa os inputs do formulário
}
