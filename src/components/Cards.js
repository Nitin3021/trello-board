import React, { useState } from 'react'
import AddCardText from './AddCardText'
import EditCardText from './EditCardText'

const Cards = (props) => {
    // cards -> array of stored cards
    const [cards, setCards] = useState([])
    // selectVal -> select option to initiate move
    const [selectVal, setSelectVal] = useState(props.label)
    // editText ->
    const [editTextIndex, setEditTextIndex] = useState('')
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

    const onEditClick = (e) => {
        console.log(e.target.value)
        setEditTextIndex(Number(e.target.value))
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
        setEditTextIndex('')
    }

    const onClickRemove = (idx) => {
        cards.splice(idx, 1)
        setCards([...cards])
    }

    const onSelectChange = (e, card) => {
        setSelectVal(e.target.value)

        localStorage.setItem('move', JSON.stringify({
            toLabel: e.target.value,
            toCardText: card
        }))

        console.log(selectVal)
    };

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
                                    editTextIndex === idx ? (
                                        <EditCardText
                                            onEditCardText={onEditCardText}
                                            index={idx}
                                            card={card}
                                        />
                                    ) : null
                                }
                                <button
                                    value={idx}
                                    onClick={(e) => onClickRemove(e.target.value)}
                                >
                                    Remove
                                </button>
                                <select
                                    onChange={(e) => onSelectChange(e, card)}
                                    defaultValue={props.label}
                                >
                                    {
                                        props.labels.map((label) => {
                                            return (
                                                <option
                                                    key={label}
                                                    value={label}
                                                    card={card}
                                                >
                                                    {label}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Cards
