import { useState, useEffect } from 'react';
import './App.css';
import AddNewContact from './components/AddNewContact';
import Contacts from './components/Contacts';
import SerchInput from './components/SerchInput';
import Succes from './notifications/Succes';
import Error from './notifications/Error';
import personsServices from './services/persons'



function App() {

  const [persons, setPersons] = useState([])
  const [saveName, setSaveName] = useState('')
  const [saveNumber, setSaveNumber] = useState('')
  const [serchName, setSerchName] = useState('')
  const [message, setMessage] = useState(null)
  const [errorMessage ,setErrorMessage] = useState(null)
  useEffect(() => {
    personsServices
      .getAll()
      .then(initialPerson => setPersons(initialPerson))
  }, [])


  const addContact = async(event) => {
    event.preventDefault()
    const newContact = {
      name: saveName,
      number: saveNumber,
      
    }

    await personsServices
      .create(newContact)
      .then(response =>
        setPersons(persons.concat(newContact),
        setMessage(`Added '${newContact.name}'`),
        setTimeout(() => {
          setMessage(null)
        }, 5000)
        ) )
        
        .catch((error) => { 
      if(error.response){
        setErrorMessage(`
        Path ${newContact.number} is shorter than the minimum allowed length (8).
        or Path ${newContact.name} is shorter than the minimum allowed length (3).
        or name most by unique
        `)
      } }   )    
      setTimeout(() => {
        setErrorMessage(null)
      }, 10000)
        
      
    
      setSaveName('')
      setSaveNumber('')
  
  }

  const handleInputName = (event) => {
    setSaveName(event.target.value)
  }
  const handleInputNumber = (event) => {
    setSaveNumber(event.target.value)
  }

  const handleInputSerch = (event) => {
    setSerchName(event.target.value)
  }

  const hamdleInpuDelete = (name, id) => {    
    if(window.confirm(`Delte ${name} ?`))
    personsServices
    .remove(id)
    .then(() => 
      setPersons(persons.filter(person => person.id !== id)),
      setPersons(persons))
      setErrorMessage(`delete ${name} from contacts`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
      
    

  

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <Succes message={message}/>
      <Error errorMessage={errorMessage} />

      <SerchInput
        serchName={serchName}
        handleInputSerch={handleInputSerch}

      />


      <h2> Add a new contact </h2>

      <AddNewContact
        addContact={addContact}
        saveName={saveName}
        saveNumber={saveNumber}
        handleInputName={handleInputName}
        handleInputNumber={handleInputNumber}

      />

      <h2>Contacts</h2>

      <Contacts
        persons={persons}
        serchName={serchName}
        hamdleInpuDelete={hamdleInpuDelete}
      />


    </div>
  );
}

export default App;
