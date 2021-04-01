import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Grid, Typography, Button, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { GET_POKEMONS } from '../graph/index'
import { makeStyles } from '@material-ui/core/styles';
import PokemonCard from '../components/PokemonCard'
import Preload from '../components/Preload'
import AddBoxIcon from '@material-ui/icons/AddBox'

const useStyles = makeStyles(() => ({
  header: {
    display: 'flex',
    flexWrap: 'no-wrap',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingTop: 30,
    paddingBottom: 30
  },
  titleText: {
    color: '#40916c',
    // fontFamily: 'PokemonGb',

  },
}));

export default function PokemonList () {
  const classes = useStyles();
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const { loading, error, data } = useQuery(GET_POKEMONS)
  const [myPokemon, setMyPokemon] = useState([])
  useEffect(() => {
    if (localStorage.getItem('myPokemon')) {
      let arrMyPokemon = JSON.parse(localStorage.getItem('myPokemon'))
      setMyPokemon(arrMyPokemon)
    }
  }, [data])

  // const handleClickOpen = () => {
  //   setOpenModal(true);
  // };

  // const handleClose = () => {
  //   setOpenModal(false);
  // };

  const ownedPokemon = (pokemonName) => {
    if (myPokemon.length > 0) {
      let selectedPokemonCount = myPokemon.filter((el) => el.name === pokemonName).length
      return selectedPokemonCount
    } else {
      return 0
    }
  }

  if (loading){
    return <Preload />
  } else if (error) {
    return <p>error...</p>
  }
  return (
    <Container maxWidth="lg">
      <div className={classes.header}>
        <Typography variant="h5" className={classes.titleText} component="h2">
          <b>
          Pokemon List
          </b>
        </Typography>
        <></>
      </div>

      <Grid container spacing={2} direction="row" justify="center" alignItems="center">
        {
          data.pokemons.results.map(datum => (
            <Grid item key={datum.id} xs={12} sm={4} md={3} lg={2} xl={2} justifyContent="center">
              <PokemonCard key={datum.id} datum={datum} ownedPokemon={()=> ownedPokemon(datum.name)} />
            </Grid>
            ))
        }
      </Grid>

    </Container>
  )
}