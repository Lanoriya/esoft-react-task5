import { Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { SearchPage } from './components/SearchPage';
import { DetailsPage } from './components/DetailsPage';
import { useEffect, useState } from "react";
import { Tooltip, initTWE, Dropdown, Ripple } from "tw-elements";
import './App.css';

export function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    initTWE({ Tooltip, Dropdown, Ripple });
  }, []);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Lanoriya/json-values/main/films.json')
      .then(response => response.json())
      .then((data) => {
        setFilms(data)
      })
      .catch(error => console.error(error))
  }, [])

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<MainPage films={films}/>}/>
        <Route path='/search' element={<SearchPage films={films}/>} />
        <Route path='/details' element={<DetailsPage films={films}/>} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}