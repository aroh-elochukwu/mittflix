import React from "react";


const WatchListPage = () => {
  return ( 
    <React.Fragment>
      <div id="root">
      <header class="header">
        <a href="/"><img src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png" alt="netflix-font" border="0" /></a>
        <div id="navigation" class="navigation">
          <nav>
            <ul>
              <li><a href="/my-watch-list">Watch List</a></li>
            </ul>
          </nav>
        </div>
        <form id="search" class="search">
          <input type="search" placeholder="Search for a title..." value="" />
          <div class="searchResults"></div>
        </form>
      </header>
      <div class="titleList">
        <div class="title">
          <h1>My Watch List</h1>
          <div class="titles-wrapper">
            <div class="movie">
              <a href="/details/1416"
                ><img src="https://image.tmdb.org/t/p/w500/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg" alt="Movie poster" />
                <div class="overlay">
                  <div class="title">Grey's Anatomy</div>
                  <div class="rating">8.2/10</div>
                  <div class="plot">Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.</div>
                </div></a
              >
              <div data-toggled="true" class="listToggle">
                <div><i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i></div>
              </div>
            </div>
            <div class="movie">
              <a href="/details/93484"
                ><img src="https://image.tmdb.org/t/p/w500/9yxep7oJdkj3Pla9TD9gKflRApY.jpg" alt="Movie poster" />
                <div class="overlay">
                  <div class="title">Jupiter's Legacy</div>
                  <div class="rating">7.4/10</div>
                  <div class="plot">
                    When the world's first generation of superheroes received their powers in the 1930s become the revered elder guard in the present, their
                    superpowered children struggle to live up to the legendary feats of their parents.
                  </div>
                </div></a
              >
              <div data-toggled="true" class="listToggle">
                <div><i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i></div>
              </div>
            </div>
            <div class="movie">
              <a href="/details/63174"
                ><img src="https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg" alt="Movie poster" />
                <div class="overlay">
                  <div class="title">Lucifer</div>
                  <div class="rating">8.5/10</div>
                  <div class="plot">
                    Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD
                    detective Chloe Decker to take down criminals.&nbsp;But the longer he's away from the underworld, the greater the threat that the worst of
                    humanity could escape.
                  </div>
                </div></a
              >
              <div data-toggled="true" class="listToggle">
                <div><i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i></div>
              </div>
            </div>
            <div class="movie">
              <a href="/details/86831">
                <img src="https://image.tmdb.org/t/p/w500/asDqvkE66EegtKJJXIRhBJPxscr.jpg" alt="Movie poster" />
                <div class="overlay">
                  <div class="title">Love, Death &amp; Robots</div>
                  <div class="rating">8.2/10</div>
                  <div class="plot">
                    Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David
                    Fincher.
                  </div>
                </div></a>
              <div data-toggled="true" class="listToggle">
                <div><i class="fa fa-fw fa-plus"></i><i class="fa fa-fw fa-check"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </React.Fragment>
   );
}
 
export default WatchListPage ;