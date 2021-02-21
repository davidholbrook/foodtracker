export const schema = gql`
  type Meal {
    id: Int!
    fnum: Int!
    name: String!
    createdAt: DateTime!
  }

  type Query {
    meals: [Meal!]!
    meal(id: Int!): Meal
  }

  input CreateMealInput {
    fnum: Int!
    name: String!
  }

  input UpdateMealInput {
    fnum: Int
    name: String
  }

  type Mutation {
    createMeal(input: CreateMealInput!): Meal!
    updateMeal(id: Int!, input: UpdateMealInput!): Meal!
    deleteMeal(id: Int!): Meal!
  }
`
