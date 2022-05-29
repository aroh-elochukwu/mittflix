import React from "react";
import Header from "../general/Header";

const DetailsPage = (props) => {
  console.log(props.params);

  return ( 
    <React.Fragment>      
      <div id="root">
      <Header/>
      <div class="show-details">
        <img src="https://image.tmdb.org/t/p/original/daXzoOWNBwSoG03RFh5tEqzl1sH.jpg" alt="" />
        <div class="show-details-inner">
          <h1>Love, Death &amp; Robots</h1>
          <div class="description">
            Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David
            Fincher.
          </div>
          <button class="add-to-watchlist">+ Add to watch list</button>
        </div>
      </div>
    </div>
    </React.Fragment>
   );
}
 
export default DetailsPage;