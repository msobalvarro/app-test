import React, { useState } from 'react'

// import components
import ListResults from './list.component'

// import services and store
import { HTTP } from '../utils/index'
import store from '../store'



/**
 * Component for to catch username and rendering possible result list
 */
const FilterComponent = () => {
  // filter data value text
  const [filter, setFilter] = useState('')

  // status indicating that there is a request
  const [loading, setLoading] = useState(false)
  // const onChangeComponent

  const [userNotFund, setErrorFound] = useState(false)


  /**
   * Method that executes the http request that obtains the search result
  */
  const onSearch = async (e) => {
    try {
      e.preventDefault()

      // set laoding state
      setLoading(true)

      // execute petition
      const { data } = await HTTP.get(`/search/users?q=${filter}`)

      // set all states
      store.dispatch({ type: 'results', payload: data.items })

      // verify count items
      setErrorFound(data.total_count === 0)

    } catch (error) {
      // alert(error)
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  return (
    <div>
      <form onSubmit={onSearch}>
        <div className='row'>
          <div className='col-10'>
            <input
              disabled={loading}
              className='form-control'
              onChange={({ currentTarget }) => setFilter(currentTarget.value)}
              value={filter}
              placeholder='search github username'
              required />
          </div>
          <div className='col-2'>
            <button className='btn btn-primary' disabled={loading} type='submit'>Buscar</button>
          </div>
        </div>

        {
          userNotFund &&
          <div className='alert alert-secondary' role='alert'>
            No matches found
          </div>
        }
      </form>

      <ListResults />
    </div>
  )
}

export default FilterComponent