import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
  const searchMovieHandler = (event) => {
    event.preventDefault();
    console.log('bhefianf');
    console.log(event.target.value);
    // searchMovie(event.target.value);

  };

  return ( 
    <React.Fragment>
      <header className="header">
        <Link to="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></Link>
        <div id="navigation" className="navigation">
          <nav>
            <ul>
              <li><Link to="watchList">Watch List</Link></li>
            </ul>
          </nav>
        </div>
        <form id="search" className="search">
          <input 
          onSubmit={searchMovieHandler}
          type="search" 
          placeholder="Search for a title..." 
          // value=''
          />
          <div className="searchResults"></div>
        </form>
      </header>
    </React.Fragment>
   );
}
 
export default Header;