import React from 'react'

const AddNewContact = ({ addContact, saveName, saveNumber, handleInputName,handleInputNumber }) => {

    return (
        <div>
            <form onSubmit={addContact}>

                <h3>Name :</h3>

                <input type={'text'} value={saveName} onChange={handleInputName} />

                <h3>number :</h3>

                <input type={'number'} value={saveNumber} onChange={handleInputNumber} />

                <br />

                <button type='submit'> Add </button>

            </form>
        </div>
    )
}

export default AddNewContact