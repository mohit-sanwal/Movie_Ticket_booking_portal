import React from "react";
import MovieList from "./movieList/MovieList";
import CarouselContainer from "../core/carouselContainer/CarouselContainer.jsx"
import HomeFeeds from "../core/homeFeeds/HomeFeeds.jsx"

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
       <React.Fragment>
          <CarouselContainer />
          <MovieList />
       </React.Fragment>
    )
  }

}



export default HomePage;
