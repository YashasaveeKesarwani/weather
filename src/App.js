import './App.css';
import React, {useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const [city, setcity] = useState("");
  const [fetched, setfetched] = useState(false);
  const [temp, settemp] = useState("");
  const [minTemp, setminTemp] = useState("");
  const [maxTemp, setmaxTemp] = useState("");
  const api = "435052f9faa0714e59c3fa85f474a80a";
  const changeHandler = (e) => {
    setcity(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}
`,
        {
          "Access-Control-Allow-Origin": "*",
        }
      );
      setfetched(true);
      settemp(result.data.main.temp);
      setminTemp(result.data.main.temp_min);
      setmaxTemp(result.data.main.temp_max);
    } catch {}
  };


  return (
    <div className="App">
       <div className="container">
      <form onSubmit={handleSubmit}>
        <input value={city} type="text" onChange={changeHandler} />
        <input type="submit" />
      </form>
      {fetched && (
        <div className="fetched"> 
          <div className="city">{city}</div>
          <div className="temp">{temp}</div>
          <div className="minmax">
            <div className="mintemp">min:{minTemp}</div>|
            <div className="maxtemp">max:{maxTemp}</div>
          </div>
        </div>
      )}
      </div>
    </div>
    
  );
}

export default App;
