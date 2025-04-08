import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App  name="sandra" age="22"/> */}
    {/* <App age="20"/> */}
    <App/>
  </StrictMode>,
)
