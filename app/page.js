'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PokeDex from '../ui/assets/Pokedex.png';
import axios from 'axios';
import PokeCard from '@/ui/components/PokeCard/PokeCard';
export default function Home() {
  const [filteredPokedex, setFilteredPokedex] = useState([]);

  const newFetchPokemonData = async () => {
    const response = await axios.get(
      'http://localhost:3000/api/getAllPokemons'
    );
    return response.data;
  };
  useEffect(() => {
    newFetchPokemonData().then((data) => setFilteredPokedex(data));
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="Home">
        <Link href="/">
          <Image src={PokeDex} alt="Pokedex" className="Pokedex-Logo" />
        </Link>
        <Link
          href="/pokemon/create"
          className="text-xl font-bold text-center bg-green-400 rounded-lg p-2 hover:bg-green-300"
        >
          Create Pokemon
        </Link>

        <div className="PokeDex">
          {filteredPokedex.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </main>
  );
}
