import { select } from '../settings.js';

class CarouselWidget {
    constructor() {
        const thisCarouselWidget = this;
        thisCarouselWidget.initWidgets();
    }
    initWidgets() {
        const element = document.querySelector(select.widgets.carousel);
        new Flickity(element, {
            autoPlay: 2500,
            prevNextButtons: false,
            imagesLoaded: true,
        });
    }
}

export default CarouselWidget;