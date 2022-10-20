import React from 'react'

const RemuvedNotification = ({ errorMessage }) => {

    if (errorMessage === null) {
        return null
    }

    return (
        <div>

            <div className='error'>
                {errorMessage}
            </div>

        </div>
    )
}

export default RemuvedNotification
