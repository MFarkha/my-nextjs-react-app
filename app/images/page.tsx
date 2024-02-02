'use client';
import { useState, useContext } from 'react';
import { places } from './data';
import { getImageUrl } from './utils';
import { imageSizeContext } from './context';
import Image from 'next/image';

export interface IPlace {
    id: number,
    name: string,
    description: string,
    imageId: string
}

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <imageSizeContext.Provider value={imageSize}>
        <List />
      </imageSizeContext.Provider>
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

type props = {
    place: IPlace
}

function Place({ place }: props) {
  return (
    <>
      <PlaceImage
        place={place}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }: props) {
    const imageSize = useContext(imageSizeContext);
    return (
        <Image
            src={getImageUrl(place)}
            alt={place.name}
            width={imageSize}
            height={imageSize}
        />
        );
}