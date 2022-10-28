import React from 'react'

const SerchInput = ({ handleInputSerch, serchName }) => {

  
  return (
    <div>

      <h2> Serch a person  </h2>
      <input type={'text'} value={serchName} onChange={handleInputSerch} />
      

    </div>
  )
}

export default SerchInput

