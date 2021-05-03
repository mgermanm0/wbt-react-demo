import React, { Component } from "react";
import MyClassComponent from "./MyClassComponent";

//Demo 1: Understanding components behaviour, props and state.
class DemoComponents extends Component {
  //Constructor: Init state and bind this component to incrementCount function
  constructor(props) {
    super(props);

    //We can omit this binding using a arrow function.
    this.incrementCount = this.incrementCount.bind(this);

    //Init state
    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });

    //Execute this function every 1.5 seconds
    //setTimeout(()=>{this.incrementCount()}...)
    setTimeout(this.incrementCount, 1500);
  }
  componentDidMount() {
    //Start counting!
    setTimeout(this.incrementCount, 1500);
  }

  //Render method
  render() {
    return (
      <div className="p-1" style={{ border: "1px solid blue" }}>
        <h2>Main component</h2>
        <p>
          The value of <code>this.state.count</code> is <em>{this.state.count}</em>
        </p>
        <div className="m-2 p-1" style={{ border: "1px solid red" }}>
          <h4>Child components</h4>
          <MyClassComponent />
          <MyClassComponent text="not a default text" />
          <MyClassComponent text={this.state.count} />
        </div>
      </div>
    );
  }
}

export default DemoComponents;
