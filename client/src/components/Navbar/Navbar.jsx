import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">GurzHotel</span>
        <div className="navItems">
          <button className="navButton">Регистрация</button>
          <button className="navButton">Вход</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
