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
import { useState } from 'react';
import './PokeForm.css';
import Image from 'next/image';
import { set } from 'lodash';

export function CreatePokemonForm({ handleSubmit, formData, setFormData }) {
  const [selectedImage, setSelectedImage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const handleImageSelect = (imageUrl) => {
    setSelectedImage(imageUrl);
    setFormData({ ...formData, gifURL: imageUrl });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Convert value to a number if the field name matches any of these
    const numericValue = ['exp', 'atk', 'def', 'index'].includes(name)
      ? parseInt(value, 10)
      : value;
    setFormData({
      ...formData,
      [name]: numericValue,
    });
  };
  const buttonCooldown = () => {
    setIsDisabled(true); // Disable the button
    setTimeout(() => {
      setIsDisabled(false); // Enable the button after 5 seconds
    }, 5000);
    // Here you can add your submit logic
  };
  const imageUrls = [
    'https://img.pokemondb.net/sprites/black-white/anim/normal/fearow.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/pidgeot.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/golbat.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/jigglypuff.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/meowth.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/squirtle.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/abra.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/onix.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/dratini.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/caterpie.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/cubone.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/krabby.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/shellder.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/zubat.gif',
    'https://img.pokemondb.net/sprites/black-white/anim/normal/machop.gif',
    // Add more URLs as needed
  ];
  return (
    <div className="PokeDetailsPage">
      <form
        className="space-y-6 w-9/12 text-black"
        onSubmit={(e) => {
          handleSubmit(e);
          buttonCooldown();
        }}
      >
        <h1 className="text-3xl font-bold">Create Pokemon</h1>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium" htmlFor="name">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            type="text"
            className="text-blue-500"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-medium" htmlFor="description">
            Description
          </label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description"
          />
        </div>
        <div className="flex flex-col relative">
          <label htmlFor="type" className="mb-2 text-sm font-medium">
            Type
          </label>
          <div className="relative">
            <button
              type="button"
              role="combobox"
              aria-controls="radix-:r0:"
              aria-expanded="false"
              aria-autocomplete="none"
              dir="ltr"
              data-state="closed"
              data-placeholder=""
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="type"
            >
              <span>{formData.type}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 opacity-50"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <select
              id="type"
              value={formData.type}
              onChange={(e) =>
                setFormData({ ...formData, type: e.target.value })
              }
              className="absolute inset-0 w-full h-full opacity-0"
            >
              <option value="">Select type</option>
              <option value="ground">Ground</option>
              <option value="water">Water</option>
              <option value="fire">Fire</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium" htmlFor="index">
              Index
            </label>
            <Input
              id="index"
              name="index"
              value={formData.index}
              onChange={handleChange}
              placeholder="Enter exp"
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium" htmlFor="exp">
              Exp
            </label>
            <Input
              id="exp"
              name="exp"
              value={formData.exp}
              onChange={handleChange}
              placeholder="Enter exp"
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium" htmlFor="atk">
              Atk
            </label>
            <Input
              id="atk"
              name="atk"
              value={formData.atk}
              onChange={handleChange}
              placeholder="Enter atk"
              type="number"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-medium" htmlFor="def">
              Def
            </label>
            <Input
              id="def"
              name="def"
              value={formData.def}
              onChange={handleChange}
              placeholder="Enter def"
              type="number"
            />
          </div>
        </div>
        <div className="grid items-start gap-1.5">
          <h4 className="text-sm font-medium leading-5">Choose from Gallery</h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                onClick={() => handleImageSelect(imageUrl)}
                className="relative group rounded-lg overflow-hidden aspect-square cursor-pointer flex justify-center items-center transition-transform transform-gpu hover:scal"
              >
                <Image
                  src={imageUrl}
                  alt={`Image ${index}`}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full transition-transform group-hover:scale-105 PokeDetails-image"
                />
                {selectedImage === imageUrl && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 transition-opacity opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Button type="submit" disabled={isDisabled}>
          Submit
        </Button>
      </form>
    </div>
  );
}
