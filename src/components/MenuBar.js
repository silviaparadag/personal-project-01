import { slide as Menu } from 'react-burger-menu';
import { useState } from 'react';
import '../styles/layout/MenuBar.scss';

const MenuBar = () => {
  const [menuOpenState, setMenuOpenState] = useState(false);
 
  const handleMenuBar = () => {
    if (menuOpenState === false) {
      return setMenuOpenState(true);
    } else {
      setMenuOpenState(false);
    }
  };

  return (
      <Menu isOpen={ menuOpenState }>
        <a  className="menu__text" href="/#" alt="Inicio" onClick={handleMenuBar}>
          Home
        </a>
        <a className="menu__text"  href="/#" alt="Cities">
          Cities
        </a>
        <div>
          <ul className="menu__sm">
              <li>
                <a
                  className="menu__sm--icon"
                  href="https://github.com/silviaparadag"
                  alt="Silvia Paradas's Github"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github-alt" />
                </a>
              </li>
              <li>
                <a
                  className="menu__sm--icon"
                  href="https://www.linkedin.com/in/silvia-parada-905b246/"
                  alt="Silvia's LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
        </div>
      </Menu>
  );
};
export default MenuBar;