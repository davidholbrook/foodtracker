import {
  foodTracks,
  foodTrack,
  createFoodTrack,
  updateFoodTrack,
  deleteFoodTrack,
} from './foodTracks'

describe('foodTracks', () => {
  scenario('returns all foodTracks', async (scenario) => {
    const result = await foodTracks()

    expect(result.length).toEqual(Object.keys(scenario.foodTrack).length)
  })

  scenario('returns a single foodTrack', async (scenario) => {
    const result = await foodTrack({ id: scenario.foodTrack.one.id })

    expect(result).toEqual(scenario.foodTrack.one)
  })

  scenario('creates a foodTrack', async (scenario) => {
    const result = await createFoodTrack({
      input: { fnum: 6873799 },
    })

    expect(result.fnum).toEqual(6873799)
  })

  scenario('updates a foodTrack', async (scenario) => {
    const original = await foodTrack({ id: scenario.foodTrack.one.id })
    const result = await updateFoodTrack({
      id: original.id,
      input: { fnum: 4073576 },
    })

    expect(result.fnum).toEqual(4073576)
  })

  scenario('deletes a foodTrack', async (scenario) => {
    const original = await deleteFoodTrack({ id: scenario.foodTrack.one.id })
    const result = await foodTrack({ id: original.id })

    expect(result).toEqual(null)
  })
})
