import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Components/store'
import Hero from './Components/Hero'
const App = () => {
  return <>
    <Provider store={store}>
      <div className="App">
        <Hero />
      </div>
    </Provider>
  </>
}

export default App
