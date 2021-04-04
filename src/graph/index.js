import { gql } from "@apollo/client"

export const GET_POKEMONS = gql`
  query {
    pokemons(
      limit: 2000
      offset: 0
    ) {
      results {
        name, image, id
      },
      count,
      next,
      previous
    }
  }
`

export const GET_DETAIL = gql`
  query pokemondetail ($input: String!) {
    pokemon(name: $input ) {
      abilities {
        ability {
          name
        }
      }
      name
      weight
      height
      sprites {
        front_default
        back_default
      }
      types {
        type {
          name
        }
      }
      forms {
        name
      }
      moves {
        move {
          name
        }
      },
    }
  }
`