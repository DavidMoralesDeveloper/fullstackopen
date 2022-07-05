import React from 'react'

const Filter = ({ value, handleSearchName }) => {
  return (
    <div>
      <div>
        Search for name:
        <input value={value} onChange={handleSearchName} placeholder='Filter a Name'
        />

      </div>
    </div>
  )
}

export default Filter