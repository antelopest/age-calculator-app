import './styles/main.scss';

const [formEl] = document.getElementsByClassName('age-calculator__form');
const [dayInput, monthInput, yearInput] = document.getElementsByClassName(
  'age-calculator__form-input'
);
const [yearSpan, monthSpan, daySpan] = document.getElementsByClassName(
  'age-calculator__output-value'
);

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value) - 1;
  const year = parseInt(yearInput.value);

  let isValid = true;

  if (day < 1 || day > 31) {
    isValid = false;
    dayInput.setCustomValidity('Day must be between 1 and 31');
  } else {
    dayInput.setCustomValidity('');
  }

  if (month < 1 || month > 12) {
    isValid = false;
    monthInput.setCustomValidity('Month must be between 1 and 12');
  } else {
    monthInput.setCustomValidity('');
  }

  const currentYear = new Date().getFullYear();

  if (year < 1900 || year > currentYear) {
    isValid = false;
    yearInput.setCustomValidity(`Year must be between 1900 and ${currentYear}`);
  } else {
    yearInput.setCustomValidity('');
  }

  if (!isValid) {
    formEl.reportValidity();

    return;
  }

  // Валидация прошла успешно
  console.log('Valid inputs:', { day, month, year });
});
