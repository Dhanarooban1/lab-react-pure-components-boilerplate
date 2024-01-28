import React, { PureComponent } from "react";

export class PureCounterComponent extends PureComponent {
 constructor() {
    super();
    this.state = {
      count: 0,
      enableCounter: true
    };
 }

 handleCount = () => {
    this.setState(prev => ({ count: prev.count + 1 }));
 }
 

 toggleCounterButton = () => {
    this.setState(prevState => ({
        enableCounter: !prevState.enableCounter
    }));
}


render() {
     console.log("This is pure Component");

    return (
      <div>
        <h1>PureCounterComponent</h1>
        <h2>{this.state.count}</h2>
         <button onClick={this.toggleCounterButton}>
                    {this.state.enableCounter ? 'Disable Counter' : 'Enable Counter'}
                </button>
        <button onClick={this.handleCount}>Counter</button>
      </div>
    );
 }
}

export default PureCounterComponent;