class Form {
  formEl = null;

  formGroups = [];

  constructor(selector, formGroups = []) {
    this.form = document.querySelector(selector) || null;

    if (this.form === null) {
      throw new Error(`Form element not found by selector: ${selector}`);
    }

    this.formGroups = formGroups || [];
  }
}
