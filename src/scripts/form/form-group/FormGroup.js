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

    this.input.addEventListener('keydown', this.blur.bind(this));
    this.input.addEventListener('blur', this.keydown.bind(this));
  }

  blur() {
    this.resetErrorStyle();
    this.resetErrorText();
  }

  keydown() {
    this.resetErrorStyle();
    this.resetErrorText();
  }

  checkValidity() {
    const { value } = this.input;

    let formGroupValid = true;

    for (let i = 0; i < this.validators.length; i++) {
      const [validator, customError = null] = this.validators[i];

      const { valid, error } = validator(value);

      if (valid) {
        continue;
      }

      formGroupValid = valid;

      this.addErrorStyle();

      this.addErrorText(customError, error);

      break;
    }

    return formGroupValid;
  }

  resetErrorStyle() {
    this.label.classList.remove('age-calculator__form-label--error');
    this.input.classList.remove('age-calculator__form-input--error');
    this.error.classList.remove('age-calculator__form-error--error');
  }

  resetErrorText() {
    this.error.textContent = '';
  }

  addErrorStyle() {
    this.label.classList.add('age-calculator__form-label--error');
    this.input.classList.add('age-calculator__form-input--error');
    this.error.classList.add('age-calculator__form-error--error');
  }

  addErrorText(customError, defaultError) {
    this.error.textContent = customError || defaultError;
  }
}
