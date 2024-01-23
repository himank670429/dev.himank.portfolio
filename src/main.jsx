import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './stylesheet/index.css';

const root = document.getElementById('root')
root.style.height = `${window.innerHeight*5}px`
console.log(`${window.innerHeight*5}px`)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
)
