const container = document.querySelector('.hero__slide-audio');

const createAudio = () => {
  const audio = document.createElement('iframe');
  audio.setAttribute('src', 'https://music.yandex.ru/iframe/#track/112912322/25474374');
  audio.setAttribute('frameborder', '0');
  audio.setAttribute('width', 340);
  audio.setAttribute('height', 220);
  container.append(audio);
};

const initAudioPlayer = () => {
  if (container !== null) {
        createAudio();
  }
};

export {initAudioPlayer};
