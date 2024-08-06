const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.container i');

const cardWidth = carousel.querySelector('.card').offsetWidth;

const buttonClickSlider = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // console.log(button.className);
            carousel.scrollLeft += button.className == 'prev' ? -cardWidth : cardWidth;
        })
    })
}
buttonClickSlider();
