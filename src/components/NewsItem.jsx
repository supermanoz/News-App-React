import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage, publishedAt, author } =
      this.props;
    const publishedDate = new Date(publishedAt);

    return (
      <>
        <div className="card text-white bg-dark" style={{ width: "18rem" }}>
          <a href={url} target="_blank">
            <img src={urlToImage} className="card-img-top" alt="Img" />
          </a>
          <div className="card-body">
            <span className="position-absolute top-0 translate-middle p-2 bg-light text-dark rounded-pill">
              <small>
                {author
                  ? author.slice(0, 25) + `${author.length > 25 ? "..." : ""}`
                  : "Unknown Author"}
              </small>
            </span>
            <h5 className="card-title">{title.slice(0, 40)}...</h5>
            <hr />
            <p className="card-text text-white">
              {description.slice(0, 60)}...
            </p>
            <p className="card-text">
              <small className="text-muted">
                {publishedDate.toDateString()}
              </small>
            </p>
            <a href={url} target="_blank" className="btn btn-light">
              Read more
            </a>
          </div>
        </div>
      </>
    );
  }
}
