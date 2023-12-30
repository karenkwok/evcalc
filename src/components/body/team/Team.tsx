import AddPokemon from '../shared/add-pokemon/AddPokemon';
import './Team.scss';

const Team = () => {
  return (
    <div id='team'>
      team
      <div id='team-pokemon'>
        <div className='team-pokemon-row'>
          <AddPokemon />
          <AddPokemon />
        </div>
        <div className='team-pokemon-row'>
          <AddPokemon />
          <AddPokemon />
        </div>
        <div className='team-pokemon-row'>
          <AddPokemon />
          <AddPokemon />
        </div>
      </div>
    </div>
  );
};

export default Team;
