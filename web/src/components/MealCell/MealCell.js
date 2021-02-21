import Meal from 'src/components/Meal'

export const QUERY = gql`
  query FIND_MEAL_BY_ID($id: Int!) {
    meal: meal(id: $id) {
      id
      fnum
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Meal not found</div>

export const Success = ({ meal }) => {
  return <Meal meal={meal} />
}
