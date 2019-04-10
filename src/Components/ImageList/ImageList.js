import React, { Component } from 'react';

import ImageItem from './../ImageItem/ImageItem'; 

class ImageList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error: false,
            isLoaded: false,
            images: {}
        };
    }

    componentDidMount() {
        fetch("//localhost:2376/v1.24/images/json?all=1")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                error: false,
                isLoaded: true,
                images: result
            })
            console.log(result);
        })
    }

    render() {
        if(this.state.isLoaded) {
            return(
                <div className="col-sm-12">
                    <h2><i className="fa fa-save"></i> Images</h2>
                    <hr /> 
                    <div className="row">
                        {this.state.images.map((image) => {
                            return <ImageItem image={image} />
                        })}
                    </div>
                </div>
            )
        }

        return(
            <div className="row">
                <h2>Images</h2>
                <div className="col-sm-12">Loading...</div>
            </div>
        );
    }
}

export default ImageList;