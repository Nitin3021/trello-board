import React, { useEffect, useState } from 'react'
import AddLabelText from './AddLabelText'
import Cards from './Cards'

const DashboardPage = () => {
    // labels -> array of stored labels
    const [labels, setLabels] = useState([])
    // rerender the page upon change
    const [renderPage, setRenderPage] = useState(false)
    // error -> to store & display validations on screen
    const [error, setError] = useState('')

    // useEffect will retreive all the cards in localStorage to persist data on refresh
    useEffect(() => {
        const labelsData = JSON.parse(localStorage.getItem('labels'))
        if (labelsData && labelsData.length !== 0) {
            setLabels([...labelsData])
        }
    }, [])

    // useEffect will store all the label details
    useEffect(() => {
        if (labels && labels.length !== 0) {
            localStorage.setItem('labels', JSON.stringify(labels))
        }
    }, [labels])

    // onAddLabel will add the new label upon form submit from AddLabelText component
    const onAddLabel = (addLabelText) => {
        setLabels([...labels, addLabelText])
        setError('')
    }

    // onClickMove will be called from Cards component to rerender the whole list
    const onClickMove = () => {
        setRenderPage(!renderPage)
    }

    const onClear = () => {
        localStorage.clear()
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <button
                type="button"
                className="button__erase"
                onClick={onClear}
            >
                Clear Board
            </button>
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
                                        onClickMove={onClickMove}
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
