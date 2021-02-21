import FoodTrack from 'src/components/FoodTrack'

export const QUERY = gql`
  query FIND_FOOD_TRACK_BY_ID($id: Int!) {
    foodTrack: foodTrack(id: $id) {
      id
      fnum
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>FoodTrack not found</div>

export const Success = ({ foodTrack }) => {
  return <FoodTrack foodTrack={foodTrack} />
}
