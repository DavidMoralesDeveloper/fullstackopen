import React from 'react'



const Persons = ({filterletters}, {handleDeletePerson}) => {
  return (
    <div>
        <ul>
        {filterletters.map(person => <li key={person.name} >  {person.name} {person.number}  <button onClick={handleDeletePerson} >delete</button> </li> )}
        
      </ul>
    </div>
  )
}

export default Persons