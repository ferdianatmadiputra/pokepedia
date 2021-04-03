import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import { printIntrospectionSchema } from "graphql";
import { useEffect, useState } from "react";
import PokeLoading from '../images/pokeloading.gif'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  dialogContainer: {
    textAlign: 'center'
  }
}))

export default function ModalGetPokemon (props) {
  const classes = useStyles()
  const [newNickname, setNewNickname] = useState('')
  const [openError, setOpenError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {

  }, [])

  const onSubmit = () => {
    if (newNickname.length <= 0) {
      setErrorMessage('Pokemon nickname cannot be empty')
      setOpenError(true)
    } else if (newNickname.length > 10) {
      setErrorMessage('Nickname cannot more than 10 characters')
      setOpenError(true)
    } else {
      let myPokemon = JSON.parse(localStorage.getItem('myPokemon')) || []
      if (myPokemon.length > 0 && myPokemon.find(el => el.nickname === newNickname)) {
        setErrorMessage('This pokemon nickname already exist')
        setOpenError(true)
      } else {
        myPokemon.push({
          nickname: newNickname,
          ...props.pokemon
        })
        localStorage.setItem('myPokemon', JSON.stringify(myPokemon))
        onCloseModal()
      }
    }
  }
  const onChangeNickname = (e) => {
    setNewNickname(e.target.value)
  }

  const onCloseModal = () => {
    setNewNickname('')
    setOpenError(false)
    setErrorMessage('')
    props.handleClose()
  }

  return (
    <>
    <Dialog
      open={props.open}
      onClose={onCloseModal}
      fullWidth={true}
    >
    <DialogTitle id="form-dialog-title">GOTCHA!</DialogTitle>
        <DialogContent>
          <div className={classes.dialogContainer}>
            <img src={props.pokemon.sprites.front_default} alt="pokeloading" width="130" />
            <DialogContentText>
              <b>{props.pokemon.name}
              </b> was caught!
            </DialogContentText>
          </div>

          <TextField
            autoFocus
            margin="dense"
            id="nickname"
            label="Give it a nickname to keep"
            type="email"
            fullWidth
            autoComplete="off"
            defaultValue={newNickname}
            onChange={onChangeNickname}
            required
            error={openError}
            helperText={errorMessage}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseModal} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            SAVE
          </Button>
        </DialogActions>
    </Dialog>
    </>
  )
}