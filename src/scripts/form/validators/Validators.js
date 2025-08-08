import Errors from '@form/errors/Errors.js';

export default class Validators {
  static required(value) {
    let valid = false;
    let error = '';

    if (typeof value === 'string' && value.trim().length > 0) {
      valid = true;
    } else {
      error = Errors.required;
    }

    return {
      valid,
      error
    };
  }

  static pattern(value, pattern) {
    let valid = false;
    let error = '';

    if (pattern.test(value)) {
      valid = true;
    } else {
      error = Errors.pattern;
    }

    return {
      valid,
      error
    };
  }
}
