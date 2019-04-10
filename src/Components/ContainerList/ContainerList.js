import React, { Component } from 'react';
import ContainerItem from './../ContainerItem/ContainerItem'; 

class ContainerList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            error: false,
            isLoaded: false,
            containers: {}
        }; 
    }

    componentDidMount() {
        fetch("//localhost:2376/v1.24/containers/json?all=1")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        error: false,
                        isLoaded: true,
                        containers: result
                    });
                }
            );
    }

    groupedContainers() {
        const states = [];
        
        this.state.containers.map((container) => {
            if(!states.hasOwnProperty(container.State)) {
                states[container.State] = [];
            }
        });

        Object.keys(states).forEach((state) => {
            states[state] = this.state.containers.filter((container) => {
                return container.State === state;
            });
        });

        return states;
    }

    sectionIcon(state) {
        const stateMap = {
            'exited': 'fa fa-stop-circle',
            'running': 'fa fa-play-circle',
            'paused': 'fa fa-pause-circle'
        };

        return stateMap[state];
    }

    sectionTitle(state) {
        return state.charAt(0).toUpperCase() + state.slice(1) + ' Containers';
    }

    render() {
        if(!this.state.isLoaded) {
            return (
                <div>Loading!</div>
            );
        }

        if(this.state.isLoaded) {
            const states = this.groupedContainers();

            return(
                <div className="row">
                    {Object.keys(states).map((state) => {
                        return (
                            <div className="col-sm-12">
                                <div className="col-sm-12 no-pad">
                                    <h2><i className={this.sectionIcon(state)}></i> {this.sectionTitle(state)}</h2>
                                </div>
                                <div className="row">
                                    {states[state].map((container) => {
                                        return <ContainerItem container={container} />
                                    })}
                                </div>
                                <hr />
                            </div>
                        );
                    })}
                </div>
            )
        }
    }
}

export default ContainerList;