const btnBuy = document.querySelector('#btnBuy');
const btnSubmit = document.querySelector('#btnSubmit');
const form = document.querySelector('.page');

const inputName = document.querySelector('#floatingInputValue');
const email = document.querySelector('#floatingInput');
const phone = document.querySelector('#floatingInputPhone');
const city = document.querySelector('select');
const radios = document.querySelectorAll('input[name="flexRadioDefault"]');
const quantity = document.querySelector('#formGroupExampleInput');
const textarea = document.querySelector('#floatingTextarea');

function validation() {

    let flag = true;
    let formInputs = [];
    let regName = /^[a-zA-Z]{2,} [a-zA-Z]+ [a-zA-Z]+$/g
    let regEmail = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/g
    let regPhone = /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/g
    formInputs.push(city, quantity);

    inputName.classList.remove('is-invalid');
    if (!regName.test(inputName.value)) {
        flag = false;
        inputName.classList.add('is-invalid');
    }
    email.classList.remove('is-invalid');
    if (!regEmail.test(email.value)) {
        flag = false;
        email.classList.add('is-invalid');
    }
    phone.classList.remove('is-invalid');
    if (!regPhone.test(phone.value)) {
        flag = false;
        phone.classList.add('is-invalid');
    }

    formInputs.forEach(input => {
        input.classList.remove('is-invalid');

        if (input.value == '' || input.value == 'City') {
            flag = false;
            input.classList.add('is-invalid');
        }
        
    });
    if (radios[0].checked == false && radios[1].checked == false) {
            flag = false;
        }

    return flag;
}

function output() {
    form.setAttribute('hidden', 'hidden');
    
    const outputContainer = document.createElement('div');
    const mainDiv = document.createElement('div');
    const name = document.createElement('h2');
    const location = document.createElement('p');
    const quantityOfProduct = document.createElement('p');
    const phoneDiv = document.createElement('p');
    const emailDiv = document.createElement('p');

    name.textContent = `${inputName.value}`;
    location.textContent = `City: ${city.value}`;
    quantityOfProduct.textContent = `Quantity: ${quantity.value}`;
    phoneDiv.textContent = `Phone: ${phone.value}`;
    emailDiv.textContent = `Email: ${email.value}`;

    name.classList.add('output');
    location.classList.add('output');
    quantityOfProduct.classList.add('output');
    phoneDiv.classList.add('output');
    emailDiv.classList.add('output');

    mainDiv.append(name, phoneDiv, emailDiv, location, quantityOfProduct);

    if (textarea.value != "") {
        const coment = document.createElement('p');
        coment.textContent = `${textarea.value}`;
        coment.classList.add('output');
        mainDiv.append(coment);
    }

    mainDiv.classList.add('mainDiv');
    outputContainer.append(mainDiv);
    outputContainer.classList.add('outputContainer')
    document.body.append(outputContainer);
}

btnBuy.addEventListener('click', function (e) {
    e.preventDefault();

    form.removeAttribute('hidden');
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validation(this)) {
        output();
    }
});