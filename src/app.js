let counter = 0;

const spanValue = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    counter = getCounterValue(styles, counter);

    spanValue.textContent = counter;
    spanValue.style.color = getCounterColor(counter);
  });
});

const getCounterValue = (styles, currCounter) => {
  if (styles.contains('decrease')) {
    return currCounter - 1;
  }
  if (styles.contains('increase')) {
    return currCounter + 1;
  }
  if (styles.contains('reset')) {
    return 0;
  }
};

const getCounterColor = (counter) => {
  if (counter > 0) {
    return 'green';
  }
  if (counter < 0) {
    return 'red';
  }
  return 'black';
};
