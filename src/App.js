import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './css/style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  handleSearch = (searchItem) =>{
    this.setState({
      q:searchItem
    })
    this.state.refQ.current.state.q=searchItem;
    this.state.refQ.current.componentDidMount();
  }

  constructor(){
    super();
    this.state={
      q:null,
      refQ:React.createRef(),
    }
  }

  render() {
    return (
      <Router>
        <div className="container main">
          <Navbar projectTitle="Supermanoz News" onSearch={this.handleSearch}/>
          <div className="container secondary">
            <Routes>
              <Route exact path="/" element={<News key="general" pageSize={7} ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/business" element={<News key="business" pageSize={7} category="business" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={7} category="entertainment" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/health" element={<News key="health" pageSize={7} category="health" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/science" element={<News key="science" pageSize={7} category="science" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/sports" element={<News key="sports" pageSize={7} category="sports" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/technology" element={<News key="technology" pageSize={7} category="technology" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/ca" element={<News key="ca" pageSize={7} country="ca" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/cn" element={<News key="cn" pageSize={7} country="cn" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/fr" element={<News key="fr" pageSize={7} country="fr" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/hk" element={<News key="hk" pageSize={7} country="hk" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/in" element={<News key="in" pageSize={7} country="in" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/jp" element={<News key="jp" pageSize={7} country="jp" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/kr" element={<News key="kr" pageSize={7} country="kr" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/pt" element={<News key="pt" pageSize={7} country="pt" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/ru" element={<News key="ru" pageSize={7} country="ru" ref={this.state.refQ} q={this.state.q}/>}></Route>
              <Route exact path="/us" element={<News key="us" pageSize={7} country="us" ref={this.state.refQ} q={this.state.q}/>}></Route>
            </Routes>
          </div>
        </div>
        <div className="text-center m-4">
            <small>Disclaimer: This site does not store any articles on its server. All contents are provided by News API.</small>
        </div>
      </Router>
    )
  }
}

// News API Key: 6a9c5e1ffa9040828da980b65aaf3809
// b428bf1a4fde49b1905f94f4a2f86dbc

