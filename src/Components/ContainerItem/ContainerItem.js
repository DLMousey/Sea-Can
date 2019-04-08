import React, { Component } from 'react';

class ContainerItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        console.log(this.props.container);
        return(
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.container.Names[0].replace('/', '')}</h5>
                    <p className="card-text">
                        <ul>
                            <li>
                                Id: {this.props.container.Id}
                            </li>
                            <li>
                                Image: {this.props.container.Image}
                            </li>
                            <li>
                                Status: {this.props.container.Status}
                            </li>
                            {/* <li> */}
                                {/* Labels: {this.props.container.Labels.map((value, index) => { */}
                                    {/* return <span>{index} - {value}</span> */}
                                {/* })} */}
                            {/* </li> */}
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

export default ContainerItem;