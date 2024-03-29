'use client';
import Link from 'next/link';
import '../PokeDetails.css';
import Close from '../../../../ui/assets/close.png';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function PokeDetails() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();
  const index = params.index;
  const fetchPokemonData = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/getPokemon/${index}`
    );
    return response.data;
  };
  useEffect(() => {
    fetchPokemonData().then((data) => {
      setPokemon(data);
    });
  }, []);
  const deletePokemon = async () => {
    const response = await axios.delete(
      `http://localhost:3000/api/deletePokemon/${pokemon.id}`
    );
    console.log(response);
  };
  return (
    <div className="PokeDetailsPage">
      <div className="PokeDetails">
        <Link href="/" style={{ position: 'absolute', top: '0', right: '0' }}>
          <div className="close">
            {Close && <Image src={Close} alt="close" />}
          </div>
        </Link>
        <div className="PokeDetails-header">
          {pokemon.gifURL && (
            <Image
              className="PokeDetails-image"
              width={200}
              height={200}
              src={pokemon.gifURL}
              alt={pokemon.name}
            />
          )}

          <p className="PokeDetails-number">
            #{pokemon.index?.toString().padStart(3, '0')}
          </p>
          <p className="PokeDetails-name">{pokemon.name}</p>
          <div className="PokeDetails-types">
            <p className={`PokeDetails-type ${pokemon.type}`}>{pokemon.type}</p>
          </div>
        </div>
        <div className="PokeDetails-body">
          <div className="PokeDetails-section">
            <p className="PokeDetails-title">Description</p>
            <p className="PokeDetails-description">{pokemon.description}</p>
          </div>

          <div className="PokeDetails-section">
            <p className="PokeDetails-title">stats</p>
            <div className="PokeDetails-stats">
              <div className="PokeDetails-stat">
                <p className={`PokeDetails-stat-type SpA`}>Exp</p>
                <p>{pokemon.exp}</p>
              </div>
              <div className="PokeDetails-stat">
                <p className={`PokeDetails-stat-type HP`}>Atk</p>
                <p>{pokemon.atk}</p>
              </div>
              <div className="PokeDetails-stat">
                <p className={`PokeDetails-stat-type DEF`}>Def</p>
                <p>{pokemon.exp}</p>
              </div>
            </div>
          </div>
          <Link
            href="/"
            className="PokeDetails-stat-type HP rounded-lg hover:bg-red-500 cursor-pointer"
            onClick={() => {
              deletePokemon();
            }}
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
