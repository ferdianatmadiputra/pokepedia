import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    flexWrap: 'nowrap',
    // backgroundColor: "linear-gradient(#95d5b2, #DA4453)",
    backgroundColor: 'transparent',
    // backgroundImage: "linear-gradient(rgba(149, 213, 178, 0.5), rgba(45, 106, 79, 0.5))",
    backgroundImage: "linear-gradient(rgba(26, 158, 158, 0), rgba(82, 82, 154, 0.1))",
    borderRadius: 16,
    margin: 'auto',
    shadow:'10',
    '&:hover': {
      transform: "scale(1.05)",
      transitionDuration: 300,
      zIndex: 100,
      boxShadow: `0 6px 12px 0 ${Color('#1a9e9e')
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`
    },
  },
  releaseButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: "6em",
    fontSize: 5,
    color: '#94b8b8',
    '&:hover': {
      color: '#184e77',
      transform: "scale(1.05)",
      transitionDuration: 300,
    }
  },
  media: {
    minHeight: 200,
    maxHeight: 500
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
  
  const goToDetail = () => {
    history.push(`/detail/${datum.name}`)
  }
  const releasePokemon = () => {
    props.onTryRelease(datum)
  }

  return (
  <>
    <Card className={classes.root}>
    <CardActionArea>
      <Button
        variant="outlined"
        size="small"
        className={classes.releaseButton}
        onClick={releasePokemon}
      >
        <ExitToAppIcon />
      </Button>
      <CardMedia
        className={classes.media}
        image={datum.sprites.front_default}
        title={datum.name}
        onClick={goToDetail}
      />
      <CardContent  onClick={goToDetail}>
        <Typography className={classes.text}>
          {datum.nickname}
        </Typography>
        <Typography className={classes.subtext}>
          {datum.name.toUpperCase()}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  </>
  )
} 