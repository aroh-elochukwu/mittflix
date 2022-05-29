import Header from '../general/Header';
import StreamingServicePopularShowsShelf from './StreamingServicesPopularShowsShelf';
import React from 'react';

const Homepage = () => {
  const shelves = [
    {'shelfName': 'NetFlix', 'id':8}, 
    {'shelfName': 'Crave', 'id':230}, 
    {'shelfName': 'Disney', 'id':337}, 
    {'shelfName': 'Apple Plus', 'id':350}, 
    ]
  
  return ( 
    <React.Fragment>
      <div id="root">
      <Header/>
      {shelves.map((shelf) => (
        <StreamingServicePopularShowsShelf key={shelf.id} shelf={shelf}/>

      ))}
     </div>
    </React.Fragment>
   );
}
 
export default Homepage;