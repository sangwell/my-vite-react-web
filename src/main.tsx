// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

//严格模式会导致组件渲染两次
/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

createRoot(document.getElementById('root')!).render(
    <App />
)