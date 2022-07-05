import React from 'react'

const Persons = ({filterletters}) => {
  return (
    <div>
        <ul>
        {filterletters.map(person => <li key={person.name} >  {person.name} {person.number}  </li> )}
      </ul>
    </div>
  )
}

export default Persons