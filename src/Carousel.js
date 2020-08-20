import React, { Component } from "react";

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      photos: [],
      active: 0,
    };
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div>
          {photos.map((photo, idx) => (
            //eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={idx}
              src={photo}
              className={idx === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
