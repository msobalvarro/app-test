import React, { useEffect, useState } from 'react'

// import store and services
import store from '../store'
import { HTTP } from '../utils'

const PreviewComponent = ({ }) => {
  // user selected
  const [user, setUSer] = useState(null)

  // all repositories for to render
  const [allRepositories, setRepositories] = useState([])

  const getAllData = (userNAme) => {
    const { dataSelected } = store.getState()
    // get all repositories
    HTTP.get(`/users/${userNAme}/repos`).then(({ data }) => setRepositories(data))

    HTTP.get(`/users/${userNAme}`).then(({ data }) => setUSer(data))
  }

  useEffect(() => {
    store.subscribe(() => {
      const userSelected = store.getState().dataSelected


      if (userSelected) {
        getAllData(userSelected.login)
      }
    }, [])
  }, [])

  if (user !== null) {
    return (
      <div className=''>
        <div className='row'>
          <div className='col-4'>
            <img src={user.avatar_url} className='big-avatar' />
          </div>
          <div className='col-8'>
            <h2>{user.name} <span className="badge bg-secondary">{user.followers} followers</span></h2>
            <h3>{user.company}</h3>
          </div>
        </div>

        <hr />

        <h2 className='mt-4'>Repositories</h2>
        {
          allRepositories.map(repository => (
            <div className='card mt-1' key={repository.id}>
              <div className='card-body'>
                <h5 className='card-title'>{repository?.name}</h5>
                <h6 className=''>{repository?.full_name}</h6>

                <p className='card-text'>{repository?.description}</p>

                <a href={repository?.html_url} target='_blank' className='btn btn-primary'>Go to</a>
              </div>
            </div>
          ))
        }
      </div>
    )
  } else {
    return null
  }

}

export default PreviewComponent