import { templates } from '../settings.js';
import CarouselWidget from '../components/CarouselWidget.js';

class Home {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
    new CarouselWidget;
  }
  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homeWidget();
    console.log(generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default Home;
