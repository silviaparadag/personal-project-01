// import { Link } from 'react-router-dom';
// import { useEffect, useState } from "react";
// import dataApi from '../services/api';
import EachCity from './EachCity';
import '../styles/layout/CityList.scss';



const CityList = ({cityArchive}) => {


  const cityHTML =  cityArchive.map(
    (eachCity) => (
      <li key={eachCity.idcity} className="eacharticle">
         <a className='link' href="/#"> 
         <EachCity eachCity={eachCity} /> </a>
        </li>
    ));
    
    return(
        <ul className='main__list'>{cityHTML}</ul>
    )
}

export default CityList;


