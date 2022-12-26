
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  // apikey=process.env.REACT_APP_NEWZZAPI
  render() {
    return (
      <div>
        <Router>
           <Navbar/>
           {/* <LoadingBar
        color='#f11946'
        progress={1}
      /> */}
        <Routes>
        <Route exact path="/"element={<News key="general" category="general"/>}/>
        <Route exact path="/health"element={<News key="health" category="health"/>}/>
        <Route exact path="/general"element={<News key="general"category="general"/>}/>
        <Route exact path="/entertainment"element={<News key= "entertainment"category="entertainment"/>}/>
        <Route exact path="/sports"element={<News key="sports"category="sports"/>}/>
        <Route exact path="/technology"element={<News key="technology"category="technology"/>}/>
        <Route exact path="/science"element={<News key="science"category="science"/>}/>
        <Route exact path="/business"element={<News key="business"category="business"/>}/>
      </Routes>
        </Router>
      </div>

    )
  }
}
// export default App;
