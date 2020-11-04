import React from "react";
import Config from "../../config.js"
import "./MovieDetails.css"
class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


bookTicket = () => {
   this.props.history.push(Config.PATH_TO_THEATER_PAGE,  this.props.location.state)
}

  render() {
    const movieDetails = this.props.location && this.props.location.state ? this.props.location.state : null
    return (
       <React.Fragment>
         {Object.keys(movieDetails) ? <div>
            <img src={movieDetails.movieImg } className="mv-details-img" />
            <p> Movie - {movieDetails.moviename} </p>
            <p> Rating -  {movieDetails.movieRating } </p>
            <p> Language - {movieDetails.movieType } </p>
            <button className= "btn btn-success" onClick={this.bookTicket}> book Ticket </button>
         </div> : ""}

       </React.Fragment>
    )
  }

}



export default MovieDetails;
