import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Main from './components/MainPage.jsx'
import Loader from './components/Loader.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Main></Main> */}
    {/* <Loader></Loader> */}
  </React.StrictMode>,
)
