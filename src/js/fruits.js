import refs from './refs';

const initFruits = () => {
  const onFruitClick = e => {
    console.log(e.currentTarget);
    e.currentTarget.classList.add('is-hidden');
  };

  refs.fruits.forEach(fruit =>
    fruit.addEventListener('click', onFruitClick, {
      passive: true,
      once: true,
    }),
  );
};

export default initFruits;
