import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import store from './store'

import { ToastContainer } from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css'

import { AuthProvider } from './utils/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AuthProvider>
    <Provider store={store}><App /><ToastContainer/></Provider>
    </AuthProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
