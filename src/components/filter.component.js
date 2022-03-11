import React, { useState } from "react"
import ListResults from "./list.component"

/**
 * Component for to catch username and rendering possible result list
 */
const FilterComponent = () => {
    const [filter, setFilter] = useState("")
    // const onChangeComponent


    return (
        <div>
            <form>
                <div className='row'>
                    <div className='col-10'>
                        <input
                            className='form-control'
                            onChange={({ currentTarget }) => setFilter(currentTarget.value)}
                            value={filter}
                            placeholder='search github username'
                            required />
                    </div>
                    <div className='col-2'>
                        <button className='btn btn-primary' type="submit">Buscar</button>
                    </div>
                </div>
            </form>

            <ListResults />
        </div>
    )
}

export default FilterComponent