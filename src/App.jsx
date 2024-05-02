import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { SearchPage } from './components/SearchPage';
import { DetailsPage } from './components/DetailsPage';
import { useDispatch } from 'react-redux';
import { setFilms } from './redux/filmSlice';
import { Tooltip, initTWE, Dropdown, Ripple } from "tw-elements";
import './App.css';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    initTWE({ Tooltip, Dropdown, Ripple });
  }, []);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Lanoriya/json-values/main/films.json')
      .then(response => response.json())
      .then((data) => {
        dispatch(setFilms(data));
      })
      .catch(error => console.error(error));
  }, [dispatch]);

  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/film/:id' element={<DetailsPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}