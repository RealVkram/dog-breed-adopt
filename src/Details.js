import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  // enable the es6 syntax for state instead of the constructor
  // state = {
  //   loading: true,
  // };

  componentDidMount() {
    const { id } = this.props;

    //throws error from the API by the errorboundary wrapped around the details component
    throw new Error("error here");

    pet
      .animal(id)
      .then(({ animal }) => {
        this.setState({
          name: animal.name,
          animal: animal.type,
          location: `${animal.contact.address.city} - ${animal.contact.address.state}`,
          description: animal.description,
          media: animal.photos,
          breed: animal.breeds.primary,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {
      loading,
      name,
      animal,
      description,
      location,
      breed,
      media,
    } = this.state; /*destructured from the initial state and the setstate component */

    if (loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
