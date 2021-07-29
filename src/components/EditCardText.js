import React, { useState } from 'react'

const EditCardText = (props) => {
    const [editCardInput, setCardInput] = useState(props.card)
    const [error, setError] = useState('')

    // Function will validate and pass the new edited text back to caller.
    const onSubmit = (e) => {
        e.preventDefault()

        if (editCardInput === props.card) {
            return setError('Text cannot be same!')
        }

        props.onEditCardText(editCardInput, props.index)
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Edit Card Text"
                    value={editCardInput}
                    onChange={(e) => { setCardInput(e.target.value) }}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditCardText
