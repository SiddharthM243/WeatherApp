import React from "react";
import logo from '../Components/Assets/logo.gif'
import { Link, useMatch, useResolvedPath } from "react-router-dom"




 function Nav() {
  return (
    <div>
    <nav className="nav">
      <img src={logo} className="App-logo" />
      <div>
        <h3 className="site-title">Weather Forecast App</h3>
      </div>

      <ul>
        <Link to="/" >Home</Link>
        <CustomLink to="/GetWeather">Get Weather</CustomLink>
        <CustomLink to="/TemperatureConverter" >Temperature Converter</CustomLink>
      </ul>
    </nav>
  </div>
  )
}


function CustomLink({ to, children, ...props }) {
  const Path = useResolvedPath(to)
  const isActive = useMatch({ path: Path.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>

  )
}

export default Nav;