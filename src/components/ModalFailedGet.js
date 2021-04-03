import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import PokeLoading from '../images/pokeloading.gif'

export default function ModalFailedGet (props) {
  const [localState, setLocalState] = useState('')

  useEffect(() => {
  }, [])

  return (
    <>
    <Dialog open={props.open} onClose={props.handleClose}>
    <DialogTitle>Failed Catch</DialogTitle>
        <DialogContent>
          <img src={PokeLoading} alt="pokeloading" width="100" />
          <DialogContentText>
            Oh no! The wild {props.pokemon.name} fled.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}