import refs from './refs';
const playSound = () => refs.audioApple.play();

const onFruitClick = e => {
  playSound();
  e.currentTarget.closest('.clickable').classList.add('is-hidden');
};

const initFruits = () => {
  refs.fruits.forEach(fruit =>
    fruit.addEventListener('click', onFruitClick, {
      passive: true,
      once: true,
    }),
  );
};

export default initFruits;
