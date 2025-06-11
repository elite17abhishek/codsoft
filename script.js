const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'C') {
      input = '';
    } else if (value === '=') {
      try {
        input = eval(input).toString();
      } catch {
        input = 'Error';
      }
    } else if (value === '←') {
      input = input.slice(0, -1);
    } else {
      input += value;
    }

    display.value = input;
  });
});
