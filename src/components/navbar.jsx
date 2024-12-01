import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <Link className="navbar-brand" to="/">TESLA</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse desktop-bar" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#vehicles">Vehicles <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#energy">Energy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charging">Charging</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#discover">Discover</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#shop">Shop</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
