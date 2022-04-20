import "./Header.css";
import { Link } from "react-router-dom";
import wildheroes from "../../assets/images/wildheroes.svg";
import burger from "../../assets/images/burger-menu.svg";
import cadie from "../../assets/images/cadie.svg";

function Header() {
  //On crée une fonction qui ferme le menu
  const close = (e) => {
    /*e.preventDefault();*/
    console.log("coucou");
    console.log(document.getElementById("input").checked);
    document.getElementById("input").checked = false;
    console.log(document.getElementById("input").checked);
  };

  return (
    <>
      <header className="header">
        <div className="header-navbar">
          <div className="header-logo">
            <img height="60rem" src={wildheroes} />
          </div>
          <div className="header-burger">
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
              <span className="navicon"></span>
            </label>

            {/*            
            <input type="checkbox" className="toggle-btn"/>
            {/*
            <div class="burger-menu"></div>
 
            <img className='burger-menu' for="toggle-btn" src={burger} alt='burger-menu' />
  */}
            <ul className="menu">
              <li onClick={close}>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                All heroes
                {/*  <Link to="heroes" className="link">All heroes</Link> */}
              </li>
              <li onClick={close}>
                <Link to="fight" className="link">
                  Fight
                </Link>
              </li>
              <li>
                Match your heroes
                {/* <Link to="Match" className="link">Match your heroes</Link>  */}
              </li>
              <li>
                Shop
                {/* <Link to="Shop" className="link">Heroes shop</Link> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="header-cadie">
          <img height="" src={cadie} alt="cadie" />
        </div>
      </header>
    </>
  );
}

export default Header;
