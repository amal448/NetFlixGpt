import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import appStore from './utils/appStore.js'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={appStore}>
    <App />
  </Provider>
  /* </StrictMode>, */
)
