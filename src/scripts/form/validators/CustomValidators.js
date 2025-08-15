import Validators from '@form/validators/Validators.js';
import Patterns from '@form/patterns/Patterns.js';
import Errors from '@form/errors/Errors.js';

export default class CustomValidators extends Validators {
  static date(day, month, year) {
    let valid = false;
    let error = '';

    const date = new Date(year, month, 0);
    const daysInMonth = date.getDate();

    if (day >= 1 && day <= daysInMonth) {
      valid = true;
    } else {
      error = Errors.date;
    }

    return {
      valid,
      error
    };
  }

  static dayPattern(day) {
    return Validators.pattern(day, Patterns.day);
  }

  static monthPattern(month) {
    return Validators.pattern(month, Patterns.month);
  }

  static yearPattern(year) {
    return Validators.pattern(year, Patterns.year);
  }
}
