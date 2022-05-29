import React from "react";
import Movie from "./Movie";
import { getShows } from "../../services/theMoviesDBAPI";
import { useState, useEffect } from "react";

const StreamingServicePopularShowsShelf = (props) => {
  const {shelfName, id} = props.shelf;
  const [shows, setShows] = useState([]);

  useEffect(() => {
    getShows(id).then((shows) => setShows(shows));
  }, [])

  return ( 
    <React.Fragment>
      <div className="titleList">
        <div className="title">
          <h1>{shelfName}</h1>
          <div className="titles-wrapper">
            {shows.map((show) => (
              <Movie key={show.id} show={show}/>
            ))}
          </div>
        </div>
      </div>      
    </React.Fragment>
   );
}
 
export default StreamingServicePopularShowsShelf ;