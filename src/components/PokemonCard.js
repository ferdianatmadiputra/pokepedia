import React, { useEffect, useState } from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Chip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexWrap: 'nowrap',
    backgroundColor: 'transparent',
    // backgroundImage: "linear-gradient(rgba(149, 213, 178, 0.2), rgba(45, 106, 79, 0.2))",
    backgroundImage: "linear-gradient(rgba(26, 158, 158, 0), rgba(82, 82, 154, 0.1))",
    
    borderRadius: 16,
    // width: 100%,
    // objectFit: "contain",
    margin: 'auto',
    shadow:'10',
    '&:hover': {
      transform: "scale(1.05)",
      transitionDuration: 300,
      zIndex: 100,
      boxShadow: `0 6px 12px 0 ${Color('#1a9e9e')
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`
    },

  },
  media: {
    // height: 200,
    minHeight: 200,
    maxHeight: 500
    // width: 200,
    // padding: 'auto'
  },
  text: {
    // fontFamily: 'PokemonGb',
    textAlign: 'center',
    letterSpacing: "0.1em",
    // color: 'rgb(3, 172, 14)',
    color: '#184e77'
  },
  subtext: {
    textAlign: 'center',
    color: '#184e77',
    fontSize: 12
  }
});

export default function PokemonCard (props) {
  const history = useHistory()
  let datum = props.datum
  const classes = useStyles()
  const [ownedPokemon, setOwnedPokemon] = useState(props.ownedPokemon)
  // const [open, setOpen] = React.useState(false);
  // const pokemonId = datum

  useEffect (() => {
    // setOwnedPokemon(props.ownedPokemon)
  }, [])
  function goToDetail() {
    history.push(`/detail/${datum.name}`)
  }

  return (
  <>
    <Card className={classes.root} onClick={goToDetail}>

    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={datum.image}
        title={datum.name}
      />
      <CardContent>
        {/* <CardActions> */}
        {/* <Chip size="small" label={datum.id} /> */}
        <Typography className={classes.text}>
          <span>
          #{datum.id} 
          </span>&nbsp;
          {datum.name.toUpperCase()}
        </Typography>
        <Typography className={classes.subtext}>
          Owned: {ownedPokemon}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  </>
  )
} 