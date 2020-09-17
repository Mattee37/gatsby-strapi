import { gql, useQuery } from "@apollo/client"

const GET_CHARACTERS = gql`
  query {
    agentes {
      nombre
      email
      telefono
      id
    }
  }
`

const useAgentes = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  return data.agentes
}

export default useAgentes
