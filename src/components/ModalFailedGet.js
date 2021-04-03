import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import PokeLoading from '../images/pokeloading.gif'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  dialogContainer: {
    textAlign: 'center'
  },
  dialogStyle: {
    color: '#184e77',
  }
}))

export default function ModalFailedGet (props) {
  const [localState, setLocalState] = useState('')
  const classes = useStyles()

  const handleImageError =(e) => {
    e.target.onerror = null
    e.target.src = props.pokemon.sprites.front_default
  }

  return (
    <>
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      fullWidth={true}
    >
    <DialogTitle  className={classes.dialogStyle}>Failed...</DialogTitle>
        <DialogContent>
          <div className={classes.dialogContainer}>
            <img 
              src={
                props.pokemon.sprites.back_default
                ? props.pokemon.sprites.back_default
                : props.pokemon.sprites.front_default
              }
              alt="pokeloading"
              width="130"
              onError={handleImageError}
            />
            <DialogContentText className={classes.dialogStyle}>
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