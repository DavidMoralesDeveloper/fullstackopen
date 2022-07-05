import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const filterletters = persons.filter(person => person.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))
   
   

  // -----------------

  const addPerson = (event) => {
    event.preventDefault()

    const filterName = persons.find(person => person.name === newName)

    if (filterName) {
      alert(`${newName} is already added to phonebook`)

    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }


  }

  const handleNewname = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearchName = (event) => {
    setSearchName(event.target.value)
    console.log(event.target.value)
    
  }




  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearchName={handleSearchName} />
      

      <h3>Add a new</h3>

      <PersonForm 
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNewname={handleNewname}
        handleNewNumber={handleNewNumber}

       />

      <h2>Numbers</h2>

      <Persons filterletters={filterletters} />

      

      







    </div>
  )
}

export default App;
