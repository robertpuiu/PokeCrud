'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import PokeDex from '../ui/assets/Pokedex.png';
import PokeSearchBar from '@/ui/components/PokeSearchBar/PokeSearchBar';
import axios from 'axios';
import PokeCard from '@/ui/components/PokeCard/PokeCard';
export default function Home() {
  const [filteredPokedex, setFilteredPokedex] = useState([]);

  const fetchPokemonData = async () => {
    const promiseArr = [];
    for (let i = 1; i <= 25; i++) {
      promiseArr.push(axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`));
    }
    const resolvedData = await Promise.all(promiseArr);
    return resolvedData.map((data) => data.data);
  };

  const handleSearch = async (searchTerm) => {
    const pokemonData = await fetchPokemonData();
    setFilteredPokedex(
      pokemonData.filter((pokemon) => pokemon.name.includes(searchTerm))
    );
  };
  useEffect(() => {
    fetchPokemonData().then((data) => setFilteredPokedex(data));
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Home">
        <Link href="/">
          <Image src={PokeDex} alt="Pokedex" className="Pokedex-Logo" />
        </Link>

        <PokeSearchBar onSearch={handleSearch} />

        <div className="PokeDex">
          {filteredPokedex.map((pokemon) => (
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </main>
  );
}
