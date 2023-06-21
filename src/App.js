import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBox from './components/Searchbox';
import GIFList from './components/GIFList';
import LightBox from './components/LightBox';

function App() {

  const [gifList, setGifList] = useState([]);
  const [searchValue, setSearchValue] = useState("ferrari");
  const [lightBoxOpened, setLightBoxOpened] = useState(false);
  const [lightBoxSrc, setlightBoxSrc] = useState("");

  const submitHandler = (e) => {
    e.PreventDefault();
  }
  const changeHandler = (val) => {
    setSearchValue(val);
  }
  const getGIFs = async () => {

    if (searchValue.length > 3) {
      const url = 'https://api.giphy.com/v1/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&limit=5&q=' + searchValue;

      axios.get(url)
        .then((response) => {
          if (response.data) {
            setGifList(response.data.data);
          }
        })
    }
  }

  const openLB = (url) => {
    setLightBoxOpened(true);
    setlightBoxSrc(url);
  }
  const closeLB = (url) => {
    setLightBoxOpened(false);
  }

  useEffect(() => {
    getGIFs();
  }, [searchValue]);

  return (
    <>
      <LightBox src={lightBoxSrc} lightBoxOpened={lightBoxOpened} closeLB={closeLB} />
      <div className="App">
        <header className="">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center py-2">
                <h3>GIF Search</h3>
                <SearchBox searchValue={searchValue} changeHandler={changeHandler} submitHandler={submitHandler} />
              </div>
            </div>
          </div>
        </header>
        <main>
          <h4>Search Results</h4>
          <GIFList gifList={gifList} openLB={openLB} />
        </main>
      </div>
    </>
  );
}

export default App;
