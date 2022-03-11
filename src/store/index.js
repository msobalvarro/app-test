import { createStore } from 'redux'

// initial state
const mainState = {
  results: [],
  dataSelected: null
}

// create reducer
const rootReducer = (state = mainState, action) => {
  // console.log(action)

  switch (action.type) {


    default:
      return { ...state, [action.type]: action.payload }
  }
}

const store = createStore(rootReducer, mainState)

export default store