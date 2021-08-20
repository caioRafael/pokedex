import { useEffect, useState } from "react";
import { PokeApi } from "../services/PokeApi";

import { PokeItem } from "./PokeItem";

import '../styles/components/pokelist.scss'
import { useType } from "../hooks/useType";

type Pokemons = {
  entry_number: number;
  pokemon_species: {
    name: string
    url: string;
  }
}

export function PokeList() {
  const [pokemons, setPokemons] = useState<Pokemons[]>([]);

  // const { types } = useType()

  // console.log(types)

  async function getPokedex() {
    const pokedex = await PokeApi.get('pokedex/2');

    setPokemons(pokedex.data.pokemon_entries)
    // console.log(pokedex.data.pokemon_entries);
  }

  useEffect(() => {
    getPokedex();
  }, [])
  return (
    <div className="content">
      <div className="content-list">
        {pokemons.map(pokemon => {
          return <PokeItem
            key={pokemon.entry_number}
            entryNumber={pokemon.entry_number}
            name={pokemon.pokemon_species.name}
          />
        })}
      </div>
    </div>
  )
}