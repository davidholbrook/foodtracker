import { db } from 'src/lib/db'

export const meals = () => {
  return db.meal.findMany()
}

export const meal = ({ id }) => {
  return db.meal.findUnique({
    where: { id },
  })
}

export const createMeal = ({ input }) => {
  return db.meal.create({
    data: input,
  })
}

export const updateMeal = ({ id, input }) => {
  return db.meal.update({
    data: input,
    where: { id },
  })
}

export const deleteMeal = ({ id }) => {
  return db.meal.delete({
    where: { id },
  })
}
