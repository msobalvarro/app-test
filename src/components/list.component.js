import React, { useEffect, useState } from 'react'
import store from '../store'

/** Component that renders the list of possible results*/
const ListResults = () => {
    // state
    const [results, setResults] = useState(store.getState().results)

    useEffect(() => {
        store.subscribe(() => {
            // get new results
            const newResults = store.getState().results

            // verify diferences
            if (results !== newResults) {
                setResults(newResults)
            }
        }, [])
    }, [])

    return (
        <ul className='list-group mt-4'>
            {
                results?.map((result, index) => (
                    <li
                        key={result.id}
                        className="list-group-item list-group-item-action cursor-pointer"
                        onClick={_ => store.dispatch({ type: "dataSelected", payload: result })}>
                        {/* <b className='ml-3'>{result?.login}</b> */}

                        <div className='row'>
                            <div className='col-1'>
                                <img src={result.avatar_url} className='avatar rounded mr-2' />
                            </div>
                            <div className='col-11'>
                                {result?.login}
                            </div>
                        </div>

                    </li>
                ))
            }
        </ul>
    )
}

export default ListResults