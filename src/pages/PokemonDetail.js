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
import { Grid, Typography, Button, Container, Fab} from '@material-ui/core'
import {Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';
import PokeLoading from '../images/pokeloading.gif'
import NotifSnackbar from '../components/NotifSnackbar'

const useStyles = makeStyles({
  media: {
    minHeight: 300,
    minWidth: 278,
    maxWidth: 360,
    margin: 'auto'
    // padding: 'auto'
  },
  container: {
    // backgroundImage: 'linear-gradient(#95d5b2, #2d6a4f)',
    backgroundColor: 'transparent',
    // backgroundImage: "linear-gradient(rgba(149, 213, 178, 0.2), rgba(45, 106, 79, 0.3))",
    display: 'flex',
    padding: '3em 1em 5em 1em',
    color: "#184e77",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  pokemonName: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: "0.2em",
    fontSize: 27
  },
  move: {
    margin: 2
  },
  abilities: {
    margin: 2,
    color: '#184e77',
    fontWeight: 'bold',
    letterSpacing: "0.2em",
  },
  key: {
    fontWeight: 'bold',
    fontSize: 16
  },
  catchContainer: {
    position: 'fixed',
    bottom: 10,
    textAlign: 'center',
    margin: 'auto',
    left: 0,
    right: 0
  },
  catchButton: {
    color: '#ffffff',
    backgroundImage: "linear-gradient(to bottom, #52b69a, #1a759f)",
  },
  sticky: {
    position: 'sticky',
    position: '-webkit-sticky',
    top: 20,
    zIndex: 100
  },
  hr: {
    height: "1px",
    width: "90%",
    borderWidth: 0,
    color: "#184e77",
    backgroundColor: "#184e77",
  }
})

export default function PokemonDetail () {
  const classes = useStyles()
  const { name } = useParams()
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { input: name }
  })
  const [openModalGet, setOpenModalGet] = useState(false)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')
  const [disableCatch, setDisableCatch] = useState(false)
  const [openModalFailGet, setOpenModalFailGet] = useState(false)
  const [catchLabel, setCatchLabel] = useState(`Catch ${name}`)
  const [isFrontImageShow, setIsFrontImageShow] = useState(true)
  
  useEffect(() => {
    imageInterval()
  }, [isFrontImageShow])


  const imageInterval = () => {
    setTimeout(() => {
      setIsFrontImageShow(!isFrontImageShow)
    }, 4000);
  }
  const onCatch = () => {
    setDisableCatch(true)
    setCatchLabel(<img src={PokeLoading} alt="catchloading" width="50" />)
    setTimeout(() => {
      const gacha = Math.round(Math.random())
      if (gacha ===  0) {
        missedPokemon()
      } else {
        getPokemon()
      }
      setCatchLabel(`Catch ${data.pokemon.name}`)
      setDisableCatch(false)
    }, 3000);
  }

  const getPokemon = () => {
    setOpenModalGet(true)
  }
  const missedPokemon = () => {
    setOpenModalFailGet(true)
  }
  const closeModalFail = () => {
    setOpenModalFailGet(false)
  }
  const closeModalGet = () => {
    setOpenModalGet(false)
  }
  const handleImageError =(e) => {
    if (e.target.src !== data.pokemon.sprites.front_default) {
      e.target.onerror = null
      e.target.src = data.pokemon.sprites.front_default
    }
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
          <Grid item xs={12}>
            <Typography className={classes.pokemonName}>
              {data.pokemon.name.toUpperCase()}
            </Typography>
            <hr className={classes.hr}/>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            { isFrontImageShow
              ? <CardMedia
                  className={classes.media}
                  image={data.pokemon.sprites.front_default}
                  title={data.pokemon.name}
                />
              :  <CardMedia
                  className={classes.media}
                  image={
                    data.pokemon.sprites.back_default
                    ? data.pokemon.sprites.back_default
                    : data.pokemon.sprites.front_default}
                  title={data.pokemon.name}
                />
            }
            {/* <img src={data.pokemon.sprites.front_default} alt="pokeloading" width="270" /> */}

            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
              <Grid container spacing={2} direction="row">
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.key}>
                    Weight: {(data.pokemon.weight * 0.1).toFixed(1)} kg
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.key}>
                    Height: {(data.pokemon.height * 0.1).toFixed(1)} m
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} direction="row">
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.key}>
                    Types:
                  </Typography>
                  {
                    data.pokemon.types.map(el => (
                      <PokemonType type={el.type.name} key={el.type.name}/>
                    ))
                  }
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography className={classes.key}>
                    Abilities:
                  </Typography>
                  {
                    data.pokemon.abilities.map(el => (
                        <Chip
                          variant="outlined"
                          size="medium"
                          color="primary"
                          label={el.ability.name.toUpperCase()}
                          className={classes.abilities}
                          key={el.ability.name}
                          />
                    ))
                  }
                </Grid>
              </Grid>

              <Grid container spacing={2} direction="row">
                <Grid item xs={12}>
                  <Typography className={classes.key}>
                    Moves:
                  </Typography>
                  <div className={classes.movesContainer}>
                    {
                      data.pokemon.moves.map(el => (
                        <Chip
                        size="small"
                        label={el.move.name}
                        className={classes.move}
                        color="primary"
                        variant="outlined"
                        key={el.move.name}
                        />
                        ))
                      }
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      <ModalGetPokemon open={openModalGet} handleClose={closeModalGet} pokemon={data.pokemon}
      setOpenSnackbar={setOpenSnackbar}  setSnackbarMessage={setSnackbarMessage}/>
      <ModalFailedGet open={openModalFailGet} handleClose={closeModalFail} pokemon={data.pokemon}/>
      <div className={classes.catchContainer}>
        <Fab disabled={disableCatch} variant='extended' onClick={onCatch} className={classes.catchButton}>
          {/* Catch {data.pokemon.name} */}
          {catchLabel}
        </Fab>
      </div>
      <NotifSnackbar open={openSnackbar} setOpenSnackbar={setOpenSnackbar} message={snackbarMessage} />
    </Container>
  )
}