import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Fight from '../fight/Fight.jsx';

function Main() {
  return (
  
      <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="Character" element={<Character />} /> */}
            {/* <Route path="Match" element={<Match />} /> */}
            <Route path="fight" element={<Fight />} />
            {/* <Route path="Shop" element={<Shop />} /> */}
          </Routes>
      </main>
  );
}

export default Main;