import './Character.css';

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
const Character = ({ character, getID } ) => {


  return (
    <>
      <div className='character'>
        <div id={character.id} className='character-cards' onClick={getID}>
            <p>{character.name}</p>
            <img className="character-img" alt={character.name} src={character.image} />
        </div>
      </div>
     
    </>

  )
}

export default Character