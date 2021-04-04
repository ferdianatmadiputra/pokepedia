import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import pokeball from '../images/pokeball.png'
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: 'flex',
  },
  header: {
    color: '#d8f3dc',
    backgroundImage: "linear-gradient(to bottom, #1a9e9e, #1a759f)",
    // backgroundImage: "linear-gradient(to bottom, #52b69a, #1a759f)",
  },
  navItem: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    color: '#ffffff'
  },
  font: {
    fontSize: 12,
    // fontFamily: 'PokemonGb',
    letterSpacing: "0.2em"
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props) {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar} variant='dense'>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/"
                className={classes.navItem}
              >
                <img
                src={pokeball} 
                alt='pokeball'
                width="30"/>
                <span className={classes.font}>
                &nbsp;POKEPEDIA
                </span>
              </NavLink>
          </Typography>

          <Button color="inherit">
            <NavLink to="/mypokemon"
              className={classes.navItem}
              activeStyle={{color: '#a3c2c2'}}
            >
              <span className={classes.font}>
                Your<br />Pokemon
              </span>
            </NavLink>
          </Button>

        </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}