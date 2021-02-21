import { Link, routes } from '@redwoodjs/router'

import FoodTracks from 'src/components/FoodTracks'

export const QUERY = gql`
  query FOOD_TRACKS {
    foodTracks {
      id
      fnum
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No foodTracks yet. '}
      <Link to={routes.newFoodTrack()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ foodTracks }) => {
  return <FoodTracks foodTracks={foodTracks} />
}
