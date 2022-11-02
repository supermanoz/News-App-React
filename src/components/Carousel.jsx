import React, { Component } from "react";

export default class Carousel extends Component {
  render() {
    let { obj } = this.props;
    return (
      <>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {obj.map((element) => {
              if (
                element.title &&
                element.description &&
                element.url &&
                element.urlToImage
              )
                return (
                  <div
                    className={`carousel-item${
                      element.url === obj[0].url ? " active" : ""
                    }`}
                    key={element.url}
                  >
                    <a href={element.url} target="_blank">
                      <img
                        src={element.urlToImage}
                        className="d-block w-100"
                        height="300"
                      />
                    </a>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>
                        <span className="author">
                          {element.author
                            ? element.author.slice(0, 25) +
                              `${element.author.length > 25 ? "..." : ""}`
                            : "Unknown Author"}
                        </span>
                      </h5>
                      <p>{element.title}</p>
                    </div>
                  </div>
                );
              else return "";
            })}
          </div>
        </div>
      </>
    );
  }
}
