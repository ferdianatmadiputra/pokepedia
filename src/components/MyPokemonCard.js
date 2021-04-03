import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    flexWrap: 'nowrap',
    // backgroundColor: "linear-gradient(#95d5b2, #DA4453)",
    backgroundImage: "linear-gradient(#95d5b2, #2d6a4f)",
    borderRadius: 16,
    // width: 100%,
    // objectFit: "contain",
    marginRight: 0,
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
  media: {
    height: 200,
    // width: 200,
    // padding: 'auto'
  },
  text: {
    fontFamily: 'PokemonGb',
    textAlign: 'center',
    // color: 'rgb(3, 172, 14)',
    color: '#d8f3dc',
    fontSize: 10,
  },
  nickname: {
    // fontFamily: 'PokemonGb',
    fontSize: 12,
    textAlign: 'center',
    // color: 'rgb(3, 172, 14)',
    color: '#d8f3dc',
  }
});

export default function CardSeries (props) {
  const history = useHistory()
  let datum = props.datum
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    // nanti dipakai untuk bookmarknya
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function goToEdit() {
    history.push('/add')
  }

  return (
  <>
    <Card className={classes.root}>

    <CardActionArea>
      <CardMedia
        className={classes.media}
        image={datum.image}
        title={datum.name}
      />
      <CardContent>
        {/* <CardActions> */}

        <Typography className={classes.nickname}>
          {datum.nickname.toUpperCase()}
        </Typography>
        <Typography className={classes.text}>
          {datum.name.toUpperCase()}
        </Typography>

      </CardContent>
      </CardActionArea>
    </Card>
  </>
  )
} 