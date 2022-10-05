import { useState, useEffect } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsServices from './services/persons'




const App = () => {
  const [persons, setPersons] = useState([])
   
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    personsServices.getAll().then(initialPerson => setPersons(initialPerson) )
  }, [])


   

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

      personsServices.create(personObject).then(response => {
        setPersons(persons.concat(response.data))
        setNewName('')
        setNewNumber('')

      })
      
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
  }

  const handleDeletePerson =  (event, name) => {
    console.log('click me ')
    if(window.confirm(`Delete ${name} ?`) ) {
      personsServices.remove(event.target.id).then(() => {
        setPersons(persons.filter(person => person.name !== name))
      })
    }
  }

  
  const filterletters = persons.filter(person => person.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()))


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

      <Persons filterletters={filterletters} handleDeletePerson={handleDeletePerson}  />

      



    </div>
  )
}

export default App;
