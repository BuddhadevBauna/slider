const handleInfiniteScroll = () => {
    // console.log(carousel.scrollLeft);
    if (carousel.scrollLeft === 0) {
        // console.log("You reached to the front.");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } else if (Math.ceil(carousel.scrollLeft) >= carousel.scrollWidth - carousel.offsetWidth) {
        // console.log("You reached to the end.");
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
}