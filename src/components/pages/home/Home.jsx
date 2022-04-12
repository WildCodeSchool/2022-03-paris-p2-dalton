import './Home.css';
import CharacterList from "../../data/CharacterList.jsx";

function Home() {
  return (
    <main>
      <div className='guard'>
      <CharacterList />
      </div>
    </main>
  );
}

export default Home;
