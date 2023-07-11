import '../styles/App.scss';

import { useState } from 'react';
import {Route, Routes} from 'react-router-dom';

import Landing from './Landing';
import Header from './Header';
import Filters from './Filters';
import CityList from './CityList';
import Footer from './Footer';


//import {Link, Route, Routes} from 'react-router-dom';

const App = ()  => {

  const [searchByCity, setSearchByCity] = useState('');


  const handleFilter = (ev) => {
    setSearchByCity(ev.target.value);
  }


  return (
    <div className="App"> 
      <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/Home" element={<><Header/>
            <main className='main'>
              <h3 className='main__title'>The Collection</h3>
              <Filters searchByCity={searchByCity} handleFilter={handleFilter} />
              <CityList/>
            </main>
            </>}>
          </Route>
          {/* <Route path='*' element={<NotFoundPage/>}/> */}
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;