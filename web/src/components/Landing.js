import { Link } from 'react-router-dom';

import '../styles/layout/Landing.scss';


const Landing = () => {

return (
    <div className='landing'>
        <Link className='landing__btn' to="/Home">
          GO
        </Link>

    </div>

);
}

export default Landing;