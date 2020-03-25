import React, { Component } from 'react'
import { observer } from 'mobx-react'
import mainStore from '../store/mainStore'
import './Counter.css'
const Counter = observer(() => {
  return (
    <div className='page'>
      <h1>Counter: {mainStore.count}</h1>
      <button onClick={() => mainStore.increment()}>+</button>
      <button onClick={() => mainStore.decrement()}>-</button>
    </div>
  )
})
export default Counter