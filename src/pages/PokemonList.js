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

  useEffect(() => {
    
  }, [data])

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

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

      <Grid container spacing={2} direction="row">
        {
          data.pokemons.results.map(datum => (
            <Grid item xs={12} sm={4} md={3} lg={2} xl={2} spacing={0}>
              <PokemonCard key={datum.id} datum={datum} />
            </Grid>
            ))
        }
      </Grid>

    </Container>
  )
}