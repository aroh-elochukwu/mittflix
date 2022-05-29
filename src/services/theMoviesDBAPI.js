const APIKEY = '2bb854fed0d2d88d8b261f56b15884cc';

const baseURL = `https://api.themoviedb.org/3/discover/tv?api_key=${APIKEY}&language=en-US&watch_region=CA&page=1`


export const getShows = async (company_id) => {
  const response = await fetch(`${baseURL}&with_watch_providers=${company_id}`);
  const movies = await response.json();
  return movies.results;
}