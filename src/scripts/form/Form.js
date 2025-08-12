export default class Form {
  formEl = null;

  formGroups = [];

  constructor(selector, formGroups = []) {
    this.formEl = document.querySelector(selector) || null;

    if (this.formEl === null) {
      throw new Error(`Form element not found by selector: ${selector}`);
    }

    this.formGroups = formGroups || [];
  }

  submit() {}

  reset() {
    this.formEl.reset();
  }

  validate() {
    for (let i = 0; i < this.formGroups.length; i++) {
      const formGroup = this.formGroups[i];

      formGroup.resetValidity();
      formGroup.checkValidity();
    }
  }
}
