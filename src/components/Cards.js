import React, { useState } from 'react'
import AddCardText from './AddCardText'
import EditCardText from './EditCardText'

const Cards = (props) => {
    // cards -> array of stored cards
    const [cards, setCards] = useState([])
    // error -> to store & display validations on screen
    const [error, setError] = useState('')
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

    const onEditCardText = (editedCardText, idx) => {
        const newCardArray = cards.map((card, index) => {
            if (index !== idx) {
                return { ...card }
            }

            return {
                label: card.label,
                card: editedCardText
            }
        })

        setCards([...newCardArray])
        setEditText('')
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
                                {
                                    editText === idx ? (
                                        <EditCardText
                                            onEditCardText={onEditCardText}
                                            index={idx}
                                            card={card}
                                        />
                                    ) : null
                                }
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Cards
