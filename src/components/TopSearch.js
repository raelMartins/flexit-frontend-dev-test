import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Notifications';
import HeartIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Chat';
import FiltersIcon from '@material-ui/icons/FilterList';

import 'styles/topsearch.scss';
import { useState } from 'react';

const TopSearch = ({ getSearch }) => {
  const [personQuery, setPersonQuery] = useState('');

  const makeQuery = () => {
    getSearch(personQuery);
    setPersonQuery('');
  };

  return (
    <section>
      <div className="top">
        <div className="search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Find Something..."
            value={personQuery}
            onChange={(e) => setPersonQuery(e.target.value)}
          />
          <button onClick={makeQuery}>Search</button>
        </div>
        <span className="notifications">
          <NotificationIcon />
          <div className="notificationsList">
            <ul>
              <li className="michael">
                <>
                  <img src="/michael.jpg" alt="user" />
                  <span>
                    <h6>Michael liked you!</h6>
                    <p>About 20 minutes ago</p>
                  </span>
                  <HeartIcon />
                </>
              </li>
              <li className="jack">
                <>
                  <img src="/jack.jpg" alt="user" />
                  <span>
                    <h6>Jack liked you!</h6>
                    <p>About 40 minutes ago</p>
                  </span>
                  <HeartIcon />
                </>
              </li>
              <li className="martin">
                <>
                  <img src="/martin.jpg" alt="user" />
                  <span>
                    <h6>Martin commented on your photo</h6>
                    <p>About 56 minutes ago</p>
                  </span>
                  <MessageIcon />
                </>
              </li>
            </ul>
          </div>
        </span>
        <span className="user">
          <img src="/profileimage.jpg" alt="user" />
          <p>Martins</p>
        </span>
      </div>

      <div className="bottom">
        <div className="mobileFilters">
          <h4>Filters</h4>
          <FiltersIcon />
          <ul>
            <li>World</li>
            <li>Following</li>
            <li>Popular</li>
            <li>Post</li>
            <li>Gender</li>
            <li>Location</li>
            <li>Profession</li>
          </ul>
        </div>
        <div className="filters">
          <select>
            <option selected disabled>
              World
            </option>
          </select>
          <select>
            <option selected disabled>
              Following
            </option>
          </select>
          <select>
            <option selected disabled>
              Popular
            </option>
          </select>
          <select>
            <option selected disabled>
              Post
            </option>
          </select>
          <select>
            <option selected disabled>
              Gender
            </option>
          </select>
          <select>
            <option selected disabled>
              Location
            </option>
          </select>
          <select>
            <option selected disabled>
              Profession
            </option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default TopSearch;
