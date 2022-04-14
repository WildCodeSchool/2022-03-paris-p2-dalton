import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home.jsx';
import Fight from './pages/fight/Fight.jsx';
import CharacterDetails from "./data/CharacterDetails";


function App() {
  return (
        <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="heroes" element={<Heroes />  */}
            {/* <Route path="Match" element={<Match /> */}
            <Route path="fight" element={<Fight />} />
            {/* <Route path="Shop" element={<Shop /> */}
            <Route path="/character/:id" element={<CharacterDetails />} />
        </Routes>
      </div>
  );
}

export default App;
