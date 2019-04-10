import React, { Component } from 'react';

class ImageItem extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error: false,
            isLoaded: false,
            image: props.image
        }
    }

    render() {
        return(
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5 className="card-title">{this.state.image.RepoTags.join('/')}</h5>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-3">
                                <small className="text-bold">File Size</small>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-9">
                                <small className="text-uppercase">
                                    {(this.state.image.Size / 1000000).toFixed(2)}MB
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageItem;