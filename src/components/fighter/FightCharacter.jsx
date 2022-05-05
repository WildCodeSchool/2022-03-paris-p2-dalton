import './FightCharacter.css';

// on passe la fonction getID en props afin d'isoler l'id de chacun des héros.
const FightCharacter = ({ character, getID } ) => {


  return (
    <>
      <div className='character'>
        <div id={character.id} onClick={getID}>
            <p>{character.name}</p>
            <img className="character-img" alt={character.name} src={character.image} />
        </div>
      </div>
    </>
  )
}

export default FightCharacter