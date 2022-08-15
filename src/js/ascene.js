import { markerPreset, markerProps, markerType, markerUrl } from './config';
import { languagePack } from './importLang';

const aMarker = document.querySelector('.a-marker');
aMarker.setAttribute('preset', markerPreset);
aMarker.setAttribute('type', markerType);
aMarker.setAttribute('url', markerUrl);

export const renderAnimals = function () {
  languagePack()[1].forEach(animal => {
    const { aImageAttributes, id, name } = animal;
    const aImage = document.createElement('a-image');
    aImage.setAttribute(id, '');
    aImage.setAttribute('id', id);
    aImage.setAttribute('src', `./img/${id}.png`);
    aImage.setAttribute('alt', name);

    for (const attribute in aImageAttributes) {
      const value = aImageAttributes[attribute];
      aImage.setAttribute(attribute, value);
    }

    aMarker.appendChild(aImage);
  });
};
