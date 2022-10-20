import React from 'react'

const PersonForm = ({ addPerson, newName, newNumber, handleNewname, handleNewNumber }) => {
    return (
        <div>
            <form onSubmit={addPerson} >
                <div>
                    Name:
                    <input type='text' value={newName} onChange={handleNewname} placeholder='Name' />
                </div>
                <div>
                    Number:
                    <input type='number' value={newNumber} onChange={handleNewNumber} placeholder='Number' />
                </div>

                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm