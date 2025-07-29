import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main-page">
        <div className="main-context">
          <h1>Main part</h1>
        </div>
      </div>
    </>
  )
}

export default App
