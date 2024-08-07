import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';

const handleOnSearchChange = (searchData) => {
  console.log(searchData);
}

function App() {
  return (
    <div className="container">
      <Search onSearchChange= {handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
