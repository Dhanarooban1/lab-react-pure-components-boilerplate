import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Count: 0,
            enableCounter: true
        };
    }

    counter = () => {
        if (this.state.enableCounter) {
            this.setState(prevState => ({
                Count: prevState.Count + 1
            }));
        }
    }

    toggleCounterButton = ()     => {
        this.setState(prevState => ({
            enableCounter: !prevState.enableCounter
        }));
    }

    render() {
        console.log("This is Simple Component");
        return (
            <div>
                  <h1>SimpleCounterComponent</h1>
                <h1>{this.state.Count}</h1>
                <button onClick={this.counter} disabled={!this.state.enableCounter} >
                    Counter
                </button>
                <button onClick={this.toggleCounterButton}>
                    {this.state.enableCounter ? 'Disable Counter' : 'Enable Counter'}
                </button>
            </div>
        );
    }
}
