const container = document.querySelector('.hero__slide-video');

const createVideo = () => {
  const video = document.createElement('iframe');
  video.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1');
  video.setAttribute('title', 'YouTube video player');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  video.setAttribute('allowfullscreen', '');
  container.append(video);
};

const initVideoPlayer = () => {
  if (container !== null) {

    const cover = container.querySelector('img');
    const button = container.querySelector('button');

    if (container && cover && button) {
      button.addEventListener('click', (event) => {
        event.preventDefault();
        cover.style.display = 'none';
        button.style.display = 'none';
        createVideo();
      });
    }
  }
};

export {initVideoPlayer};
