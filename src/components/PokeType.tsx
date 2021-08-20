import { useEffect, useState } from "react"
import { colorType } from "../utils/colorType"

interface PokeTypeProps {
  name: string;
}

export function PokeType({ name }: PokeTypeProps) {
  const [color, setColor] = useState("");

  useEffect(() => {
    const cor = colorType(name);
    setColor(cor);
  }, [])


  return (
    <>
      <b style={{ background: color, padding: 3, borderRadius: 5, color: '#fff' }}>{name}</b>
      {/* <b style={{background:'#2cc02a', padding: 3, borderRadius: 5, color:'#fff'}}>Grass</b> */}
      {' '}
    </>
  )
}