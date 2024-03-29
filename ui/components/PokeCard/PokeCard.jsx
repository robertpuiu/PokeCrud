'use client';

import Image from 'next/image';
import '../PokeCard/PokeCard.css';
import Link from 'next/link';
export default function PokeCard(props) {
  const { name, type, index, gifURL } = props.pokemon;
  return (
    // Link to /poke details page
    <Link href={`/pokemon/details/${index}`}>
      <div className="PokeCard">
        {gifURL && (
          <Image
            className="PokeCard-image"
            src={gifURL}
            alt={name}
            width={100}
            height={100}
            style={{ imageRendering: 'pixelated' }}
          />
        )}

        <p className="PokeCard-number">N&deg; {index}</p>
        {/* Display the name */}
        <p className="PokeCard-name">{name}</p>
        {/* Display the type */}
        <div className="PokeCard-types">
          <p className={`PokeCard-type ${type}`}>{type}</p>
        </div>
      </div>
    </Link>
  );
}
