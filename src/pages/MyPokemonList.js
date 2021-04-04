import { useEffect, useState } from "react";
import { Grid, Typography, Box, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import MyPokemonCard from '../components/MyPokemonCard'
import Preload from '../components/Preload'
import ScrollTop from '../components/ScrollTop'
import ModalRelease from "../components/ModalRelease";
import NotifSnackbar from '../components/NotifSnackbar'
import PokeballCatched from '../images/pokeballcatched.gif'
const useStyles = makeStyles(() => ({
  header: {
    paddingTop: 30,
    paddingBottom: 30
  },
  titleText: {
    color: '#184e77',
    // fontFamily: 'PokemonGb',
  },
  totalOwned: {
    color: '#184e77',
    fontSize: 16
    // fontFamily: 'PokemonGb',
  },
}));

export default function PokemonList () {
  const classes = useStyles();
  const [openModalRelease, setOpenModalRelease] = useState(false);
  const [pokemonToRelease, setPokemonToRelease] = useState({});
  const [loading, setLoading] = useState(false)
  const [myPokemon, setMyPokemon] = useState([])
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  useEffect(() => {
    setLoading(true)
    if (localStorage.getItem('myPokemon')) {
      let arrMyPokemon = JSON.parse(localStorage.getItem('myPokemon'))
      setMyPokemon(arrMyPokemon)
    }
    setLoading(false)
  }, [])

  const onTryRelease = (pokemonToRelease) => {
    setPokemonToRelease(pokemonToRelease)
    setOpenModalRelease(true)
  }

  const onConfirmRelease = (pokemonNickname) => {
    let newList = myPokemon.filter((el) => el.nickname !== pokemonNickname)
    localStorage.setItem('myPokemon', JSON.stringify(newList))
    setMyPokemon(newList)
    setOpenModalRelease(false)
    setSnackbarMessage(`${pokemonToRelease.nickname} (${pokemonToRelease.name}) is free now`)
    setOpenSnackbar(true)
    setPokemonToRelease({})
  }

  if (loading){
    return <Preload />
  } else if (!myPokemon || myPokemon.length < 1) {
    return (
      <Container maxWidth="lg">
        <div className={classes.header}>
          <>
            <Typography variant="h4" className={classes.titleText} component="h4">
              <b>
              Your Pokemons
              </b>
            </Typography>
          </>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}
          >
            <img src={PokeballCatched} alt="pokeballCatched" width="100" />
            <Typography variant="h5">
              <Box textAlign="center">
                Still empty... Go Catch'em all!
              </Box>
            </Typography>
          </Grid>
        </div>
        <div>

        </div>
      </Container>
    )
  }
  return (
    <Container maxWidth="lg">
      <div className={classes.header}>
        <>
          <Typography variant="h4" className={classes.titleText} component="h4">
            <b>
              Your Pokemon
            </b>
          </Typography>
          <Typography className={classes.totalOwned}>Total Owned: {myPokemon.length}</Typography>
        </>
        <></>
      </div>

      <Grid container spacing={2} direction="row" alignItems="center">
        {
          myPokemon.map(datum => (
            <Grid item key={datum.id} xs={12} sm={4} md={3} lg={2} xl={2} justifyContent="center">
              <MyPokemonCard key={datum.id} datum={datum} onTryRelease={onTryRelease}/>
            </Grid>
            ))
        }
      </Grid>
      <ScrollTop />
      <ModalRelease
        open={openModalRelease}
        setOpenModalRelease={setOpenModalRelease}
        pokemonToRelease={pokemonToRelease}
        onConfirm={onConfirmRelease}
      />
      <NotifSnackbar open={openSnackbar} setOpenSnackbar={setOpenSnackbar} message={snackbarMessage} />
    </Container>
  )
}