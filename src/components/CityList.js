import '../styles/layout/CityList.scss';
import EachCity from './EachCity';

const CityList = () => {
    
    return(
       <main className='main'>
        <h3 className='main__title'>The Collection</h3>
        <form action="">
            <label htmlFor="city"></label>
            <input type="text" name="city" id="city" placeholder='Search a city' />
        </form>
        <ul className='main__list'><EachCity/></ul>
       </main>
    )
}

export default CityList;