import { Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
import { MainPage } from './components/MainPage';
import { SearchPage } from './components/SearchPage';
import { DetailsPage } from './components/DetailsPage';
import './App.css';

export function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route exact path='/' element={<MainPage />}/>
        <Route path='/search' element={<SearchPage />} />
        <Route path='/details' element={<DetailsPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}