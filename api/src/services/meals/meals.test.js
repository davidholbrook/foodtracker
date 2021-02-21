import { meals, meal, createMeal, updateMeal, deleteMeal } from './meals'

describe('meals', () => {
  scenario('returns all meals', async (scenario) => {
    const result = await meals()

    expect(result.length).toEqual(Object.keys(scenario.meal).length)
  })

  scenario('returns a single meal', async (scenario) => {
    const result = await meal({ id: scenario.meal.one.id })

    expect(result).toEqual(scenario.meal.one)
  })

  scenario('creates a meal', async (scenario) => {
    const result = await createMeal({
      input: { fnum: 3191700, name: 'String' },
    })

    expect(result.fnum).toEqual(3191700)
    expect(result.name).toEqual('String')
  })

  scenario('updates a meal', async (scenario) => {
    const original = await meal({ id: scenario.meal.one.id })
    const result = await updateMeal({
      id: original.id,
      input: { fnum: 7577225 },
    })

    expect(result.fnum).toEqual(7577225)
  })

  scenario('deletes a meal', async (scenario) => {
    const original = await deleteMeal({ id: scenario.meal.one.id })
    const result = await meal({ id: original.id })

    expect(result).toEqual(null)
  })
})
