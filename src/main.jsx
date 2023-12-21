import React from 'react'
import ReactDOM from 'react-dom/client'
import {BuscaPelis} from './BuscaPelis'
import './styles/peliculas.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscaPelis></BuscaPelis>
  </React.StrictMode>,
)
