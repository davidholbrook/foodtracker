import Logo from '../../assets/logo.svg'

const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <header>
        <Logo width="500px" />
      </header>
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
