import { useState, useEffect } from 'react'
import Notificatons from './components/Notificatons'
import RemuvedNotification from './components/RemuvedNotification'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsServices from './services/persons'
import './services/app.css'




const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [status, setStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [succesMessage, setSuccesMessage] = useState(null)

  useEffect(() => {
    personsServices
      .getAll()
      .then(initialPerson => setPersons(initialPerson))
  }, [])




  const addPerson = (event) => {
    event.preventDefault()

    const filterName = persons.find(person => person.name === newName)
    const personObject = {
      name: newName,
      number: newNumber
    }
    if (filterName) {
      if (window.confirm(`${newName} is already added to phonebook,replace the old number whit a new one `)) {
        console.log(filterName.id)
        personsServices
          .update(filterName.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== filterName.id ? person : returnedPerson))
            setSuccesMessage(
              `Change new number , has been successfully '${returnedPerson.name}'`
            )
            setTimeout(() => {
              setSuccesMessage(null)
            }, 5000)
          })
          .catch(error => {
            setStatus(error)
            setErrorMessage(
              `Note '${filterName.name}' was already removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
              setStatus(null)
            }, 5000)
            setPersons(persons.filter(n => n.id !== filterName.id))
          })




      }


    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }

      personsServices
        .create(personObject)
        .then(returnedPerson => {
          setPersons((prevNotes) => prevNotes.concat(returnedPerson))

          setSuccesMessage(
            `Added '${returnedPerson.name}'`
          )
          setTimeout(() => {
            setSuccesMessage(null)
          }, 5000)

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





  const filterletters = persons.filter(person =>
    person.name.toLocaleLowerCase()
      .includes(searchName.toLocaleLowerCase()))




  const handleRemovePerson = (e) => {
    const button = e.target
    if (window.confirm(`Delete ${button.name} ?`)) {
      console.log(e.target)
      personsServices
        .remove(button.id)
        .then(() => {
          setPersons(persons.filter(person => person.name !== button.name))

        })

    }
  }


  return (
    <div>


      <h2>Phonebook</h2>

      <Notificatons message={succesMessage} />
      <RemuvedNotification errorMessage={errorMessage} />

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


      <Persons
        filterletters={filterletters}
        handleRemovePerson={handleRemovePerson}

      />

    </div>
  )
}

export default App;
