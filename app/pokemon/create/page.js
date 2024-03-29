'use client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { CreatePokemonForm } from '@/components/component/create-pokemon-form';
import { useAmp } from 'next/amp';
import { useState } from 'react';
import { set } from 'lodash';
import axios from 'axios';
import Link from 'next/link';
import Image from 'next/image';
import PokeDex from '../../../ui/assets/Pokedex.png';
export default function Component() {
  const [formData, setFormData] = useState({
    gifURL: '',
    name: '',
    description: '',
    type: '',
    exp: 0,
    atk: 0,
    def: 0,
    index: 0,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/createPokemon',
        formData
      );
      if (response.status === 200) {
        console.log('Pokemon created successfully!');
      } else {
        console.error('Failed to create Pokemon:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    console.log('Form Data:', formData);
  };
  return (
    <div className=" flex justify-center items-center flex-col ">
      <Link href="/">
        <Image src={PokeDex} alt="Pokedex" className="Pokedex-Logo" />
      </Link>
      <CreatePokemonForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
