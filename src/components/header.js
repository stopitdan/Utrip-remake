import React, { Component } from 'react';

const Header = (props) => {
    return (
        <div className="header">
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      {/*collapsed hamburger menu button*/}
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>

      <a className="navbar-brand" href="#"><img src={'./img/home-icon.png'} /></a>
    </div>
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      

      <ul className="nav navbar-nav">  
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Destinations</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-locations" href="#">All Destinations</a></li>
            <li role="separator" className="divider"></li>
            <li><a className="dropdown-locations" href="#">United States</a></li>
            <li><a className="dropdown-locations" href="#">Australia</a></li>
            <li><a className="dropdown-locations" href="#">Canada</a></li>
            <li><a className="dropdown-locations" href="#">Europe</a></li>
            <li><a className="dropdown-locations" href="#">Mexico</a></li>
            <li><a className="dropdown-locations" href="#">Middle East</a></li>
            <li><a className="dropdown-locations" href="#">The Caribbean</a></li>
          </ul>
        </li>
        <li><a href="#">Local Experts</a></li>
        <li><a href="#">Blog</a></li>
      </ul>


    </div>
  </div>
</nav>
        <h1 className="header-title">Plan your trip to  ...  </h1>
        <a className="light-grey-link" href="#">How Utrip Personalizes your trip</a>
        <hr className="horizontal-break" />
        </div>

    );
}

export default Header;