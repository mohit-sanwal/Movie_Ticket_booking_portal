import React, {useEffect} from "react";
import "./MovieList.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getMoviesList } from "../../../store/actions/actions.js"
import Config from "../../../config.js"

class MovieListComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getMoviesList();
  }

 goToMovieDetailPage = (movie) => {
    let selectedMovie ={};
    this.props.moviesList.forEach((item, i) => {
      if (item.movieId === movie.movieId) {
        selectedMovie = item
      }
    });
    this.props.history.push(Config.PATH_TO_MOVIE_DETAIL_PAGE, selectedMovie)
 }

render() {
  return (
     <div className="movie-container">
       {this.props.moviesList.map((movie, index) =>
         <div className="movie-box" key={index} onClick={() => this.goToMovieDetailPage(movie)}>
             <img className="movie-img" src={movie.movieImg } />
             <div>
                 {movie.moviename}
             </div>
             <div>
               {movie.movieRating}
             </div>
             <div>
                {movie.movieType}
             </div>
          </div>
       )}
     </div>
  )
}
}

const mapStateToProps = (state) => {
  console.log("movie", state)
  return {
    moviesList: state.movieListData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesList: () => dispatch(getMoviesList()),
  };
};
const MovieList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListComp);

export default withRouter(MovieList);
