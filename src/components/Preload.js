import { CircularProgress, Grid } from '@material-ui/core'

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
      <CircularProgress size={50} />
    </Grid>
  )
}