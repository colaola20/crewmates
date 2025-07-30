import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import Layout from './routes/Layout.jsx'
import CreateForm from './routes/CreateForm.jsx'
import Gallery from './routes/Gallery.jsx'
import CrewmateDetails from './components/CrewmateDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} > 
          <Route index element={<App />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/crewmate/:name" element={<CrewmateDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
