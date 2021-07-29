import React, { useState } from 'react'

const AddCardText = (props) => {
    // addCardText -> handler for label text
    const [addCardText, setAddCardInput] = useState('')
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    // Function will validate and pass the newly added Card back to caller.
    const onSubmit = (e) => {
        e.preventDefault()

        if (addCardText === '') {
            return setError('Enter Card text!')
        }

        setAddCardInput('')
        setError('')
        props.onAddCardText(addCardText)
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Enter Cards"
                    value={addCardText}
                    onChange={(e) => { setAddCardInput(e.target.value) }}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddCardText
