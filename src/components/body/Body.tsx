import Defeated from './defeated/Defeated';
import Team from './team/Team';
import './Body.scss';

const Body = () => {
  return (
    <div id='body'>
      body
      <div id='body-components'>
        <Team />
        <Defeated />
      </div>
    </div>
  );
};

export default Body;
