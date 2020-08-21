import React, { Component } from "react";

class Carousel extends Component {
  constructor() {
    super();

    this.handleIndexClick = this.handleIndexClick.bind(this);

    this.state = {
      photos: [],
      active: 0,
    };
  }
  //special react methods that takes in a set of props and gives a new state
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }
  //DOM API === event.target.dataset.value check MDN docs fr more details

  handleIndexClick(event) {
    this.setState({
      active: +event.target.dataset.index,
    });
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel-smaller">
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
