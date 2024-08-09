const menuList = document.querySelectorAll('.nav-list li');
const carousel = document.querySelector('.carousel');
const buttons = document.querySelectorAll('.carousel-container i');

const cardWidth = carousel.querySelector('.card').offsetWidth;
let intervalId;

// Handle button click to slide the carousel
const handleButtonClick = (event) => {
    carousel.scrollLeft += event.target.id === 'prev' ? -cardWidth : cardWidth;
}

// Function to add click listeners to buttons for manual sliding
const setupButtonSlider = () => {
    buttons.forEach((button) => {
        button.addEventListener('click', handleButtonClick);
    })
}

// Remove existing button listeners to prevent duplication
const removeButtonListeners = () => {
    buttons.forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
    });
}

const addScrollListener = () => {
    carousel.addEventListener('scroll', handleInfiniteScroll);
}

const removeScrollListener = () => {
    carousel.removeEventListener('scroll', handleInfiniteScroll);
}

// Function for infinite slider setup
const setupInfiniteSlider = () => {
    setupButtonSlider(); // Add button click listeners
    cloneSlides(); // Clone slides for infinite effect
    addScrollListener(); // Setup infinite scroll logic
}

const autoPlay = () => {
    intervalId = setInterval(() => {
        carousel.scrollLeft += cardWidth;
    }, 1000);
}

const stopAutoPlay = () => {
    clearInterval(intervalId);
}

const addAutoPlayListeners = () => {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', autoPlay);
}

const removeAutoPlayListeners = () => {
    carousel.removeEventListener('mouseenter', stopAutoPlay);
    carousel.removeEventListener('mouseleave', autoPlay);
}

const setupAutoSlider = () => {
    buttons.forEach((button) => {
        button.style.display = 'none'; // Hide buttons
    })
    cloneSlides(); // Clone Slides for infinite effect
    autoPlay(); // Initial autoplay
    addAutoPlayListeners(); // Add autoplay listeners
    addScrollListener(); // For infinite scroll
}

const setupDefaultMenu = () => {
    setupButtonSlider(); // Initial menu(when page load)
}
setupDefaultMenu();

menuList.forEach((menu) => {
    menu.addEventListener('click', () => {
        removeButtonListeners();
        removeScrollListener();
        clearCloneSlides();
        stopAutoPlay();
        removeAutoPlayListeners();
        buttons.forEach((button) => {
            button.style.display = 'initial';
        })
        switch (menu.textContent) {
            case "buttonClickCarousel":
                setupButtonSlider();
                break;
            case "infiniteCarousel":
                setupInfiniteSlider();
                break;
            case "autoCarousel":
                setupAutoSlider();
                break;
        }
    })
})