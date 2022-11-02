import React, { Component } from "react";

export default class Introduction extends Component {
  render() {
    return (
      <div style={{ textAlign: "justify" }}>
        <h4 className="text-white my-4">Introduction</h4>
        <hr className="text-white" />
        <p className="text-white">
          This application, Supermanoz News allows you to read news spread
          across various sites throughout the internet. This was developed by
          Manoj Basnet aka Supermanoz using React JS for his portfolio.
        </p>
        <p className="text-white">
          The application features various functionalities like fetching of news
          and converting it into json file from News API and presenting it in a
          simpler and readable fashion. It provides an easier mechanism of
          reading news as per preferred categories and countries.
        </p>
        <p className="text-white">
          This app also allows user to enter a query for which relevant news
          will be automatically fetched making it very powerful single page
          application with dynamic delivery of contents.
        </p>
      </div>
    );
  }
}
