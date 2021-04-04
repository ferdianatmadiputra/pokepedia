import { Grid, Typography } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'
// import PokeLoading from '../images/pokeloading.gif'
export default function Preload () {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '80vh' }}
    >
      {/* <img src={PokeLoading} alt="pokeloading" width="100" /> */}
      <CircularProgress size={40} />
      <Typography variant="h5" style={{padding: 20}}>Loading...</Typography>
    </Grid>
  )
}