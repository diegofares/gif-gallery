import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import SearchBox from './components/Searchbox';
import GIFList from './components/GIFList';
import LightBox from './components/LightBox';

function App() {

  const [gifList, setGifList] = useState([]);
  const [searchValue, setSearchValue] = useState("cheeseburgers");
  const [lightBoxOpened, setLightBoxOpened] = useState(false);
  const [lightBoxSrc, setlightBoxSrc] = useState("");

  const submitHandler = (e) => {
    e.PreventDefault();
  }
  const changeHandler = (val) => {
    setSearchValue(val);
  }
  const getGIFs = async () => {

    if (searchValue.length > 2) {
      const url = 'https://api.giphy.com/v1/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&limit=5&q=' + searchValue;

      axios.get(url)
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            setGifList(response.data.data);
          }
        })
    }
  }

  const openLB = (url) => {
    console.log("open lb");
    setLightBoxOpened(true);
    setlightBoxSrc(url);
  }
  const closeLB = (url) => {
    setLightBoxOpened(false);
  }

  useEffect(() => {
    getGIFs()
  }, [searchValue]);

  return (
    <div className="App">
      <header className="">
        <SearchBox searchValue={searchValue} changeHandler={changeHandler} submitHandler={submitHandler} />
      </header>
      <main>
        <h1>Results</h1>
        <GIFList gifList={gifList} openLB={openLB} />

        <LightBox src={lightBoxSrc} lightBoxOpened={lightBoxOpened} />
      </main>
    </div>
  );
}

export default App;
