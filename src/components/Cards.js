import React, { useState } from 'react'
import AddCardText from './AddCardText'

const Cards = (props) => {
    // cards -> array of stored cards
    const [cards, setCards] = useState([])
    // error -> to store & display validations on screen
    const [error, setError] = useState('')
    const [editCardInput, setCardInput] = useState('')
    const [editText, setEditText] = useState('')

    const onAddCardText = (addCardInput) => {
        // Each card will be associated to its parent label
        const cardWithLabel = {
            label: props.label,
            card: addCardInput
        }

        setCards([...cards, cardWithLabel])
        setError('')
    }

    const onEditClick = (e) => {
        console.log(e.target.value)
        setEditText(Number(e.target.value))
        console.log(editText)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        console.log(editCardInput)
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <AddCardText
                onAddCardText={onAddCardText}
            />
            {
                cards.length !== 0 &&
                cards.map((card) => card.card)
                    .map((card, idx) => {
                        return (
                            <div key={idx}>
                                <p>{card}</p>
                                <button
                                    value={idx}
                                    type='button'
                                    onClick={onEditClick}
                                >
                                    Edit
                                </button>
                                <div>
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
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Cards
