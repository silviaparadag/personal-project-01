import '../styles/App.scss';

import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import dataApi from '../services/api';
import ls from '../services/localStorage';
import Landing from './Landing';
import Header from './Header';
import Filters from './Filters';
import CityList from './CityList';
import Footer from './Footer';

//import {Link, Route, Routes} from 'react-router-dom';

const App = () => {
  const [cityArchive, setCityArchive] = useState(ls.get('cities', []));
  const [searchByCity, setSearchByCity] = useState('');

  const handleFilter = (ev) => {
    setSearchByCity(ev);
  };
  useEffect(() => {
    if (ls.get('cities', null) === null) {
      dataApi.getCitiesApi().then((dataJson) => {
        setCityArchive(dataJson);
        ls.set('cities', dataJson);
      });
    }
  }, []);

  const filteredCities = cityArchive.filter((eachCity) =>
    eachCity.city_name.toLowerCase().includes(searchByCity.toLowerCase())
  );
  console.log(cityArchive);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route
          path="/Home"
          element={
            <>
              <Header />
              <main className="main">
                <h3 className="main__title">The Collection</h3>
                <Filters
                  searchByCity={searchByCity}
                  handleFilter={handleFilter}
                />
                <CityList cityArchive={filteredCities} />
              </main>
            </>
          }
        ></Route>
        {/* <Route path='*' element={<NotFoundPage/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
