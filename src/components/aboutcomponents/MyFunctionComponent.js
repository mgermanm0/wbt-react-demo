import React, { useState } from "react";

/**
 * React component defined as a function
 */
const MyFunctionComponent = (props) => {
  //Hooks! In a function we have to use them to achieve the same behaviour as a class!
  //Learn more about hooks at: https://reactjs.org/docs/hooks-reference.html
  const [hidden, setHidden] = useState("visible");

  //Checkout how we update the state of the component usign the setter method
  return (
    <div className="m-2 p-1 d-flex" style={{ border: "1px solid green" }}>
      <p className="flex-fill">
        I'm a <code>MyFunctionComponent</code> component! You can include
        methods in the component props. Click the button!
      </p>
      <p className="flex-fill">
        The value of <code>hidden</code> state hook is <em>{hidden}</em>
      </p>
      <button
        onClick={() => {
          setHidden(hidden === "hidden" ? "visible" : "hidden");
          props.notifyClick();
        }}
        className="mx-2 flex-fill"
      >
        {props.value}
      </button>
      <p
        className="flex-fill"
        style={{
          visibility: hidden,
        }}
      >
        Hello!
      </p>
    </div>
  );
};

MyFunctionComponent.defaultProps = {
  value: "You shouldn't be seeing me!",
};

export default MyFunctionComponent;
