import './App.css';
import Countries from './component/Countries/Countries';



function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
    </div>
  );
}







/* function LoadCountries(){
  const [Countries, setCountries] = useState([])

  useEffect( () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])


  return(
    <div>
      <h1>All Countries Availeble</h1>
      <h2>Available Countries: {Countries.length}</h2>
      {
        Countries.map(country => <Country name ={country.name.common} population = {country.population}></Country>)
      }
    </div>
  )
}

function Country (props){
  return(
    <div>
      <h2>Name: {props.name}</h2>
      <h3>population: {props.population}</h3>
    </div>
  )
} */

export default App;
