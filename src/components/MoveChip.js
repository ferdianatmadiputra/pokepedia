import { useEffect, useState } from "react";
import Chip from '@material-ui/core/Chip'

export default function PokemonType (props) {
  const [chipStyle, setChipStyle] = useState({
    margin: 2,
    color: '#ffffff',
    letterSpacing: "0.2em",
    fontWeight: 'bold'
  })
  // let chipStyle = {
  //   color: '#ffffff',
  //   margin: 2
  // }
  useEffect(() => {
    switch (props.type) {
      case 'water':
        setChipStyle({...chipStyle, backgroundColor: '#6890f0'})
        break;
      case 'grass':
        setChipStyle({...chipStyle, backgroundColor: '#78c850'})
        break;
      case 'fire':
        setChipStyle({...chipStyle, backgroundColor: '#f08030'})
        break;
      case 'normal':
        setChipStyle({...chipStyle, backgroundColor: '#a8a878'})
        break;
      case 'electric':
        setChipStyle({...chipStyle, backgroundColor: '#f8d030'})
      case 'flying':
        setChipStyle({...chipStyle, backgroundColor: '#a890f0'})
        break;
      case 'ice':
        setChipStyle({...chipStyle, backgroundColor: '#98d8d8'})
        break;
      case 'fighting':
        setChipStyle({...chipStyle, backgroundColor: '#c03028'})
        break;
      case 'poison':
        setChipStyle({...chipStyle, backgroundColor: '#a040a0'})
        break;
      case 'ground':
        setChipStyle({...chipStyle, backgroundColor: '#e0c068'})
        break;
      case 'psychic':
        setChipStyle({...chipStyle, backgroundColor: '#f85888'})
        break;
      case 'bug':
        setChipStyle({...chipStyle, backgroundColor: '#a8b820'})
        break;
      case 'rock':
        setChipStyle({...chipStyle, backgroundColor: '#b8a038'})
        break;
      case 'ghost':
        setChipStyle({...chipStyle, backgroundColor: '#705898'})
        break;
      case 'dark':
        setChipStyle({...chipStyle, backgroundColor: '#705848'})
        break;
      case 'dragon':
        setChipStyle({...chipStyle, backgroundColor: '#7038f8'})
        break;
      case 'steel':
        setChipStyle({...chipStyle, backgroundColor: '#b8b8d0'})
        break;
      case 'fairy':
        setChipStyle({...chipStyle, backgroundColor: '#f0b6bc'})
        break;
      default:
        setChipStyle({...chipStyle, backgroundColor: '#000000'})
        break;
    }
  }, [])

  return (
    <>
      <Chip
        size="small"
        label={el.move.name}
        className={classes.move}
        color="primary"
        style={}
      />
    </>
  )
}