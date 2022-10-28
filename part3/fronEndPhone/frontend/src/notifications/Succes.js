import React from 'react'

const Succes = ({ message }) => {

    if (message === null) {
        return null
    }

    return (
        <div className='succes'>
            <div >

                {message}

            </div>
        </div>
    )
}

export default Succes