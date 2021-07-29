import React, { useState } from 'react'

const DashboardPage = () => {
    // labels -> array of stored labels
    const [labels, setLabels] = useState([])
    // addLabelText -> handler for label text
    const [addLabelText, setAddLabelText] = useState('')
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    const onAddLabel = (addLabelText) => {
        setLabels([...labels, addLabelText])
        setError('')
        console.log(labels)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (addLabelText === '') {
            return setError('Label cannot be blank!')
        }

        setError('')
        setAddLabelText('')
        onAddLabel(addLabelText)
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

export default DashboardPage
