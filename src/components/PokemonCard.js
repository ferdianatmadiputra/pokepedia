import React, { useEffect, useState } from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Chip } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    flexWrap: 'nowrap',
    // backgroundColor: "linear-gradient(#95d5b2, #DA4453)",
    backgroundImage: "linear-gradient(#95d5b2, #2d6a4f)",
    borderRadius: 16,
    // width: 100%,
    // objectFit: "contain",
    margin: 'auto',
    shadow:'10',
    '&:hover': {
      transform: "scale(1.05)",
      transitionDuration: 300,
      zIndex: 100,
      boxShadow: `0 6px 12px 0 ${Color('#2d6a4f')
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`
    },

  },
  media: {
    height: 200,
    // width: 200,
    // padding: 'auto'
  },
  text: {
    // fontFamily: 'PokemonGb',
    textAlign: 'center',
    letterSpacing: "0.1em",
    // color: 'rgb(3, 172, 14)',
    color: '#d8f3dc'
  },
  subtext: {
    textAlign: 'center',
    color: '#d8f3dc',
    fontSize: 10
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