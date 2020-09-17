import { gql, useQuery } from "@apollo/client"

const GET_CHARACTERS = gql`
  query {
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    character(id: 1) {
      id
    }
  }
`

const useRAM = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`
  console.log(data)
  return data
}

export default useRAM
