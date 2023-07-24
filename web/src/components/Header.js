import '../styles/layout/Header.scss';
import menuLogo from '../images/icons/ico-menu.svg';
//import cityHero from '../images/berlin/berlin-01.jpg';
//import MenuBar from './MenuBar';

const Header = () => {
    
    return(
      <div className="nav">
        <header className="header">
            {/* <MenuBar/> */}
          <a href="https://adalab.es/" target="_blank" rel='noreferrer'>
                  <img className="header__title--logo" src={menuLogo}
                    alt="Menu desplegable"/></a>
          <h1 className="header__title">CITIES</h1>
                  {/* <img className="header__title--img"src={cityHero} alt="Foto de la Neue National Gallerie de Berlin" /> */}
          </header>
      </div>
    )
}

export default Header;