import React, { Component } from 'react';
import './Sidebar.scss'

class Sidebar extends Component {
    render() {
        return(
            <div className="col-sm-2 sidebar no-pad">
                <ul className="sidebar-links">
                    <li className="sidebar-link-item">
                        <i className="fa fa-cube"></i> Containers
                    </li>
                    <li className="sidebar-link-item">
                        <i className="fa fa-hdd-o"></i> Volumes
                    </li>
                    <li className="sidebar-link-item">
                        <i className="fa fa-wifi"></i> Networks
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;