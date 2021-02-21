import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/FoodTracksCell'

const DELETE_FOOD_TRACK_MUTATION = gql`
  mutation DeleteFoodTrackMutation($id: Int!) {
    deleteFoodTrack(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const FoodTrack = ({ foodTrack }) => {
  const { addMessage } = useFlash()
  const [deleteFoodTrack] = useMutation(DELETE_FOOD_TRACK_MUTATION, {
    onCompleted: () => {
      navigate(routes.foodTracks())
      addMessage('FoodTrack deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete foodTrack ' + id + '?')) {
      deleteFoodTrack({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            FoodTrack {foodTrack.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{foodTrack.id}</td>
            </tr>
            <tr>
              <th>Fnum</th>
              <td>{foodTrack.fnum}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(foodTrack.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editFoodTrack({ id: foodTrack.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(foodTrack.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default FoodTrack
