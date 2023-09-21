import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import storeConfig from './store/storeConfig.js'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={storeConfig}>
    <React.StrictMode>  
      <App />
    </React.StrictMode>
  </Provider>

)
