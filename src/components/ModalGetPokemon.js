import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import { printIntrospectionSchema } from "graphql";
import { useEffect, useState } from "react";
import PokeLoading from '../images/pokeloading.gif'

export default function ModalGetPokemon (props) {
  const [newNickname, setNewNickname] = useState('')
  const [openError, setOpenError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {

  }, [])

  const onSubmit = () => {
    if (newNickname.length <= 0) {
      setErrorMessage('Pokemon nickname cannot be empty')
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
        props.handleClose()
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
    <Dialog open={props.open} onClose={onCloseModal}>
    <DialogTitle id="form-dialog-title">GOTCHA!</DialogTitle>
        <DialogContent>
          <img src={PokeLoading} alt="pokeloading" width="100" />
          <DialogContentText>
            <b>{props.pokemon.name}
            </b> was caught!
          </DialogContentText>

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