import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

// App Components
import App from './App';
import ContainerList from './Components/ContainerList/ContainerList';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import NotFound from './Components/NotFound/NotFound';

const routing = (
    <Router>
        <div className="container-fluid site-container d-flex flex-column flex-wrap">
            <div className="row no-margin">
                <Topbar />
            </div>        
            <div className="row full-height no-margin d-flex flex-row">
                <div className="col-sm-2 sidebar no-pad">
                    <Sidebar />
                </div>
                <div className="col">
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/containers" component={ContainerList} />
                        <Route path="/top-bar" component={Topbar} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </div>
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
