export const schema = gql`
  type FoodTrack {
    id: Int!
    fnum: Int!
    createdAt: DateTime!
  }

  type Query {
    foodTracks: [FoodTrack!]!
    foodTrack(id: Int!): FoodTrack
  }

  input CreateFoodTrackInput {
    fnum: Int!
  }

  input UpdateFoodTrackInput {
    fnum: Int
  }

  type Mutation {
    createFoodTrack(input: CreateFoodTrackInput!): FoodTrack!
    updateFoodTrack(id: Int!, input: UpdateFoodTrackInput!): FoodTrack!
    deleteFoodTrack(id: Int!): FoodTrack!
  }
`
