import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home.jsx';
import Fight from './pages/fight/Fight.jsx';
import Match from "./pages/match/Match.jsx";
import CharacterDetails from "./data/CharacterDetails";
import Shop from './pages/shop/Shop.jsx';



function App() {
  return (
        <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
              {/* <Route path="heroes" element={<Heroes />  */}
            <Route path ="match" element = {<Match/>}/>
            <Route path="fight" element={<Fight />} />
            {/* <Route path="Shop" element={<Shop /> */}
{/*            <Route path="/character/:id/fight" element={<CharacterDetails />} />*/}
            <Route path="/:id/fight" />
            <Route path="shop" element={<Shop />} />
        </Routes>
      </div>
  );
}

export default App;
