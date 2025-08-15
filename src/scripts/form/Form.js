export default class Form {
  element = null;

  formGroups = [];

  constructor(selector, formGroups = [], submit = function () {}) {
    this.element = document.querySelector(selector);

    this.formGroups = formGroups;

    this.submit = submit;

    this.element.addEventListener('submit', this.submit.bind(this));
  }

  submit() {}

  validate() {
    let formValid = true;

    for (let i = 0; i < this.formGroups.length; i++) {
      const formGroup = this.formGroups[i];

      const formGroupValid = formGroup.checkValidity();

      if (formValid && !formGroupValid) {
        formValid = false;
      }
    }

    return formValid;
  }
}
