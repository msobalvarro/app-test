import React, { useEffect } from 'react'

// import components
import FilterComponent from './components/filter.component'
import PreviewComponent from './components/preview.component'

// import assets
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/App.css'

// import store and services
import store from './store'

const App = () => {
  useEffect(() => {
    console.log(store.getState())
  }, [])


  return (
    <div className='container bg-light border mt-5 p-5 rounded'>
      <h2>Buscar usuario GitHub</h2>

      <div className='row align-item-center mt-4 d-flex aling-items-top'>
        <div className='col-4'>
          <FilterComponent />
        </div>
        <div className='col-8'>
          <PreviewComponent />
        </div>
      </div>
    </div>
  )
}

export default App
