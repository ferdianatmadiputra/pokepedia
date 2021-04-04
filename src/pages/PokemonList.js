import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Grid, Typography, Container } from '@material-ui/core'
import { GET_POKEMONS } from '../graph/index'
import { makeStyles } from '@material-ui/core/styles';
import PokemonCard from '../components/PokemonCard'
import Preload from '../components/Preload'
import ScrollTop from '../components/ScrollTop'
import LazyLoad from 'react-lazyload'
import Skeleton from '@material-ui/lab/Skeleton'

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
  const { loading, error, data } = useQuery(GET_POKEMONS)
  const [myPokemon, setMyPokemon] = useState([])

  useEffect(() => {
    if (localStorage.getItem('myPokemon')) {
      let arrMyPokemon = JSON.parse(localStorage.getItem('myPokemon'))
      setMyPokemon(arrMyPokemon)
    }
  }, [data])

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
    console.log(error)
    return <p>error...</p>
  }
  return (
    <Container maxWidth="lg">
      <div className={classes.header}>
        <>
          <Typography variant="h4" className={classes.titleText} component="h4">
            <b>
            Pokemon List
            </b>
          </Typography>
          <Typography className={classes.totalOwned}>Total Owned: {myPokemon.length}</Typography>
        </>
        <></>
      </div>

      <Grid container spacing={2} direction="row" alignItems="center">
        {
          data.pokemons.results.map(datum => (
            <Grid item key={datum.id} xs={12} sm={4} md={3} lg={2} xl={2}>
              <LazyLoad
                key={datum.id}
                height={200}
                once
                offset="823"
                placeholder={
                  <Skeleton variant="rect" width={200} height={200} />
                  // <Skeleton><PokemonCard /></Skeleton>
                  // <img src={Pokeball} alt="pokeball" key={datum.id} width="80" height="80" />
                }
              >
                <PokemonCard key={datum.id} datum={datum} ownedPokemon={()=> ownedPokemon(datum.name)} />
              </LazyLoad>
            </Grid>
          ))
        }
      </Grid>
      <ScrollTop />
    </Container>
  )
}