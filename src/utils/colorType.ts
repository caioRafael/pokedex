export function colorType(name: string): string {
  let color;

  switch (name) {
    case 'bug':
      color = ('#9cb820')
      break;
    case 'dark':
      color = ('#504843')
      break;
    case 'dragon':
      color = ('#7038f8')
      break;
    case 'electric':
      color = ('#c09643')
      break;
    case 'fairy':
      color = ('#f09ad9')
      break;
    case 'fighting':
      color = ('#c03028');
      break;
    case 'fire':
      color = ('#f08030');
      break;
    case 'flying':
      color = ('#9096f0');
      break;
    case 'ghost':
      color = ('#705898');
      break;
    case 'grass':
      color = ('#22c02a');
      break;
    case 'ground':
      color = ('#e0b668');
      break;
    case 'ice':
      color = ('#98d8d8');
      break;
    case 'normal':
      color = ('#a8a8a8');
      break;
    case 'ghost':
      color = ('#705898');
      break;
    case 'poison':
      color = ('#a040a0');
      break;
    case 'psychic':
      color = ('#eb2d77');
      break;
    case 'rock':
      color = ('#b8a038');
      break;
    case 'steel':
      color = ('#6d8f9c');
      break;
    case 'water':
      color = ('#6890f0');
      break;
    default:
      color = ("#000000")
      break;
  }

  return color;
}