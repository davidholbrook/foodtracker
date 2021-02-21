import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import MealForm from 'src/components/MealForm'

import { QUERY } from 'src/components/MealsCell'

const CREATE_MEAL_MUTATION = gql`
  mutation CreateMealMutation($input: CreateMealInput!) {
    createMeal(input: $input) {
      id
    }
  }
`

const NewMeal = () => {
  const { addMessage } = useFlash()
  const [createMeal, { loading, error }] = useMutation(CREATE_MEAL_MUTATION, {
    onCompleted: () => {
      navigate(routes.meals())
      addMessage('Meal created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    createMeal({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Meal</h2>
      </header>
      <div className="rw-segment-main">
        <MealForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMeal
