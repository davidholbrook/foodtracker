import { db } from 'src/lib/db'

export const foodTracks = () => {
  return db.foodTrack.findMany()
}

export const foodTrack = ({ id }) => {
  return db.foodTrack.findUnique({
    where: { id },
  })
}

export const createFoodTrack = ({ input }) => {
  return db.foodTrack.create({
    data: input,
  })
}

export const updateFoodTrack = ({ id, input }) => {
  return db.foodTrack.update({
    data: input,
    where: { id },
  })
}

export const deleteFoodTrack = ({ id }) => {
  return db.foodTrack.delete({
    where: { id },
  })
}
