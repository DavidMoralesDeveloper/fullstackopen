import { useState, useEffect } from "react";
import Results from "./components/Results";


function App() {

  const [serch, setSearch] = useState('')
  const [contries, setContries] = useState([])


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(json => {
        setContries(json)
        console.log(json)
      })
      
  }, [])

  const filterContry = contries.filter(contry => contry.name.common.toLowerCase().includes(serch.toLowerCase()))
  
  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div >

      <div>
        Find contries :
        <input onChange={handleInput} value={serch} />
      </div>

      
      <Results filterContry={filterContry} contries={contries} />




    </div>
  );
}





export default App;
