const cloneSlides = () => {
    const carouselChildrens = [...carousel.children];
    // console.log(carouselChildreen);

    //Get the number of card that can be fit in the carousel at once
    let cardPerView = Math.round(carousel.offsetWidth / cardWidth);

    //insert the copy of last fiew card to begining of carousel for infinite scrolling
    carouselChildrens.slice(-cardPerView).reverse().forEach((card) => {
        const clonedCard = card.cloneNode(true);
        clonedCard.classList.remove('original')
        carousel.insertAdjacentElement("afterbegin", clonedCard);
    })

    //insert the copy of first fiew card to end of carousel for infinite scrolling
    carouselChildrens.slice(0, cardPerView).forEach((card) => {
        const clonedCard = card.cloneNode(true);
        clonedCard.classList.remove('original')
        carousel.insertAdjacentElement("beforeend", clonedCard);
    })
}

const clearCloneSlides = () => {
    const carouselChildrens = [...carousel.children];
    let cardPerView = Math.round(carousel.offsetWidth / cardWidth);

    //clear last fiew item that are visible
    let l = carouselChildrens.length;
    for (let i = l-1; i >= l-cardPerView; i--) {
        if(!carouselChildrens[i].classList.contains('original')) {
            carouselChildrens[i].remove();
        }
    }

    //clear first fiew item that are visible
    for (let i = 0; i < cardPerView; i++) {
        if(!carouselChildrens[i].classList.contains('original')) {
            carouselChildrens[i].remove();
        }
    }
}