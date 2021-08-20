import { useEffect, useState } from "react";
import { PokeApi } from "../services/PokeApi";

type Type = {
  name: string,
}

export function useType() {
  const [types, setTypes] = useState<Type[]>([]);
  async function handlerType() {
    const type = await PokeApi.get('type');

    setTypes(type.data.results);
  }

  useEffect(() => { handlerType() }, [])

  return { types }
}