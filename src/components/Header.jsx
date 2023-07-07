const Header = () => {
  return (
    <header className="header">
      <h1 className="header-text">WILL CERTEZA</h1>
      <div className="nav-items">
        <a href="#aboutme" className="anchor">
          <i className="fa-regular fa-user icons"></i>
        </a>
        <a href="#projects" className="anchor">
          <i className="fa-solid fa-code icons"></i>
        </a>
        <a href="#experience" className="anchor">
          <i className="fa-solid fa-medal icons"></i>
        </a>
      </div>
    </header>
  )
}

export default Header
