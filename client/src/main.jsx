import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/app_conext.jsx'
// import { WishlistProvider } from './context/WishlistContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)


// const options = {
//   "damping": 0.07
// }
// Scrollbar.init(document.querySelector("#my-scrollbar"), options)
