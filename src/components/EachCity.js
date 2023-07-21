import '../styles/layout/EachCity.scss';



const EachCity = () => {

return (
    <>
        <li className="eacharticle ">
                Berlin
        </li>
        
        <li className="eacharticle">
                <div className="eacharticle__card">
                        <div className='eacharticle__card--front'>New York City</div>
                        <div className='eacharticle__card--back'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, incidunt omnis! </div>
                </div>
        </li>
        <li className="eacharticle">
                Copenhagen
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