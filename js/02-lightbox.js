import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItemsMurkap = createGalleryItemsMurkap(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMurkap);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

function createGalleryItemsMurkap(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      `;
    })
    .join('');
}
