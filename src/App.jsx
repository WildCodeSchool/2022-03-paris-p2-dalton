import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home.jsx';
import Fight from './pages/fight/Fight.jsx';
import Match from "./pages/match/Match.jsx";


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
        </Routes>
      </div>
  );
}

export default App;
