import React from 'react'

const Contacts = ({ persons, serchName, hamdleInpuDelete }) => {
  return (
    <div>

      <ul>
        {persons.filter(person =>
    person.name.toLocaleLowerCase()
      .includes(serchName.toLocaleLowerCase()))
      .map(contact => 
      <li key={contact.id} > 
      {contact.name} 
         
      {contact.number} 
      <button onClick={() => hamdleInpuDelete(contact.name, contact.id)}>delete</button> 
      </li>)}
      </ul>

    </div>
  )
}

export default Contacts