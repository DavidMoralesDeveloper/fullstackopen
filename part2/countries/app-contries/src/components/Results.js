import React from "react";

const Results = ({ filterContry }, {contries}) => {

 
    if (filterContry.length === 1) {
  
      const contry = filterContry[0]
      return (
        <>
          
          
          <h1 key={contry.name.common}>{contry.name.common}</h1>
          <div>capital {contry.capital} </div>
          <div>poblasiom {contry.population}</div>
          
          <div> Language  </div>
          {contry.languages.map(lenguaje=><il key={lenguaje.name}> {lenguaje.name} </il>)}
                    
  
          <div> <img src={contry.flags.png} alt={contry.name} /> </div> 
        </>
      )
  
    }
    if (filterContry.length > 10) return 'To many matches, especify an other filter'
  
    return (
        filterContry.map(contry => 
            <p key={contry.name.common} >{contry.name.common}</p>
            )
    )
  
  }

export default Results;