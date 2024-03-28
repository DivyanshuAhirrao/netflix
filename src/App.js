import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TVShow from './pages/TVShow';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import MoviePage from './pages/MoviePage';
import BackgroundImage from './components/BackgroundImage';
import Headers from './components/Headers';


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/signup' element={<SignUpPage />} />
        <Route exact path='/tvshow' element={<TVShow />} />
        <Route exact path='/' element={<Netflix />} />
        <Route exact path='/player' element={<Player />} />
        <Route exact path='/moviepage' element={<MoviePage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
