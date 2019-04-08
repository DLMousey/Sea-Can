import React, { Component } from 'react';
import './Topbar.scss'

class Topbar extends Component {
    render() {
        return(
            <div className="col-sm-12 no-pad d-flex align-items-center topbar-container">
                <div className="col-sm-2 topbar">
                    BRAND
                </div>
                <div className="col">
                    LINKS
                </div>
            </div>
        );
    }
}

export default Topbar;