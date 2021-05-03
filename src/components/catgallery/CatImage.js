import React, { Component } from "react";
import Card from "react-bootstrap/Card";

/**
 * Component that represents a cat image card
 */
class CatImage extends Component {

  //Clicks are in the state, because they can change
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  //Component can now access the dom
  componentDidMount() {
    console.log("Did mount!");
  }

  //Add pets when the card is clicked
  onCardClick() {
    this.setState((prevState) => {
      return {
        clicks: prevState.clicks + 1,
      };
    });
  }

  //You can use JS rendering a component => conditional rendering
  render() {
    let cardStyle = {
      width: "18rem",
      backgroundColor: this.state.clicks >= 10 ? 'yellow' : 'white'
    }
    let clicksText = this.state.clicks < 10 ? `Petted ${this.state.clicks} times!` : "Stop!";
    return (
      <Card
        className="m-2"
        style={cardStyle}
        onClick={() => {
          this.onCardClick();
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.url}
          style={{ height: "12rem" }}
        />
        <Card.Body>
          <p>Index on gallery: {this.props.index}</p>
          <p>{clicksText}</p>
          <small>Click to pet this cat</small>
        </Card.Body>
      </Card>
    );
  }
}

export default CatImage;
