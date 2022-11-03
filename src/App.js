import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import './css/style.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

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
      progress:30,
      apiKey:"6a9c5e1ffa9040828da980b65aaf3809",
      //apiKey:"b428bf1a4fde49b1905f94f4a2f86dbc"
    }
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <Router>
        <div className="container main">
          <Navbar projectTitle="Supermanoz News" onSearch={this.handleSearch}/> 
          <LoadingBar 
          color='linear-gradient(90deg, #FAD961 0%, #F76B1C 100%)' progress={this.state.progress} height={3} onLoaderFinished={() => this.setProgress(0)}/>
          <div className="container secondary">
            <Routes>
              <Route exact path="/" element={<News onHandleProgress={this.setProgress} key="general" pageSize={7} ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/business" element={<News onHandleProgress={this.setProgress} key="business" pageSize={7} category="business" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/entertainment" element={<News onHandleProgress={this.setProgress} key="entertainment" pageSize={7} category="entertainment" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/health" element={<News onHandleProgress={this.setProgress} key="health" pageSize={7} category="health" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/science" element={<News onHandleProgress={this.setProgress} key="science" pageSize={7} category="science" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/sports" element={<News onHandleProgress={this.setProgress} key="sports" pageSize={7} category="sports" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/technology" element={<News onHandleProgress={this.setProgress} key="technology" pageSize={7} category="technology" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/ca" element={<News onHandleProgress={this.setProgress} key="ca" pageSize={7} country="ca" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/cn" element={<News onHandleProgress={this.setProgress} key="cn" pageSize={7} country="cn" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/fr" element={<News onHandleProgress={this.setProgress} key="fr" pageSize={7} country="fr" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/hk" element={<News onHandleProgress={this.setProgress} key="hk" pageSize={7} country="hk" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/in" element={<News onHandleProgress={this.setProgress} key="in" pageSize={7} country="in" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/jp" element={<News onHandleProgress={this.setProgress} key="jp" pageSize={7} country="jp" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/kr" element={<News onHandleProgress={this.setProgress} key="kr" pageSize={7} country="kr" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/pt" element={<News onHandleProgress={this.setProgress} key="pt" pageSize={7} country="pt" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/ru" element={<News onHandleProgress={this.setProgress} key="ru" pageSize={7} country="ru" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
              <Route exact path="/us" element={<News onHandleProgress={this.setProgress} key="us" pageSize={7} country="us" ref={this.state.refQ} q={this.state.q} apiKey={this.state.apiKey}/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    )
  }
}

// News API Key: 6a9c5e1ffa9040828da980b65aaf3809
// b428bf1a4fde49b1905f94f4a2f86dbc

