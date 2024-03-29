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
  const [formToJson, setFormToJson] = useState('');
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
        {PokeDex && (
          <Image src={PokeDex} alt="Pokedex" className="Pokedex-Logo" />
        )}
      </Link>
      <CreatePokemonForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-9/12 max-w-3xl text-black"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold whitespace-nowrap tracking-tight text-lg">
            Form to JSON
          </h3>
        </div>
        <div className="p-6 flex bg-slate-100 rounded-xl  ">
          <pre className="w-full text-xs ">
            <code className="language-json ">{formToJson}</code>
          </pre>
        </div>
        <button
          className="my-3 bg-yellow-200 rounded-xl p-3"
          onClick={(e) => {
            setFormToJson(JSON.stringify(formData, null, 2));
          }}
        >
          Display JSON
        </button>
      </div>
    </div>
  );
}
