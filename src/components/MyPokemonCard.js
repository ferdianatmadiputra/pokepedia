import React, { useEffect, useState } from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import LockOpenIcon from '@material-ui/icons/LockOpen';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexWrap: 'nowrap',
    // backgroundColor: "linear-gradient(#95d5b2, #DA4453)",
    backgroundColor: 'transparent',
    backgroundImage: "linear-gradient(rgba(149, 213, 178, 0.5), rgba(45, 106, 79, 0.5))",
    
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
  releaseButton: {
    position: 'absolute',
    top: 3,
    right: 3,
    borderRadius: "5em",
    color: '#184e77'
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
    fontSize: 16
  }
});

export default function PokemonCard (props) {
  const history = useHistory()
  let datum = props.datum
  const classes = useStyles()
  // const [open, setOpen] = React.useState(false);
  // const pokemonId = datum

  useEffect (() => {
    // setOwnedPokemon(props.ownedPokemon)
  }, [])
  
  const goToDetail = () => {
    history.push(`/detail/${datum.name}`)
  }
  const releasePokemon = () => {
    // console.log('release')
    props.onRelease(datum.nickname)
  }

  return (
  <>
    <Card className={classes.root}>
    <CardActionArea>
      {/* <Chip className={classes.releaseButton} onClick={releasePokemon}>
        <LockOpenIcon/>
      </Chip> */}
      <Button variant="outlined"
        size="small"
        className={classes.releaseButton}
        onClick={releasePokemon}
      >
        <LockOpenIcon/>
      </Button>
      {/* <div variant="outlined"
        className={classes.releaseButton}
        onClick={releasePokemon}
      >
        <LockOpenIcon/>
      </div> */}
      {/* <Chip
        className={classes.releaseButton}
        avatar={<LockOpenIcon />}
        label="Open"
        onClick={releasePokemon}
        variant="outlined"
      /> */}
      <CardMedia
        className={classes.media}
        image={datum.sprites.front_default}
        title={datum.name}
        onClick={goToDetail}
      />
      <CardContent  onClick={goToDetail}>
        {/* <CardActions> */}
        {/* <Chip size="small" label={datum.id} /> */}
        {/* <Grid container>
          <Grid item> */}
            <Typography className={classes.text}>
              {datum.nickname}
            </Typography>
            <Typography className={classes.subtext}>
              {datum.name.toUpperCase()}
            </Typography>
          {/* </Grid>
          <Grid item>
            <LockOpenIcon />
          </Grid>
        </Grid> */}
      </CardContent>
      </CardActionArea>
    </Card>
  </>
  )
} 