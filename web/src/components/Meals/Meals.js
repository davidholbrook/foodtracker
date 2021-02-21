import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MealsCell'

const DELETE_MEAL_MUTATION = gql`
  mutation DeleteMealMutation($id: Int!) {
    deleteMeal(id: $id) {
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

const MealsList = ({ meals }) => {
  const { addMessage } = useFlash()
  const [deleteMeal] = useMutation(DELETE_MEAL_MUTATION, {
    onCompleted: () => {
      addMessage('Meal deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete meal ' + id + '?')) {
      deleteMeal({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fnum</th>
            <th>Name</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <tr key={meal.id}>
              <td>{truncate(meal.id)}</td>
              <td>{truncate(meal.fnum)}</td>
              <td>{truncate(meal.name)}</td>
              <td>{timeTag(meal.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.meal({ id: meal.id })}
                    title={'Show meal ' + meal.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMeal({ id: meal.id })}
                    title={'Edit meal ' + meal.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete meal ' + meal.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(meal.id)}
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

export default MealsList
