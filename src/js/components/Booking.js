import { select, settings, templates } from '../settings.js';
import { utils } from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();
  }
  render(element){
    const thisBooking = this;
    const generatedHTML = templates.bookingWidget(element);
    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    thisBooking.dom.wrapper.innerHTML = generatedHTML;
    thisBooking.dom.peopleAmount = element.querySelector(
      select.booking.peopleAmount
    );
    console.log(thisBooking.dom.peopleAmount);
    thisBooking.dom.hoursAmount = element.querySelector(
      select.booking.hoursAmount
    );
    thisBooking.dom.datePicker = element.querySelector(
      select.widgets.datePicker.wrapper
    );
    thisBooking.dom.hourPicker = element.querySelector(
      select.widgets.hourPicker.wrapper
    );
  }
  initWidgets () {
    const thisBooking = this;
    console.log(thisBooking.dom);
    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    thisBooking.dom.peopleAmount.addEventListener('updated', function () {});
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);
    thisBooking.dom.hoursAmount.addEventListener('updated', function () {});
    
  }
}
export default Booking;
