
import React from "react";




const Persons = ({ filterletters, handleRemovePerson, id }) => {

  return (
    <div>
      <ul>
        {filterletters.map(person => {
          return (
            <li key={person.id} >
              {person.name} {person.number}
              <button onClick={handleRemovePerson} id={person.id} name={person.name}  >delete</button>
            </li>)
        })
        }

      </ul>
    </div>
  )
}

export default Persons;