import { printIntrospectionSchema } from "graphql";
import { useEffect, useState } from "react";

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
      let myPokemon = JSON.parse(localStorage.getItem('myPokemon'))
      if (myPokemon.find(el => el.nickname === newNickname)) {
        setErrorMessage('This pokemon nickname already exist')
        setOpenError(true)
      } else {
        myPokemon.push({
          nickname: newNickname,
          ...props.pokemon
        })
        localStorage.setItem('myPokemon', myPokemon)
      }
    }
  }
  return (
    <>
    </>
  )
}