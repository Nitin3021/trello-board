import React, { useEffect, useState } from 'react'
import AddCardText from './AddCardText'
import EditCardText from './EditCardText'

const Cards = (props) => {
    // cards -> array of stored cards
    const [cards, setCards] = useState([])
    // selectVal -> select option to initiate move
    const [selectVal, setSelectVal] = useState(props.label)
    // editTextIndex -> Will store the index of the text to be edited
    const [editTextIndex, setEditTextIndex] = useState('')
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    // useEffect will retreive all the cards in localStorage to persist data on refresh
    useEffect(() => {
        const cardsData = JSON.parse(localStorage.getItem(props.label))

        if (cardsData && cardsData.length !== 0) {
            setCards([...cardsData])
        }
    }, [props.label])

    // Below logic for useEffect will take the localStorage 'move' to add it in newly assigned Cards array
    // localStorage defined within useEffect will retreive existing data belonging to that label 
    // & append the new Card to prevent override.
    const moveCardText = JSON.parse(localStorage.getItem('move'))
    useEffect(() => {
        if (moveCardText && (moveCardText.toLabel === props.label)) {
            const cardWithLabel = {
                label: moveCardText.toLabel,
                card: moveCardText.toCardText
            }

            const data = JSON.parse(localStorage.getItem(props.label))

            setCards([...data, cardWithLabel])
            localStorage.removeItem('move')
        }
    }, [props.label, moveCardText])

    // useEffect will store all the card details for current component label
    useEffect(() => {
        if (cards && cards.length !== 0) {
            localStorage.setItem(props.label, JSON.stringify(cards))
        } else {
            localStorage.setItem(props.label, JSON.stringify([]))
        }
    }, [props.label, cards])

    const onAddCardText = (addCardInput) => {
        // Each card will be associated to its parent label
        const cardWithLabel = {
            label: props.label,
            card: addCardInput
        }

        setCards([...cards, cardWithLabel])
        setError('')
    }

    // Save Edit card index & proceed to edit text
    const onEditClick = (e) => {
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

    // Remove card using index of array
    const onClickRemove = (idx) => {
        cards.splice(idx, 1)
        setCards([...cards])
    }

    // Select move card will allow component to store the movement details prior to 'Move' button click
    const onSelectChange = (e, card) => {
        setSelectVal(e.target.value)

        if (e.target.value !== props.label) {
            localStorage.setItem('move', JSON.stringify({
                toLabel: e.target.value,
                toCardText: card
            }))
        } else {
            localStorage.removeItem('move')
        }
    };

    // Move card upon clicking 'Move' button
    const onMoveClick = (e) => {
        e.preventDefault()

        if (selectVal === props.label) {
            return setError('Select different label')
        }
        onClickRemove(e.target.value)
        props.onClickMove()
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
                                <button
                                    value={idx}
                                    type='button'
                                    onClick={onMoveClick}
                                >
                                    Move
                                </button>
                            </div>
                        )
                    })
            }
        </div>
    )
}

export default Cards
