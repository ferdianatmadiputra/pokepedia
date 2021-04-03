import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import PokeLoading from '../images/pokeloading.gif'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  dialogContainer: {
    textAlign: 'center'
  }
}))

export default function ModalFailedGet (props) {
  const [localState, setLocalState] = useState('')
  const classes = useStyles()
  useEffect(() => {
  }, [])

  return (
    <>
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth={true}
    >
    <DialogTitle>Failed Catch</DialogTitle>
        <DialogContent>
          <div className={classes.dialogContainer}>
            <img src={props.pokemon.sprites.back_default} alt="pokeloading" width="130" />
            <DialogContentText>
              Oh no! The wild {props.pokemon.name} fled.
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}