import React, { Component } from "react";
import MyFunctionComponent from "./MyFunctionComponent";

/**
 * React component defined as a class
 */
class MyClassComponent extends Component {

  //Constructor. Mounting phase
  constructor(props) {
    super(props);
    console.log("Example 2: In constructor");
    //Define the state. In this case, a css value
    this.state = {
      hidden: "hidden",
    };
  }

  //Function used to change the state of this component.
  notifyClick() {
    this.setState((prevState) => {
      return {
        hidden: prevState.hidden === "hidden" ? "visible" : "hidden",
      };
    });
  }

  //Mounting phase: function called when the component Is mounted
  componentDidMount() {
    console.log("Example 2: Did mount");
  }

  //Updating phase: function called when the component is updated
  componentDidUpdate(prevProps, prevState) {
    console.log("Example 2: Did update.");
  }

  //Render function. A class component uses the function component
  render() {
    console.log("Example 2: Rendering");
    return (
      <div class="m-2 p-1" style={{ border: "1px solid aqua" }}>
        <p>
          I'm a <code>MyClassComponent</code> component! The value of <code>this.props.text</code> is <em>{this.props.text}</em>
        </p>
        <p>The value of <code>this.state.hidden</code> is <em>{this.state.hidden}</em></p>
        <p
          style={{
            visibility: this.state.hidden,
          }}
        >
          Someone clicked <code>MyFunctionComponent</code>'s button
        </p>
        <MyFunctionComponent
          value={this.props.text}
          notifyClick={() => {
            this.notifyClick();
          }}
        />
      </div>
    );
  }
}

//Default props definition
MyClassComponent.defaultProps = {
  text: "Default text",
};

//Export the component!
export default MyClassComponent;
