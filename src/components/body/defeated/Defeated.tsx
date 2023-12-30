import AddPokemon from '../shared/add-pokemon/AddPokemon';
import './Defeated.scss';

const Defeated = () => {
  return (
    <div id='defeated'>
      defeated
      <div id='defeated-pokemon'>
        <div className='defeated-pokemon-row'>
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
        </div>
        <div className='defeated-pokemon-row'>
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
        </div>
        <div className='defeated-pokemon-row'>
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
        </div>
        <div className='defeated-pokemon-row'>
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
          <AddPokemon />
        </div>
      </div>
    </div>
  );
};

export default Defeated;
