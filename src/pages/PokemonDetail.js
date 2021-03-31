import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from "@apollo/client";
import { GET_DETAIL } from '../graph/index'
import Preload from '../components/Preload'
import ModalFailedGet from '../components/ModalFailedGet'
import ModalGetPokemon from '../components/ModalGetPokemon'
import { Grid, Typography, Button, Container} from '@material-ui/core'
import {Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  media: {
    height: 200,
    width: 200,
    // padding: 'auto'
  },
})

export default function PokemonDetail () {
  const classes = useStyles()
  const { name } = useParams()
  const { loading, error, data } = useQuery(GET_DETAIL, {
    variables: { input: name }
  })
  const [localState, setLocalState] = useState('')
  const history = useHistory()

  useEffect(() => {

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

  }
  
  const missedPokemon = () => {

  }

  if (loading){
    return <Preload />
  } else if (error) {
    return <p>error...</p>
  }
  return (
    <Container maxWidth="md">
      <p>{name}</p>
      {/* <p>{JSON.stringify(data)}</p> */}
      <Card>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data.pokemon.sprites.front_default}
          title={data.pokemon.name}
        />
        <CardContent>
          {/* <CardActions> */}

          <Typography>
            {data.pokemon.name.toUpperCase()}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  )
}