const btnSubmit = document.querySelector('input[type=button]');
const thanksResponse = document.querySelector('#thanks-response');
const cardContent = document.querySelector('#card-content');
let rate = null;

function rating(stars) {
    rate = stars;
    console.log(rate);
}

btnSubmit.addEventListener('click', () => {
    if (rate == null) {
        alert('Adicione uma avaliação');
        console.log(rate);
    } else {
        cardContent.style.top = '-87%';
        thanksResponse.innerHTML = `You selected ${rate} out of 5`;
    }
})

