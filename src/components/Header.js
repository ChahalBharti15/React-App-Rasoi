import React, {Component} from "react";

class Header extends React.Component{
    render(){
        return(
            <div>
                <header>      
    <a href="#" className="logo">Rasoi<span>.</span></a>
    <ul className="navbar">
      <li><a href="#background">Home<i className="fa fa-home" /></a></li>
      <li><a href="#about">About<i className="fa fa-info-circle" aria-hidden="true" /></a></li>
      <li><a href="#menu">Menu<i className="fa fa-bars" aria-hidden="true" /></a></li>
      <li><a href="#team">Team<i className="fa fa-users" aria-hidden="true" /></a></li>
      <li><a href="#review">Review<i className="fa fa-comments" aria-hidden="true" /></a></li>
      <li><a href="#contact">Contact<i className="fa fa-phone-square" aria-hidden="true" /></a></li>
      <div className="title">
        <a href="#login" className="btnLogin">Login<i className="fas fa-sign-in-alt" /> </a>
      </div>
    </ul>         
  </header>
            </div>
        )
    }


}

export default Header