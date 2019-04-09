import React, { Component } from 'react';

class ContainerItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        console.log(this.props.container);
        return(
            <div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5 className="card-title">{this.props.container.Names[0].replace('/', '')}</h5>
                            </div>
                            <div className="col-sm-12">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <small className="text-bold">Container ID</small>
                                    </div>
                                    <div className="col-sm-9">
                                        <small className="text-uppercase">{this.props.container.Id}</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <small className="text-bold">Image</small>
                                    </div>
                                    <div className="col-sm-9">
                                        <small className="text-uppercase">{this.props.container.Image}</small>
                                    </div>
                                    <div className="col-sm-3">
                                        <small className="text-bold">Status</small>
                                    </div>
                                    <div className="col-sm-9">
                                        <small className="text-uppercase">{this.props.container.Status}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContainerItem;