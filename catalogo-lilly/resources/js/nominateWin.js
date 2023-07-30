const indicateMoreBtn = document.querySelector('.indicate-more-btn');
let qtd = 1;
const formDataContainerIndicate = document.querySelector('.form-data-container-indicate');

const clienteNome = document.getElementById('clienteNome')
const clientePhone = document.getElementById('clientePhone')

const amigoNome1 = document.getElementById('amigoNome1')
const amigoNome2 = document.getElementById('amigoNome2')
const amigoNome3 = document.getElementById('amigoNome3')

const amigoPhone1 = document.getElementById('amigoPhone1')
const amigoPhone2 = document.getElementById('amigoPhone2')
const amigoPhone3 = document.getElementById('amigoPhone3')

amigoNome2.style.display = "none"
amigoPhone2.style.display = "none"

amigoNome3.style.display = "none"
amigoPhone3.style.display = "none"

function addAmigo() {
    qtd++;
    if (qtd == 2) {
        amigoNome2.style.display = "inline"
        amigoPhone2.style.display = "inline"
    }
    if (qtd === 3) {
        amigoNome3.style.display = "inline"
        amigoPhone3.style.display = "inline"
    }
}

function cadastrar() {
    event.preventDefault()
    const url = "https://api.venuz.app/indicacao"

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();

    urlencoded.append('nome', clienteNome.value)
    urlencoded.append('telefone', clientePhone.value)
    urlencoded.append('indicado_1_nome', amigoNome1.value)
    urlencoded.append('indicado_1_telefone', amigoPhone1.value)
    urlencoded.append('indicado_2_nome', amigoNome2.value)
    urlencoded.append('indicado_2_telefone', amigoPhone2.value)
    urlencoded.append('indicado_3_nome', amigoNome3.value)
    urlencoded.append('indicado_3_telefone', amigoPhone3.value)
    urlencoded.append('email', '')
    urlencoded.append('tipo', "CAT")

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
    };

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


    // console.log(clienteNome.value)
    // fetch(url, { method: "POST", body: formData, mode: "cors", headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } })
    // nome: Jonas
    // telefone: (92) 98436 - 0000
    // indicado_1_nome: jonas
    // indicado_1_telefone: (92) 98436 - 0000
    // indicado_2_nome: jonas
    // indicado_2_telefone: (92) 98436 - 0000
    // indicado_3_nome: jonas
    // indicado_3_telefone: (92) 98436 - 0000
    // email: tipo: LLC
}
