document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-audio]');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const audioSrc = button.getAttribute('data-audio');
      const audio = new Audio(audioSrc);
      audio.play();
    });
  });
});
