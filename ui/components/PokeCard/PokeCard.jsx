'use client';

import Image from 'next/image';
import '../PokeCard/PokeCard.css';
const pokemonGifUrl = (name, id) => {
  if (id <= 649) {
    return `https://img.pokemondb.net/sprites/black-white/anim/normal/${name}.gif`;
  }
};
const pokemonSpriteUrl = (name) =>
  `https://img.pokemondb.net/sprites/bank/normal/${name}.png`;
// `https://img.pokemondb.net/sprites/black-white/normal/${name}.png`;

export default function PokeCard(props) {
  const { name, types, id } = props.pokemon;
  return (
    // Link to /poke details page
    <div className="PokeCard">
      <Image
        className="PokeCard-image"
        src={pokemonGifUrl(name, id) || pokemonSpriteUrl(name, id)}
        alt={name}
        width={100}
        height={100}
        style={{ imageRendering: 'pixelated' }}
      />

      <p className="PokeCard-number">N&deg;{id}</p>
      {/* Display the name */}
      <p className="PokeCard-name">{name}</p>
      {/* Display the type */}
      <div className="PokeCard-types">
        {types.map((type) => (
          <p className={`PokeCard-type ${type.type.name}`} key={type.type.name}>
            {type.type.name}
          </p>
        ))}
      </div>
    </div>
  );
}
