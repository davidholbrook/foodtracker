import MealsLayout from 'src/layouts/MealsLayout'
import EditMealCell from 'src/components/EditMealCell'

const EditMealPage = ({ id }) => {
  return (
    <MealsLayout>
      <EditMealCell id={id} />
    </MealsLayout>
  )
}

export default EditMealPage
