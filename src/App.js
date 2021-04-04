import './App.css';
import PokemonList from './pages/PokemonList'
import MyPokemonList from './pages/MyPokemonList'
import PokemonDetail from './pages/PokemonDetail'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from "@material-ui/styles";
import { Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import { Paper } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Preload from './components/Preload';

const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#184e77',
    },
    secondary: {
      main: "#184e77",
    },

  },
});
const useStyles = makeStyles({
  bg: {
    // backgroundImage: "linear-gradient(#168aad, #52b69a, #ffffff, #ffffff, #ffffff, #ffffff )",#bbe8f6
    backgroundImage: "linear-gradient(#168aad, #a5d9cb, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    color: '#184e77'
  }
})

function App() {
  const classes = useStyles()

  return (
    <>
    <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <Paper width={1} className={classes.bg} style={{minHeight: '100vh'}}>
          <Navbar />
            <Switch>
              <Route path="/mypokemon" component={MyPokemonList} />
              <Route path="/detail/:name" component={PokemonDetail} />
              <Route path="/" component={PokemonList} />
            </Switch>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
