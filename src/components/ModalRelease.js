import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  dialogStyle: {
    color: '#184e77'
  }
}))

export default function ModalRelease (props) {
  const classes = useStyles()

  const onSubmit = () => {
    props.onConfirm(props.pokemonToRelease.nickname)
  }

  const onCloseModal = () => {
    props.setOpenModalRelease(false)
  }

  return (
    <>
    <Dialog
      open={props.open}
      onClose={onCloseModal}
      fullWidth={true}
    >
    <DialogTitle className={classes.dialogStyle}>Release Pokemon</DialogTitle>
        <DialogContent>
            <DialogContentText  className={classes.dialogStyle}>
              Are you sure you want to release {props.pokemonToRelease.nickname} ({props.pokemonToRelease.name}) ?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Release
          </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}