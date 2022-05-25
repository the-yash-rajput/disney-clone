import React from 'react';
import {
  BrowserRouter as Router, Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route> */}
          {/* <Route path="/detail/:id">
            <Detail />
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
