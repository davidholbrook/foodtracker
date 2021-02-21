import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/FoodTracksCell'

const DELETE_FOOD_TRACK_MUTATION = gql`
  mutation DeleteFoodTrackMutation($id: Int!) {
    deleteFoodTrack(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const FoodTracksList = ({ foodTracks }) => {
  const { addMessage } = useFlash()
  const [deleteFoodTrack] = useMutation(DELETE_FOOD_TRACK_MUTATION, {
    onCompleted: () => {
      addMessage('FoodTrack deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete foodTrack ' + id + '?')) {
      deleteFoodTrack({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fnum</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {foodTracks.map((foodTrack) => (
            <tr key={foodTrack.id}>
              <td>{truncate(foodTrack.id)}</td>
              <td>{truncate(foodTrack.fnum)}</td>
              <td>{timeTag(foodTrack.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.foodTrack({ id: foodTrack.id })}
                    title={'Show foodTrack ' + foodTrack.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editFoodTrack({ id: foodTrack.id })}
                    title={'Edit foodTrack ' + foodTrack.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete foodTrack ' + foodTrack.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(foodTrack.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FoodTracksList