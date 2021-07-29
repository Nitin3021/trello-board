import React, { useState } from 'react'

const EditCardText = (props) => {
    const [editCardInput, setCardInput] = useState(props.card)
    const [error, setError] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

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
