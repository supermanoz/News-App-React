import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Carousel from "./Carousel";
import Introduction from "./Introduction";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

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
      page: 1,
      totalResults: 0,
      q: null,
    };
  }

  async componentDidMount(props) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.state.q
      ? (url = `https://newsapi.org/v2/everything?q=${this.state.q}&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`)
      : (url += "");
    let data = await fetch(url);
    this.props.onHandleProgress(50);
    let parsedData = await data.json();
    this.props.onHandleProgress(70);
    let articles = parsedData.articles;
    this.setState({
      articles: articles,
      totalResults: parsedData.totalResults,
    });
    // console.log(url);
    this.props.onHandleProgress(100);
    document.title =
      "Supermanoz News - " +
      this.props.category.slice(0, 1).toUpperCase() +
      this.props.category.slice(1, this.props.category.length);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.state.q
      ? (url = `https://newsapi.org/v2/everything?q=${this.state.q}&apiKey=${
          this.props.apiKey
        }&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`)
      : (url += "");
    let data = await fetch(url);
    let parsedData = await data.json();
    let articles = this.state.articles.concat(parsedData.articles);
    this.setState({
      articles: articles,
      totalResults: parsedData.totalResults,
    });
    // console.log(this.state.page + " " + url);
  };

  render() {
    return (
      <>
        <div className="container my-2">
          <div className="row">
            <div className="col-lg-5 col-sm-12 my-4">
              <Carousel obj={this.state.articles} />
            </div>
            <div className="col-lg-7">
              <Introduction />
            </div>
          </div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length != this.state.totalResults}
            loader={<Loading />}
          >
            <div className="container-fluid">
              <div className="row py-4">
                <h1 className="my-4 text-center text-white">Top Headlines</h1>
                <hr className="my-4 text-white" />
                {this.state.articles.map((news) => {
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
          </InfiniteScroll>
        </div>
        <div className="container transparent p-4">
          <div className="row">
            <div className="col d-flex justify-content-center m-4">
              <div className="text-center">
                <small>
                  Disclaimer: This site does not store any articles on its
                  server. All contents are provided by News API.
                </small>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
