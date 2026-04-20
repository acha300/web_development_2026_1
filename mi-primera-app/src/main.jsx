import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginScreen from './componente/login/login.jsx';
import Mantenimiento from './componente/mantenimento/mantenimiento.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mantenimiento />
  </StrictMode>,
)
