import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from "@apollo/client";
import { GET_DETAIL } from '../graph/index'
import Preload from '../components/Preload'
import PokemonType from '../components/PokemonType'
import ModalFailedGet from '../components/ModalFailedGet'
import ModalGetPokemon from '../components/ModalGetPokemon'
import Chip from '@material-ui/core/Chip'
import { Grid, Typography, Button, Container} from '@material-ui/core'
import {Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    minHeight: 300,
    minWidth: 278,
    maxWidth: 360,
    margin: 'auto'
    // padding: 'auto'
  },
  container: {
    backgroundImage: 'linear-gradient(#95d5b2, #2d6a4f)',
    display: 'flex',
    padding: 10,
    color: "#000000"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  pokemonName: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: "0.2em",
    fontSize: 20
  },
  move: {
    margin: 2
  },
  key: {
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default function PokemonDetail () {
  const classes = useStyles()
  const { name } = useParams()
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { input: name }
  })
  const [openModalGet, setOpenModalGet] = useState(false)
  const [openModalFailGet, setOpenModalFailGet] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      console.log(windowWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    // return () => window.removeEventListener("resize", handleResize);
  }, [])


  const onCatch = () => {
    const gacha = Math.ceil(Math.random())
    if (gacha ===  0) {
      missedPokemon()
    } else {
      getPokemon()
    }
  }

  const getPokemon = () => {
    setOpenModalGet(true)
  }
  
  const missedPokemon = () => {
    setOpenModalFailGet(true)
  }

  if (loading){
    return <Preload />
  } else if (error) {
    return <p>error...</p>
  }
  return (
    <Container maxWidth="md">
      <Card className={classes.container}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} spacing={0} justify="center" alignItems="center">
            <CardMedia
              className={classes.media}
              image={data.pokemon.sprites.front_default}
              title={data.pokemon.name}
            />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} spacing={0}>
              <Typography className={classes.pokemonName}>
                {data.pokemon.name.toUpperCase()}
              </Typography>
              <Typography className={classes.key}>
                Weight: {(data.pokemon.weight * 0.1).toFixed(2)} kg
              </Typography>
              <Typography className={classes.key}>
                Height: {(data.pokemon.height * 0.1).toFixed(2)} m
              </Typography>
              <Typography className={classes.key}>
                Types:
              </Typography>
              {
                data.pokemon.types.map(el => (
                  <PokemonType type={el.type.name} />
                ))
              }
              <Typography className={classes.key}>
                Abilities:
              </Typography>
              {
                data.pokemon.abilities.map(el => (
                  <Chip
                    variant="outlined"
                    size="medium"
                    label={el.ability.name}
                    className={classes.move}
                  />
                ))
              }
              <Typography className={classes.key}>
                Moves:
              </Typography>
              <div className={classes.movesContainer}>
                {
                  data.pokemon.moves.map(el => (
                    <Chip
                      variant="outlined"
                      size="small"
                      label={el.move.name}
                      className={classes.move}
                    />
                  ))
                }
              </div>
            </Grid>
          </Grid>
        </Card>
      <ModalGetPokemon open={openModalGet} pokemon={data.pokemon}/>
      <ModalFailedGet open={openModalFailGet} pokemon={data.pokemon}/>

    </Container>
  )
}