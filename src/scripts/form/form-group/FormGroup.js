export default class FormGroup {
  label = null;
  input = null;
  error = null;
  validators = [];

  constructor(label, input, error, validators = []) {
    this.label = label;
    this.input = input;
    this.error = error;

    this.validators = validators;
  }

  checkValidity() {
    const { value } = this.input;

    let isValid = true;

    for (let i = 0; i < this.validators.length; i++) {
      if (isValid === false) {
        break;
      }
      const [validator, customError] = this.validators[i];

      const { valid, error } = validator(value);

      if (valid) {
        continue;
      }

      this.label.classList.add('age-calculator__form-label--error');
      this.input.classList.add('age-calculator__form-input--error');
      this.error.classList.add('age-calculator__form-error--error');

      this.error.textContent = customError ?? error;

      isValid = false;
    }

    return isValid;
  }

  resetValidity() {
    this.label.classList.remove('age-calculator__form-label--error');
    this.input.classList.remove('age-calculator__form-input--error');
    this.error.classList.remove('age-calculator__form-error--error');

    this.error.content = '';
  }
}
