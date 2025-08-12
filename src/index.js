import './styles/main.scss';

import Form from '@form/Form.js';
import FormGroup from '@form/form-group/FormGroup.js';
import CustomValidators from '@form/validators/CustomValidators.js';

document.addEventListener('DOMContentLoaded', () => {
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

  const form = new Form('.age-calculator__form', formGroups);
  const { formEl } = form;

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log('Is form:', form.validate());
    // form.formGroups.forEach((formGroup) => {
    //   formGroup.
    // });

    console.log(e);
  });
});
