import './styles/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  const formEl = document.querySelector('.age-calculator__form');

  const validators = {
    required(value) {
      let valid = false;
      let error = '';

      if (typeof value === 'string' && value.trim().length > 0) {
        valid = true;
      } else {
        error = 'This field is required';
      }

      return {
        valid,
        error
      };
    },
    pattern(value, pattern) {},
    dayValidator(value) {},
    monthValidator(value) {},
    yearValidator(value) {},
    formValidator(day, month) {}
  };

  const formGroups = {
    day: {
      labelEl: formEl.querySelector('.age-calculator__form-label--day'),
      inputEl: formEl.querySelector('.age-calculator__form-input--day'),
      errorEl: formEl.querySelector('.age-calculator__form-error--day'),
      validators: [validators.required]
    },
    month: {
      labelEl: formEl.querySelector('.age-calculator__form-label--month'),
      inputEl: formEl.querySelector('.age-calculator__form-input--month'),
      errorEl: formEl.querySelector('.age-calculator__form-error--month'),
      validators: [validators.required]
    },
    year: {
      labelEl: formEl.querySelector('.age-calculator__form-label--year'),
      inputEl: formEl.querySelector('.age-calculator__form-input--year'),
      errorEl: formEl.querySelector('.age-calculator__form-error--year'),
      validators: [validators.required]
    }
  };

  const dayOutputEl = document.querySelector('.age-calculator__output-value--days');
  const monthOutputEl = document.querySelector('.age-calculator__output-value--months');
  const yearOutputEl = document.querySelector('.age-calculator__output-value--years');

  // pattern="^(0?[1-9]|[12][0-9]|3[01])$"

  // pattern="^(0?[1-9]|1[012])$"

  // pattern="^(19|20)\d{2}$"

  const checkFormGroup = (formGroup) => {
    const { labelEl, inputEl, errorEl, validators } = formGroup;

    const value = inputEl.value;

    for (let i = 0; i < validators.length; i++) {
      const validator = validators[i];
      const { valid, error } = validator(value);

      if (valid) {
        continue;
      }

      labelEl.classList.add('age-calculator__form-label--error');
      inputEl.classList.add('age-calculator__form-input--error');
      errorEl.classList.add('age-calculator__form-error--error');

      errorEl.textContent = error;

      break;
    }
  };

  const validateForm = () => {
    let isFormValid = true;

    const clearPrevErrors = () => {
      for (const key in formGroups) {
        const formGroup = formGroups[key];

        formGroup.labelEl.classList.remove('age-calculator__form-label--error');
        formGroup.inputEl.classList.remove('age-calculator__form-input--error');
        formGroup.errorEl.classList.remove('age-calculator__form-error--error');

        formGroup.errorEl.textContent = '';
      }
    };

    return isFormValid;
  };

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
  });
});

class Form {
  isFormValid = false;

  constructor() {}
}
