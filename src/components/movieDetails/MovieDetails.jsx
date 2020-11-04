import React from "react";
import Config from "../../config.js"
import "./MovieDetails.css"
import HomeFeeds from "../core/homeFeeds/HomeFeeds"
class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


bookTicket = (data) => {
    this.props.history.push(Config.PATH_TO_THEATER_PAGE,  this.props.location.state)
}

movieDetails = (data) => {
  this.props.history.push(Config.PATH_TO_MOVIE_DETAIL_PAGE,  data)
}

  render() {
    const movieDetails = this.props.location && this.props.location.state ? this.props.location.state : null
    return (
       <React.Fragment>
         {Object.keys(movieDetails) ? <div className="mv-details-bg">
            <img src={movieDetails.movieImg } className="mv-details-img" />
            <p> Movie - {movieDetails.moviename} </p>
            <p> Rating -  {movieDetails.movieRating } </p>
            <p> Language - {movieDetails.movieType } </p>
            <button className= "btn btn-success mb-5" onClick={this.bookTicket}> book Ticket </button>
         </div> : ""}
         <p className="mb-5"><b> Recommended -</b> </p>
         <HomeFeeds movieDetails={this.movieDetails}/>
       </React.Fragment>
    )
  }

}



export default MovieDetails;
