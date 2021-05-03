import React, { Component } from "react";
import CatImage from "./CatImage";
import Button from "react-bootstrap/Button";

const apikey = "2127a4e8-0c03-4517-ad94-7d253ce5ef4f";
const catHeaders = {
  "Content-Type": "application/json",
  "x-api-key": apikey,
};

//Main component that will fetch cats imgs and will create as many cards as needed.
class CatGallery extends Component {
  //Constructor: We initialize the state of the component.
  constructor(props) {
    super(props);
    this.state = {
      cats: 5,
      seen: 0,
      page: 0,
      urls: [],
    };
  }

  //Init the gallery with "cats" cats.
  //... = spread operator
  initCats() {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${this.state.cats}&page=${this.state.page}`,
      {
        headers: catHeaders,
      }
    )
      .then((res) => res.json())
      .then((cats) => {
        console.log(cats);
        this.setState((prevState, props) => ({
          seen: this.state.cats,
          urls: [...cats.map((e) => ({ id: e.id, url: e.url }))],
        }));
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  //Method used to get a new page of cats. It will append this.state.cats cats to the this.state.urls list
  newPage() {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${this.state.cats}&page=${this.state.page}`,
      {
        headers: catHeaders,
      }
    )
      .then((res) => res.json())
      .then((cats) => {
        console.log(cats);
        this.setState((prevState, props) => ({
          seen: prevState.seen + this.state.cats,
          urls: [
            ...this.state.urls,
            ...cats.map((e) => ({ id: e.id, url: e.url })),
          ],
        }));
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }

  //setState changes are not instant! Use the callback to get the new page when the new state is ready.
  getCats() {
    this.setState((prevState, props) => {
      return { page: prevState.page + 1 };
    }, this.newPage);
  }

  //Reset the gallery. Clean all the urls and set the page to 0.
  reset() {
    this.setState((prevState, props) => {
      return {
        page: 0,
        urls: [],
      };
    }, this.initCats);
    
  }

  componentDidMount() {
    console.log("Did mount!");
    this.initCats();
  }

  render() {
    return (
      <div>
        <h3>Whao! You've seen {this.state.seen} cats</h3>
        <Button
          onClick={() => {
            this.reset();
          }}
        >
          Reset Gallery
        </Button>
        <div className="d-flex flex-wrap">
          {this.state.urls.map((cat, index) => {
            return (
              <CatImage
                url={cat.url}
                key={cat.id}
                index={index}
                onClickRefresh={() => {
                  this.refreshCat(index);
                }}
              />
            );
          })}
        </div>
        <Button
          onClick={() => {
            this.getCats();
          }}
        >
          Load more!!!
        </Button>
      </div>
    );
  }
}

export default CatGallery;
