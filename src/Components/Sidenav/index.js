import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default class Sidenav extends Component {
  state = {
    showMenu: false
  }

  display = () => {
    if (!this.state.showMenu) {
      return (
        <div className='row' id='sidenav-row'>
          <div className='col' id='sidenav-btn'> 
            <span onClick={this.openNav}><i className='fas fa-bars'></i></span>
          </div>
        </div>
      )
    } else { 
      return ( 
        <div id='mySidenav' className='sidenav'>
          <button className='closebtn' onClick={this.closeNav}>X</button>
          <NavLink to='/'>HOME</NavLink>
          <a href='/#about'> ABOUT </a>
          <a href='/#skills'> SKILLS </a>
          <NavLink to='/resume'>RESUME</NavLink>
          <NavLink to='/portfolio'>PORTFOLIO</NavLink>
          <a href='/#contact'> CONTACT </a>
        </div>
      )
    }
  }

  openNav = () => {
    this.setState({showMenu: true})
  }

  closeNav = () => {
    this.setState({showMenu: false})
  }

  render() {
    return (
      this.display()
    )
  }
}