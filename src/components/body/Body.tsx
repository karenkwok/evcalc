import Defeated from './defeated/Defeated';
import Team from './team/Team';
import './Body.scss';

const Body = () => {
  return (
    <div>
      <Team />
      <Defeated />
    </div>
  );
};

export default Body;
