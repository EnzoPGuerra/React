import { Component } from 'react';
import './nav.css';
import logo from '../assets/airbnb_logo.svg'

class Nav extends Component{
  render(){
    return(
      <nav className='navbar'>
        <div>
          <img className='logo' src={logo}></img>
        </div>
      </nav>
    )
  }
}

export default Nav