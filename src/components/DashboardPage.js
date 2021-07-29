import React, { useState } from 'react'
import AddCardText from './AddCardText'
import AddLabelText from './AddLabelText'

const DashboardPage = () => {
    // labels -> array of stored labels
    const [labels, setLabels] = useState([])
    // cards -> array of stored cards
    const [cards, setCards] = useState([])
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
                                    <AddCardText
                                        onAddCardText={onAddCardText}
                                    />
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
