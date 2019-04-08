import React, { Component } from 'react';
import ContainerList from './ContainerList';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid site-container d-flex flex-column flex-wrap">
        <div className="row no-margin">
          <Topbar />
        </div>        
        <div className="row full-height no-margin d-flex flex-row">
          <Sidebar />
          <div className="col">
            <ContainerList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
