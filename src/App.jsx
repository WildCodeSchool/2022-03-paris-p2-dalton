import './App.css';
import CharacterList from "./components/data/CharacterList.jsx";
import Header from './components/pages/home/Header';
import Main from './components/pages/home/Main.jsx';
import Footer from './components/pages/home/Footer';


function App() {
  return (
  
      <div className="App">
        <CharacterList />
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
