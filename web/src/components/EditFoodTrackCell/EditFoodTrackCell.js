import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FoodTrackForm from 'src/components/FoodTrackForm'

export const QUERY = gql`
  query FIND_FOOD_TRACK_BY_ID($id: Int!) {
    foodTrack: foodTrack(id: $id) {
      id
      fnum
      createdAt
    }
  }
`
const UPDATE_FOOD_TRACK_MUTATION = gql`
  mutation UpdateFoodTrackMutation($id: Int!, $input: UpdateFoodTrackInput!) {
    updateFoodTrack(id: $id, input: $input) {
      id
      fnum
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ foodTrack }) => {
  const { addMessage } = useFlash()
  const [updateFoodTrack, { loading, error }] = useMutation(
    UPDATE_FOOD_TRACK_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.foodTracks())
        addMessage('FoodTrack updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updateFoodTrack({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit FoodTrack {foodTrack.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FoodTrackForm
          foodTrack={foodTrack}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
