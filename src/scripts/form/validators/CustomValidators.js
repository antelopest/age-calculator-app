import Validators from '@form/validators/Validators.js';
import Patterns from '@form/patterns/Patterns.js';

export default class CustomValidators extends Validators {
  static isValidDay(day, month, year) {
    let valid = false;
    let error = '';

    const date = new Date(year, month - 1, 0);
    const daysInMonth = date.getDate();

    if (day >= 1 && day <= daysInMonth) {
      valid = true;
    } else {
      error = 'This field is invalid';
    }

    return {
      valid,
      error
    };
  }

  static isValidDayPattern(day) {
    return Validators.pattern(day, Pattern.day);
  }
}
