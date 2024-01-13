import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdev.to%2Fnagatodev%2Fhow-to-connect-django-to-reactjs-1a71&psig=AOvVaw2g8OG0uMYpgD3kQtgAHCa1&ust=1703406454906000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIia_eORpYMDFQAAAAAdAAAAABAD"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }} alt=""
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;
