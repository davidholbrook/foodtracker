import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/MealsCell'

const DELETE_MEAL_MUTATION = gql`
  mutation DeleteMealMutation($id: Int!) {
    deleteMeal(id: $id) {
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

const Meal = ({ meal }) => {
  const { addMessage } = useFlash()
  const [deleteMeal] = useMutation(DELETE_MEAL_MUTATION, {
    onCompleted: () => {
      navigate(routes.meals())
      addMessage('Meal deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete meal ' + id + '?')) {
      deleteMeal({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Meal {meal.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{meal.id}</td>
            </tr>
            <tr>
              <th>Fnum</th>
              <td>{meal.fnum}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{meal.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(meal.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMeal({ id: meal.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(meal.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Meal
