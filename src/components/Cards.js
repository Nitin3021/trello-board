import React, { useState } from 'react'
import AddCardText from './AddCardText'

const Cards = (props) => {
    // cards -> array of stored cards
    const [cards, setCards] = useState([])
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    const onAddCardText = (addCardInput) => {
        // Each card will be associated to its parent label
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
            {
                cards.length !== 0 &&
                cards.map((card) => card.card)
                    .map((card, idx) => {
                        return (
                            <div key={idx}>
                                <p>{card}</p>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Cards
