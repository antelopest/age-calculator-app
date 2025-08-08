import Validators from '@form/validators/Validators.js';
import Patterns from '@form/patterns/Patterns.js';
import Errors from '@form/errors/Errors.js';

export default class CustomValidators extends Validators {
  static isValidDate(day, month, year) {
    let valid = false;
    let error = '';

    const date = new Date(year, month - 1, 0);
    const daysInMonth = date.getDate();

    if (day >= 1 && day <= daysInMonth) {
      valid = true;
    } else {
      error = Errors.custom;
    }

    return {
      valid,
      error
    };
  }

  static isValidDayPattern(day) {
    return Validators.pattern(day, Patterns.day);
  }

  static isValidMonthPattern(month) {
    return Validators.pattern(month, Patterns.month);
  }

  static isValidYearPattern(year) {
    return Validators.pattern(year, Patterns.year);
  }
}
