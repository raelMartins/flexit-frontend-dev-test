import PartyIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import MessageIcon from '@material-ui/icons/Mail';
import RankingIcon from '@material-ui/icons/TrendingUp';
import ConnectIcon from '@material-ui/icons/CastConnected';
import ParadeIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import ChallengeIcon from '@material-ui/icons/ThumbsUpDownOutlined';
import CloseIcon from '@material-ui/icons/Close';

import 'styles/navigation.scss';

const Navigation = ({ toggleMenu, viewMenu }) => {
  return (
    <nav className="navigation" style={viewMenu ? { width: 170 } : {}}>
      <span className="closeIcon" onClick={toggleMenu}>
        <CloseIcon />
      </span>
      <h5 className="logo">
        <HomeIcon />
        <span>bluecube</span>
      </h5>
      <ul>
        <li className="homeOption">
          <HomeIcon />
          <span>Home</span>
        </li>
        <li>
          <MessageIcon />
          <span>Message</span>
        </li>
        <h6>SHARE</h6>
        <li>
          <RankingIcon />
          <span>Ranking</span>
        </li>
        <li>
          <ChallengeIcon />
          <span>Challenge</span>
        </li>
        <li>
          <PartyIcon />
          <span>Party</span>
        </li>
        <li>
          <ConnectIcon />
          <span>Connect</span>
        </li>
        <li>
          <ParadeIcon />
          <span>Parade</span>
        </li>
        <li>
          <GroupIcon />
          <span>Group</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
