import { Outlet, Link } from "react-router-dom"

function Layout(){
  return (
    <div>
        <nav>
        <ul>
            <li className="home-link" key="home-button">
            <Link style={{ color: "white" }} to="/">
                Home
            </Link>
            </li>
            <li className="create-link" key="create-button">
            <Link style={{color: "white"}} to="/create">
                Create a Crewmate!
            </Link>
            </li>
            <li className="gallery-link" key="gallery-button">
            <Link style={{color: "white"}} to="/gallery">
                Crewmate Gallery
            </Link>
            </li>
        </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Layout