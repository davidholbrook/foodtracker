import { Link, routes } from '@redwoodjs/router'

import Meals from 'src/components/Meals'

export const QUERY = gql`
  query MEALS {
    meals {
      id
      fnum
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No meals yet. '}
      <Link to={routes.newMeal()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ meals }) => {
  return <Meals meals={meals} />
}
