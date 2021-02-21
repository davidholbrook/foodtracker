import MealsLayout from 'src/layouts/MealsLayout'
import MealCell from 'src/components/MealCell'

const MealPage = ({ id }) => {
  return (
    <MealsLayout>
      <MealCell id={id} />
    </MealsLayout>
  )
}

export default MealPage
