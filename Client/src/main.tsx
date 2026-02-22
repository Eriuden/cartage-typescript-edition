import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './redux/reducers/indexreducer.tsx'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'

const store = configureStore({reducer:reducers})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
