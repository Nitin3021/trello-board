import React, { useState } from 'react'

const AddLabelText = (props) => {
    // addLabelText -> handler for label text
    const [addLabelText, setAddLabelText] = useState('')
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    // Function will validate and pass the newly added label back to caller.
    const onSubmit = (e) => {
        e.preventDefault()

        if (addLabelText === '') {
            return setError('Label cannot be blank!')
        }

        const duplicateLabel = props.labels.find((label) => label.toLowerCase() === addLabelText.toLowerCase())
        if (duplicateLabel) {
            return setError('Label already exists!')
        }

        setError('')
        setAddLabelText('')
        props.onAddLabel(addLabelText)
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Enter label"
                    value={addLabelText}
                    onChange={(e) => { setAddLabelText(e.target.value) }}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddLabelText