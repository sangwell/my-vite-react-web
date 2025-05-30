// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import store from './store/store.ts';
import { Provider } from 'react-redux';

//严格模式会导致组件渲染两次
/*createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)