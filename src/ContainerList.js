import React, { Component } from 'react';
import ContainerItem from './Components/ContainerItem/ContainerItem';

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

    render() {
        if(!this.state.isLoaded) {
            return (
                <div>Loading!</div>
            );
        }

        if(this.state.isLoaded) {
            const states = this.groupedContainers();

            return(
                <div>
                    {Object.keys(states).map((state) => {
                        return (
                            <div>
                                <h2>{state}</h2>
                                {states[state].map((container) => {
                                    return <ContainerItem container={container} />
                                })}
                            </div>
                        );
                    })}
                </div>
            )
        }
    }
}

export default ContainerList;