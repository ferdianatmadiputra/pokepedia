import { useEffect, useState } from "react";
import Chip from '@material-ui/core/Chip'

export default function PokemonType (props) {
  const [chipStyle, setChipStyle] = useState({margin: 2})

  useEffect(() => {
    switch (props.type) {
      case 'poison':
        setChipStyle({color: '#212121',margin: 2})
        break;
      case 'grass':
        setChipStyle({color: '#ffffff',margin: 2})
        break;
      
      default:
        break;
    }
  }, [])

  return (
    <>
    <Chip
      // variant="outlined"
      size="medium"
      label={props.type}
      className={chipStyle}
    />
    </>
  )
}