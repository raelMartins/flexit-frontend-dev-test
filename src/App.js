import { useEffect, useState } from 'react';
import axios from 'axios';
import MenuIcon from '@material-ui/icons/Menu';

import Navigation from 'components/Navigation';
import TopSearch from 'components/TopSearch';
import People from 'components/People';

import 'styles/App.scss';

function App() {
  const [viewMenu, setViewMenu] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => setViewMenu(!viewMenu);

  const apiKey = 'lp3lFTtp3ObjT1mw75kPoF1zOWXdvvaPQ-_Nx0d0W9Y';

  const getSearch = async (query) => {
    try {
      const res = await axios({
        method: 'GET',
        url: `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${query}&orientation=portrait`
      });
      console.log(res);
      const searchResults = res.data.results.map((el) => {
        return {
          name: el.user.first_name,
          image: el.urls.thumb,
          age: 20 + Math.round(Math.random() * 10),
          location: el.user.location ? el.user.location : 'New York'
        };
      });

      setSearchResults(searchResults);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => getSearch('people'), []);

  return (
    <div className="App">
      <main className="container">
        <span className="menuIcon" onClick={toggleMenu}>
          <MenuIcon />
        </span>
        <Navigation toggleMenu={toggleMenu} viewMenu={viewMenu} />
        <div className="right">
          <TopSearch getSearch={getSearch} />
          <People people={searchResults} />
        </div>
      </main>
    </div>
  );
}

export default App;
