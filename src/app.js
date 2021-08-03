let counter = 0;

const currValue = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    counter = getCounterValue(styles, counter);
    currValue.textContent = counter;
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
