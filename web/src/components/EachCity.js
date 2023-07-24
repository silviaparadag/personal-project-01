import CardFlip from 'react-card-flip';
import { useState } from 'react';

import '../styles/layout/EachCity.scss';



const EachCity = ({eachCity}) => {

const [isFlipped, setFlipped] = useState(false);
 
  const handleFlip = (ev) => {
        ev.preventDefault();
        (isFlipped === false ? setFlipped(true) : setFlipped(false)) 
  };

return (
    <>
        <CardFlip isFlipped={isFlipped} flipDirection="horizontal" className="eacharticle">
                <div 
                className='eacharticle__card--front' onClick={handleFlip}> 
                <img className='eacharticle__card--frontimg' src={eachCity.city_img} alt={eachCity.city_name} /> 
                <div className='eacharticle__card--fronttitle'>{eachCity.city_name}</div>
                </div>
                <div className='eacharticle__card--back' onClick={handleFlip}>{eachCity.city_desc_short}
               </div>
        </CardFlip>
    </>
);
}

export default EachCity;

/*  CITY LIST
        <li className="eacharticle ">
                Berlin
        </li>
         <li className="eacharticle">
                Milan
        </li>
        <li className="eacharticle">
                Lisbon
        </li>
        <li className="eacharticle">
                Madrid
        </li>
        <li className="eacharticle">
                Marrakech
        </li>
        <li className="eacharticle">
                Beirut
        </li>
        <li className="eacharticle">
                Singapore
        </li>
        <li className="eacharticle">
                Beijing
        </li> 
*/