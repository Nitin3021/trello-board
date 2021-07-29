import React, { useState } from 'react'
import AddLabelText from './AddLabelText'

const DashboardPage = () => {
    // labels -> array of stored labels
    const [labels, setLabels] = useState([])
    // addLabelText -> handler for label text

    const [cards, setCards] = useState([])
    const [addCardInput, setAddCardInput] = useState('')
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    const onAddLabel = (addLabelText) => {
        setLabels([...labels, addLabelText])
        setError('')
    }

    const onAddCardText = (addCardInput) => {
        setCards([...cards, addCardInput])
        setError('')
        console.log(cards)
    }

    const onSubmitCard = (e) => {
        e.preventDefault()

        if (addCardInput === '') {
            return setError('Enter Card text!')
        }

        setAddCardInput('')
        setError('')
        onAddCardText(addCardInput)
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <AddLabelText
                onAddLabel={onAddLabel}
                labels={labels}
            />
            {
                labels.length !== 0 &&

                <table>
                    {labels.map((label) => (
                        <thead key={label}>
                            <tr>
                                <th>{label}</th>
                                <td>
                                    <div>
                                        <form onSubmit={onSubmitCard}>
                                            <input
                                                type="text"
                                                placeholder="Enter Cards"
                                                value={addCardInput}
                                                onChange={(e) => { setAddCardInput(e.target.value) }}
                                            />
                                            <button>Submit</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        </thead>
                    ))}
                </table>
            }
        </div>
    )
}

export default DashboardPage
