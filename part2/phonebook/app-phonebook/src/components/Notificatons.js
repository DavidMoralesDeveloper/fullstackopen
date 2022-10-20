import React from 'react'

const Notificatons = ({ message }) => {

    if (message === null) {
        return null
    }

    return (
        <div>

            <div className='succes'>

                {message}

            </div>

        </div>
    )
}

export default Notificatons