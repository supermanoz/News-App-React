import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Carousel from "./Carousel";
import Introduction from "./Introduction";
import Loading from "./Loading";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    category: "general",
    country: "us",
    pageSize: 5,
    q: null,
  };

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
    q: PropTypes.string,
  };

  newsArr = [{}];

  constructor() {
    super();
    this.state = {
      articles: this.newsArr,
      loading: false,
      page: 1,
      totalResults: 0,
      q: null,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b428bf1a4fde49b1905f94f4a2f86dbc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.state.q
      ? (url = `https://newsapi.org/v2/everything?q=${this.state.q}&apiKey=b428bf1a4fde49b1905f94f4a2f86dbc&pageSize=${this.props.pageSize}&page=${this.state.page}`)
      : (url += "");
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    let articles = parsedData.articles;
    this.setState({
      articles: articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    console.log(url);
  }

  handlePrevious = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b428bf1a4fde49b1905f94f4a2f86dbc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.state.q
      ? (url = `https://newsapi.org/v2/everything?q=${this.state.q}&apiKey=b428bf1a4fde49b1905f94f4a2f86dbc&pageSize=${this.props.pageSize}&page=${this.state.page}`)
      : (url += "");
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    let articles = parsedData.articles;
    this.setState({
      articles: articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  };

  handleNext = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b428bf1a4fde49b1905f94f4a2f86dbc&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.state.q
      ? (url = `https://newsapi.org/v2/everything?q=${this.state.q}&apiKey=b428bf1a4fde49b1905f94f4a2f86dbc&pageSize=${this.props.pageSize}&page=${this.state.page}`)
      : (url += "");
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    let articles = parsedData.articles;
    this.setState({
      articles: articles,
      loading: false,
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        {/* <button
          className="btn btn-outline-light"
          onClick={() => this.componentDidMount()}
        >
          Search
        </button> */}
        <div className="container my-2">
          <div className="row">
            <div className="col-lg-5 col-sm-12 my-4">
              <Carousel obj={this.state.articles} />
            </div>
            <div className="col-lg-7">
              <Introduction />
            </div>
          </div>
          <div className="row py-4">
            <h1 className="my-4 text-center text-white">Top Headlines</h1>
            <hr className="my-4 text-white" />
            {this.state.loading && <Loading />}
            {!this.state.loading &&
              this.state.articles.map((news) => {
                if (
                  news.title &&
                  news.description &&
                  news.url &&
                  news.urlToImage
                )
                  return (
                    <div
                      className="col-lg-4 col-md-6 col-sm-12 my-4 d-flex justify-content-center"
                      key={news.url}
                    >
                      <NewsItem
                        urlToImage={news.urlToImage}
                        title={news.title}
                        description={news.description}
                        url={news.url}
                        author={news.author}
                        source={news.source}
                        publishedAt={news.publishedAt}
                      />
                    </div>
                  );
                else return "";
              })}
          </div>
        </div>
        <div className="container transparent p-4">
          <div className="row">
            <div className="col d-flex justify-content-between m-4">
              <button
                className="btn btn-md btn-light btn-rounded"
                onClick={this.handlePrevious}
                disabled={this.state.page <= 1}
              >
                &larr; Previous
              </button>
              <button
                className="btn btn-md btn-light btn-rounded"
                onClick={this.handleNext}
                disabled={
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                }
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
