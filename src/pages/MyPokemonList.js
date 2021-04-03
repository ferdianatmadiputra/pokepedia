import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Grid, Typography, Button, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { GET_POKEMONS } from '../graph/index'
import { makeStyles } from '@material-ui/core/styles';
import MyPokemonCard from '../components/MyPokemonCard'
import Preload from '../components/Preload'
import ScrollTop from '../components/ScrollTop'

const useStyles = makeStyles(() => ({
  header: {
    // display: 'flex',
    // flexWrap: 'no-wrap',
    // justifyContent: 'space-between',
    // overflow: 'hidden',
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
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false)
  const [myPokemon, setMyPokemon] = useState([])
  
  useEffect(() => {
    setLoading(true)
    if (localStorage.getItem('myPokemon')) {
      let arrMyPokemon = JSON.parse(localStorage.getItem('myPokemon'))
      setMyPokemon(arrMyPokemon)
    }
    setLoading(false)
  }, [])

  const onRelease = (nickname) => {
    let newList = myPokemon.filter((el) => el.nickname !== nickname)
    localStorage.setItem('myPokemon', JSON.stringify(newList))
    setMyPokemon(newList)
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
            <Typography className={classes.totalOwned}>Still empty, go catch'em all!</Typography>
          </>
          <></>
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
              Your Pokemons
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
              <MyPokemonCard key={datum.id} datum={datum} onRelease={onRelease}/>
            </Grid>
            ))
        }
      </Grid>
      <ScrollTop />
    </Container>
  )
}