const btnBuy = document.querySelector('#btnBuy');
const btnSubmit = document.querySelector('#btnSubmit');
const form = document.querySelector('.page');

const inputName = document.querySelector('#floatingInputValue');
const city = document.querySelector('select');
const radios = document.querySelectorAll('input[name="flexRadioDefault"]');
const quantity = document.querySelector('#formGroupExampleInput');
const textarea = document.querySelector('#floatingTextarea');

function validation() {

    let flag = true;
    let formInputs = [];
    formInputs.push(inputName, city, quantity);

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

    name.textContent = `${inputName.value}`;
    location.textContent = `City: ${city.value}`;
    quantityOfProduct.textContent = `Quantity: ${quantity.value}`;

    name.classList.add('output');
    location.classList.add('output');
    quantityOfProduct.classList.add('output');

    mainDiv.append(name, location, quantityOfProduct);

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
