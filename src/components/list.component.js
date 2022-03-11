import React, { useEffect, useState } from 'react'
import store from '../store'

/** Component that renders the list of possible results*/
const ListResults = () => {
    // state
    const [results, setResults] = useState(store.getState().results)
    const [indexActive, setIndexActive] = useState(null)


    useEffect(() => {
        store.subscribe(() => {
            // get new results
            const newResults = store.getState().results

            // console.log()

            // verify diferences
            if (results !== newResults) {
                setResults(newResults)

                setIndexActive(null)
            }
        }, [])
    }, [])


    return (
        <div className='list-group mt-4'>
            {
                results?.map((result, index) => (
                    <a
                        href='#'
                        key={result.id}
                        className={`list-group-item list-group-item-action ${indexActive === index}`}
                        onClick={_ => {
                            store.dispatch({ type: "dataSelected", payload: result })

                            setIndexActive(index)
                        }}>
                        <img src={result.avatar_url} className='avatar rounded' />

                        <span className='ml-2'>{result.login}</span>
                    </a>
                ))
            }
        </div>
    )
}

export default ListResults