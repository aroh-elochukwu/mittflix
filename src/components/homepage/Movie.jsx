import React from "react";
import {Link } from 'react-router-dom';

const Movie = (props) => {
  const {name, id, overview, vote_average, poster_path } = props.show;
  const movieDetails = 'vvbjbjj';

  const imgSource = `https://image.tmdb.org/t/p/w500/${poster_path}`


  return ( 
    <React.Fragment>
      <div  className="movie">
              <Link  to={'details'} params={{movieDetail : movieDetails}}>
              <img src={imgSource} alt="Movie poster" />
                <div className="overlay">
                  <div className="title">{name}</div>
                  <div className="rating">{vote_average}/10</div>
                  <div className="plot"> {overview}</div>
                </div>
              </Link>
              
              
              <div data-toggled="false" className="listToggle">
                <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
              </div>
            </div>
    </React.Fragment>
   );
}
 
export default Movie;