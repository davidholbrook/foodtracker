export const QUERY = gql`
  query AddsumQuery {
    meals {
      fnum
      createdAt
    }
  }
`

export const Loading = () => <div>Loading Number...</div>

export const Empty = () => <div>No Entries Today</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ meals }) => {
  const number = []
  meals.map((map, i) => {
    if (new Date(map.createdAt).getDate() === new Date().getDate()) {
      number[i] = map.fnum
    }
  })
  return <h1>{number.reduce((r, c) => r + parseFloat(c), 0)}</h1>
}
