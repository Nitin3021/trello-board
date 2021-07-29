import React, { useState } from 'react'
import AddCardText from './AddCardText'

const Cards = (props) => {
    // cards -> array of stored cards
    const [cards, setCards] = useState([])
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    const onAddCardText = (addCardInput) => {
        const cardWithLabel = {
            label: props.label,
            card: addCardInput
        }

        setCards([...cards, cardWithLabel])
        setError('')
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <AddCardText
                onAddCardText={onAddCardText}
            />
        </div>
    )
}

export default Cards
