import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // const [pokemon, setPokemon] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
    //   .then(response => response.json())
    //   .then(allPokemon => setData(allPokemon))
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(allPokemon=>setData(allPokemon.data))
  }, []);

  return (
    <div className="App mx-auto col-2">
      <ul>
        {data.results ? data.results.map((pokemon,index) => {
          return (<li key={index}>{pokemon.name}</li>)
        }): null}
      </ul>
    </div>
  );
}

export default App;
