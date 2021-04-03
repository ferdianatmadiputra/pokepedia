import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, IconButton, Slide } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import TheatersIcon from '@material-ui/icons/Theaters'
import pokeball from '../images/pokeball.png'
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    // flexGrow: 1,
    display: 'flex',
  },
  header: {
    // color: "rgb(3, 172, 14)",
    color: '#d8f3dc',
    backgroundImage: "linear-gradient(to bottom, #1a9e9e, #1a759f)",
    // backgroundImage: "linear-gradient(to bottom, #52b69a, #1a759f)",
  },
  navItem: {
    textDecoration: 'none',
    color: 'inherit',
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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

// HideOnScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default function HideAppBar(props) {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar} variant='dense'>
          {/* <IconButton edge="start" className={classes.menuButton} color="default" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/"
                className={classes.navItem}
                // activeStyle={{color: '#ffffff'}}
              >
                {/* <TheatersIcon /> */}
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
                {/* &nbsp; */}
              </span>
              {/* <SportsBaseballIcon fontSize='small' /> */}
            </NavLink>
          </Button>

        </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}