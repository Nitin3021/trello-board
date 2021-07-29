import React, { useState } from 'react'
import AddLabelText from './AddLabelText'
import Cards from './Cards'

const DashboardPage = () => {
    // labels -> array of stored labels
    const [labels, setLabels] = useState([])
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    const onAddLabel = (addLabelText) => {
        setLabels([...labels, addLabelText])
        setError('')
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

                <table id="table-trello">
                    {labels.map((label) => (
                        <thead key={label}>
                            <tr>
                                <th>{label}</th>
                            </tr>
                            <tr>
                                <td>
                                    <Cards
                                        key={label}
                                        labels={labels}
                                        label={label}
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
