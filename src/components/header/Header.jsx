import './Header.css';
import { Link } from 'react-router-dom';
import wildheroes from '../../assets/images/wildheroes.svg'
import burger from '../../assets/images/burger-menu.svg';
import cadie from '../../assets/images/cadie.svg';
import { useState } from 'react';


function Header() {

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  //On crée une fonction qui ferme le menu
  const close = (e) => {
    document.getElementById('input').checked = false;
  }


  return (
    <>
      <header className="header">
        <div className='header-navbar'>
          <div className='header-logo'>
            <img height="60rem" src={wildheroes}/>
          </div>
          <div className='desk-nav'>
            <ul className="menu-desk">
              <li>
                <Link to="/" className="link">Home</Link>  
              </li>
              <li>All heroes
            {/*    <Link to="heroes" className="link">All heroes</Link>  */}  
              </li>
              <li>
                <Link to="/fight" className="link">Fight</Link>
              </li>
              <li>Match your heroes
                {/* <Link to="Match" className="link">Match your heroes</Link>  */}
              </li>
              <li>
                  <Link to="shop" className="link">Heroes shop</Link> 
              </li>
            </ul>
          </div>
          <div className='header-burger'>

              <input className="menu-btn" type="checkbox" id="menu-btn" onClick={toggleVisible} />
              <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>

  {/* 
            <img className='burger-menu' for="toggle-btn" src={burger} alt='burger-menu' />
  */}  

      {isVisible && 
                <ul className="menu">
                  <li>
                    <Link to="/" onClick={close} className="link">Home</Link>  
                  </li>
                  <li>All heroes
                  {/*  <Link to="heroes" className="link">All heroes</Link> */}   
                  </li>
                  <li>
                    <Link to="fight" onClick={close} className="link">Fight</Link>
                  </li>
                  <li>Match your heroes
                    {/* <Link to="Match" className="link">Match your heroes</Link>  */}
                  </li>
                  <li>
                    <Link to="shop" onClick={close} className="link">Heroes shop</Link>
                  </li>
                </ul>
    }
              </div>
            </div>
        <div className='header-cadie'>
          <img height="" src={cadie} alt='cadie'/>
        </div>

      </header>
    </>
  );
}

export default Header;