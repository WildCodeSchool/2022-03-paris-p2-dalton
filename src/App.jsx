import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home.jsx";
import Fight from "./pages/fight/Fight.jsx";
import Heroes from "./pages/heroes/Heroes.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="heroes" element={<Heroes />} />
        <Route path="fight" element={<Fight />} />
      </Routes>
    </div>
  );
}

export default App;
