import { useState } from 'react'
import './App.css'
import crewmates from './assets/crewmates.43d07b24.png'
import spaceship from './assets/spaceship.3d8f767c.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-page">
        <div className="main-context">
          <h1>Welcome to the Crewmate Creator!</h1>
          <h3>Here is where you can create your very own set of crewmates before sending them off into space!</h3>
          <img src={crewmates} alt="crewmates" className="main-img" />
          <img src={spaceship} alt="spaceship" className="main-img" />
        </div>
      </div>
    </>
  )
}

export default App
