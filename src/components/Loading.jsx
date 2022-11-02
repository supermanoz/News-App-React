import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center p-4">
        <img src={require("../img/loading.gif")} alt="loading..." />
      </div>
    );
  }
}
