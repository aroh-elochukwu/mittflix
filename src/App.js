import './App.css';
import Homepage from './components/homepage/Homepage';
import SearchPage from './components/searchPage/SearchPage'; 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import DetailsPage from './components/detailsPage/DetailsPage';
import WatchListPage from './components/watchList/WatchListPage';




function App() {  

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/searchPage' element={<SearchPage/>}/>
        <Route exact path='/details' element={<DetailsPage/>}/>
        <Route exact path='/watchList' element={<WatchListPage/>} />
      </Routes>
    </Router>    
  );
}

export default App;
