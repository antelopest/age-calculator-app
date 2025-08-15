import './styles/main.scss';

import Form from '@form/Form.js';
import FormGroup from '@form/form-group/FormGroup.js';
import CustomValidators from '@form/validators/CustomValidators.js';

document.addEventListener('DOMContentLoaded', () => {
  const formSelector = '.age-calculator__form';

  const formGroups = [
    new FormGroup(
      document.querySelector('.age-calculator__form-label--day'),
      document.querySelector('.age-calculator__form-input--day'),
      document.querySelector('.age-calculator__form-error--day'),
      [
        [CustomValidators.required, 'This field is required.'],
        [CustomValidators.dayPattern, 'Must be a valid day.']
      ]
    ),
    new FormGroup(
      document.querySelector('.age-calculator__form-label--month'),
      document.querySelector('.age-calculator__form-input--month'),
      document.querySelector('.age-calculator__form-error--month'),
      [
        [CustomValidators.required, 'This field is required.'],
        [CustomValidators.monthPattern, 'Must be a valid month.']
      ]
    ),
    new FormGroup(
      document.querySelector('.age-calculator__form-label--year'),
      document.querySelector('.age-calculator__form-input--year'),
      document.querySelector('.age-calculator__form-error--year'),
      [
        [CustomValidators.required, 'This field is required.'],
        [CustomValidators.yearPattern, 'Must be a valid year.']
      ]
    )
  ];

  const formSubmit = function (event) {
    event.preventDefault();

    if (this.validate()) {
      const [day, month, year] = this.formGroups;

      const { value: dayValue } = day.input;
      const { value: monthValue } = month.input;
      const { value: yearValue } = year.input;

      const { valid, error } = CustomValidators.date(
        dayValue,
        monthValue,
        yearValue
      );

      if (!valid) {
        day.addErrorText(error);
        day.addErrorStyle();

        return;
      }

      const currentDate = new Date();
      const formDate = new Date(yearValue, monthValue, dayValue);

      let miliseconds = currentDate - formDate;

      // const age =
    }
  };

  const form = new Form(formSelector, formGroups, formSubmit);
});
