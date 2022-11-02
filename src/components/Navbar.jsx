import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    let { projectTitle } = this.props;
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {projectTitle}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                    Technology
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Country
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/ca">
                        Canada
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cn">
                        China
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/fr">
                        France
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/hk">
                        Hong Kong
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/in">
                        India
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/jp">
                        Japan
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/kr">
                        Korea
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/pt">
                        Portugal
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/ru">
                        Russia
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/us">
                        United States
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="News"
                  aria-label="Search"
                  id="searchBox"
                />
                <button
                  className="btn btn-outline-light"
                  onClick={() => {
                    if (
                      document.getElementById("searchBox").value.match(/\w/)
                    ) {
                      this.props.onSearch(
                        document.getElementById("searchBox").value
                      );
                    }
                  }}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
