import '../styles/layout/CityList.scss';
import EachCity from './EachCity';

const CityList = () => {
    
    return(
       <main className='main'>
        <ul className='main__list'><EachCity/></ul>
       </main>
    )
}

export default CityList;