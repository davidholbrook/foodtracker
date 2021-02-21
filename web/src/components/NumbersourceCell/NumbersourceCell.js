export const QUERY = gql`
  query NumbersourceQuery {
    meals {
      id
      name
      fnum
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No Meals Logged</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ meals }) => {
  const mapper = meals.map((meal) => {
    if (new Date(meal.createdAt).getDate() === new Date().getDate()) {
      return (
        <>
          <strong>
            {meal.name} - {meal.fnum}
          </strong>
          <br />
        </>
      )
    }
  })

  return mapper[0] !== undefined ? mapper : 'No Meals Logged'
}
