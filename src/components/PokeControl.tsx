import { useType } from '../hooks/useType'
import '../styles/components/pokecontrol.scss'

export function PokeControl() {
  const { types } = useType();
  return (
    <div className="container-control">

      <section>
        <label>Pokémon Name</label>
        <input type="text" />
      </section>

      <section>
        <label>Pokémon Number</label>
        <input type="text" />
      </section>

      <section>
        <label>Pokémon Region</label>
        <select name="Region" id="">
          <option value="all">All Regions</option>
          <option value="kanto">Kanto</option>
          <option value="jotho">Jotho</option>
          <option value="unova">Unova</option>
        </select>
      </section>

      <section>
        <label>Pokémon Types</label>
        <select name="Type">
          <option value="all">All Types</option>
          {types.map(type =>
            <option value={type.name}>{type.name}</option>
          )}
        </select>
      </section>

      <button>Alter View</button>

    </div>
  )
}