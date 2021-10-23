import LocationIcon from '@material-ui/icons/PinDrop';
import ThumbsDownIcon from '@material-ui/icons/ThumbsUpDown';
import HeartIcon from '@material-ui/icons/FavoriteBorder';

import 'styles/people.scss';

const People = ({ people }) => {
  const peopleList = people.map((el, i) => (
    <div className="person">
      <div className="personInfo" key={i}>
        <img src={el.image} alt="myimage" />
        <div className="userInfo">
          <h5>
            {el.name}, {el.age}
          </h5>
          <p>
            <LocationIcon /> {el.location}
          </p>
          <div>
            <button className="like">
              <HeartIcon />
            </button>
            <button className="dislike">
              {' '}
              <ThumbsDownIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  ));
  return <section className="people">{peopleList}</section>;
};

export default People;
