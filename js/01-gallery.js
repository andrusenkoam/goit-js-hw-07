import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItemsMurkap = createGalleryItemsMurkap(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMurkap);
galleryEl.addEventListener('click', onGalleryItemsClick);

function createGalleryItemsMurkap(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join('');
}

function onGalleryItemsClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const imageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(
    `
    <img src="${imageUrl}" width="800" height="600">
  `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscKeyPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
