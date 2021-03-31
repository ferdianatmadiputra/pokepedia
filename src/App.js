import './App.css';
import PokemonList from './pages/PokemonList'
import MyPokemonList from './pages/MyPokemonList'
import PokemonDetail from './pages/PokemonDetail'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import ScrollTop from './components/ScrollTop'
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Preload from './components/Preload';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#2d6a4f',
    },
    secondary: {
      main: "#2d6a4f",
    },

  },
});
const useStyles = makeStyles({
  bg: {
    backgroundColor: "#d8f3dc",
    // backgroundImage: "linear-gradient(#b7e4c7, #95d5b2)",
    color: '#2d6a4f'
  }
})

function App() {
  const classes = useStyles()

  return (
    <>
    <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Paper width={1} className={classes.bg} style={{minHeight: '100vh'}}>
          <Navbar />
            <Switch>
              <Route path="/mypokemon" component={MyPokemonList} />
              <Route path="/detail/:name" component={PokemonDetail} />
              <Route path="/preload" component={Preload} />
              <Route path="/" component={PokemonList} />
            </Switch>
            <ScrollTop />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
