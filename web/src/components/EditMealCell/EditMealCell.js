import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MealForm from 'src/components/MealForm'

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
const UPDATE_MEAL_MUTATION = gql`
  mutation UpdateMealMutation($id: Int!, $input: UpdateMealInput!) {
    updateMeal(id: $id, input: $input) {
      id
      fnum
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ meal }) => {
  const { addMessage } = useFlash()
  const [updateMeal, { loading, error }] = useMutation(UPDATE_MEAL_MUTATION, {
    onCompleted: () => {
      navigate(routes.meals())
      addMessage('Meal updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    updateMeal({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Meal {meal.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MealForm meal={meal} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
