import { IPlace } from "./page"; 

export function getImageUrl(place: IPlace) {
    return (
      'https://i.imgur.com/' +
      place.imageId +
      'l.jpg'
    );
}