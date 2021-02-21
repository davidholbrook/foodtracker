import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import FoodTrackForm from 'src/components/FoodTrackForm'

import { QUERY } from 'src/components/FoodTracksCell'

const CREATE_FOOD_TRACK_MUTATION = gql`
  mutation CreateFoodTrackMutation($input: CreateFoodTrackInput!) {
    createFoodTrack(input: $input) {
      id
    }
  }
`

const NewFoodTrack = () => {
  const { addMessage } = useFlash()
  const [createFoodTrack, { loading, error }] = useMutation(
    CREATE_FOOD_TRACK_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.foodTracks())
        addMessage('FoodTrack created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createFoodTrack({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New FoodTrack</h2>
      </header>
      <div className="rw-segment-main">
        <FoodTrackForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewFoodTrack
