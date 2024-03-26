import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './context/app_conext.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
)


const element = <FontAwesomeIcon icon={faHouse} />

ReactDOM.render(element, document.body)

// const options = {
//   "damping": 0.07
// }
// Scrollbar.init(document.querySelector("#my-scrollbar"), options)
