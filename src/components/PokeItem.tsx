import { useEffect, useState } from 'react';
import { PokeApi } from '../services/PokeApi';
import '../styles/components/pokeitem.scss'
import { PokeType } from './PokeType'

type PokeNumber = {
  entryNumber: number,
  name: string,
}

type Pokemon = {
  weight: number,
  types: [{
    slot: number,
    type: {
      name: string,
    }
  }],
  sprites: {
    other: {
      "official-artwork": {
        front_default: string,
      }
    }
  }
}

export function PokeItem({ entryNumber, name }: PokeNumber) {

  const [pokemon, setPokemon] = useState<Pokemon>()

  async function handlerPokemon() {
    const poke = await PokeApi.get(`pokemon/${entryNumber}`);

    setPokemon(poke.data)
  }

  useEffect(() => {
    handlerPokemon();
  }, [pokemon])

  return (
    <div className="poke-item">
      <span>
        <strong>#{entryNumber}</strong>
        <h2>{name}</h2>
        <strong>weight: {pokemon?.weight}KG</strong>
        <div className="types">
          {pokemon?.types.map(type => {
            return (
              <PokeType name={type.type.name} key={type.slot} />
            )
          })}
          {/* <PokeType color="#a240a0" name="Poison" /> */}
        </div>
      </span>
      {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${entryNumber}.png`} alt="pokemon" /> */}
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
    </div>
  )
}