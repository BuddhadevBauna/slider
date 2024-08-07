const menuList = document.querySelectorAll('.nav-list li');
const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.carousel-container i');

const cardWidth = carousel.querySelector('.card').offsetWidth;

// Handle button click to slide the carousel
const handleButtonClick = (event) => {
    carousel.scrollLeft += event.target.id === 'prev' ? -cardWidth : cardWidth;
}

// Function to add click listeners to buttons for manual sliding
const buttonClickSlider = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    })
}

// Remove existing button listeners to prevent duplication
const clearButtonListeners = () => {
    buttons.forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
    });
}

// Function for infinite slider setup
const infiniteSlider = () => {
    // Add button click listeners
    buttonClickSlider();
    // Clone items for infinite effect
    clone();
    // Setup infinite scroll logic
    carousel.addEventListener('scroll', handleInfiniteScroll);
}

const cleareInfiniteScroll = () => {
    carousel.removeEventListener('scroll', handleInfiniteScroll);
}


buttonClickSlider();
menuList.forEach((menu) => {
    menu.addEventListener('click', () => {
        clearButtonListeners();
        cleareInfiniteScroll();
        clearClone();
        switch (menu.textContent) {
            case "buttonClickCarousel":
                buttonClickSlider();
                break;
            case "infiniteCarousel":
                infiniteSlider();
                break;
        }
    })
})