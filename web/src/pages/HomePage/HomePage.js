import { Link, routes } from '@redwoodjs/router'
import Layout from 'src/layouts/MainLayout/MainLayout'
import NumberSource from 'src/components/NumbersourceCell/NumbersourceCell'
import AddSum from '../../components/AddsumCell/AddsumCell'

const HomePage = () => {
  return (
    <Layout>
      <AddSum />
      <NumberSource />
    </Layout>
  )
}

export default HomePage
