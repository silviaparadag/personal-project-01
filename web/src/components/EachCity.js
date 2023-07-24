import CardFlip from 'react-card-flip';
import { useState } from 'react';

import '../styles/layout/EachCity.scss';



const EachCity = () => {

const [isFlipped, setFlipped] = useState(false);
 
  const handleFlip = (ev) => {
        ev.preventDefault();
        (isFlipped === false ? setFlipped(true) : setFlipped(false)) 
  };

return (
    <>
        <CardFlip isFlipped={isFlipped} flipDirection="horizontal" className="eacharticle">
                <div 
                className='eacharticle__card--front' onClick={handleFlip}> Copenhagen
                
                </div>
                <div className='eacharticle__card--back' onClick={handleFlip}>Iure ullam quibusdam officiis repellat temporibus minima quos ex ipsam, illo non expedita animi excepturi, voluptatibus fuga corporis nisi? 
               </div>
        </CardFlip>
        <li className="eacharticle ">
                Berlin
        </li>
        
        <li className="eacharticle">
                <div className="eacharticle__card">
                        <div className='eacharticle__card--front'>New York City</div>
                </div>
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
    </>
);
}

export default EachCity;