import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter,  Link } from 'react-router-dom'
import App from './pages/App'
import './main.css'

document.body.onload = function () {
  ReactDOM.render(
    <BrowserRouter>
      <header className="App-header">
        <nav>
           <ul>
            <li className='counter'><Link to="/counter">COUNTER</Link></li>
            <li className='store'><Link to="/store">STORE</Link></li>
           </ul>
         </nav>
       </header>
      <App />
    </BrowserRouter>,
    document.getElementById('root'))
}