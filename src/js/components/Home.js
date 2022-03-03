import { templates } from '../settings.js';
import CarouselWidget from '../components/CarouselWidget.js';

class Home extends CarouselWidget {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
    thisHome.CarouselWidget();
  }
  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homeWidget();
    console.log(generatedHTML);
    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
  CarouselWidget()
}

export default Home;