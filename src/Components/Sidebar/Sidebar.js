import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss'

class Sidebar extends Component {
    render() {
        return(
            <ul className="sidebar-links">
                <NavLink activeClassName="active-link" to="/containers">
                    <li className="sidebar-link-item">
                        <i className="fa fa-cube mr-2"></i> 
                        Containers
                    </li>                
                </NavLink>
                <NavLink activeClassName="active-link" to="/volumes">                
                    <li className="sidebar-link-item">
                        <i className="fa fa-hdd-o mr-2"></i> 
                        Volumes
                    </li>
                </NavLink>
                <NavLink activeClassName="active-link" to="/networks">                
                    <li className="sidebar-link-item">
                        <i className="fa fa-wifi mr-2"></i> 
                        Networks
                    </li>
                </NavLink>
            </ul>
        )
    }
}

export default Sidebar;