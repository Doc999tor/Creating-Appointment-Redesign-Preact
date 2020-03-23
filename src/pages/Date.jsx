import React from 'react'
import { observer } from 'mobx-react'
import mainStore from '../store/mainStore'
const Date = observer(() => {
  return (
    <div>
      <h2>Date: {moment().format('YYYY-MM-DD')} </h2>
      <p>Store.count: {mainStore.count}</p>
      <button onClick={() => mainStore.clear()}>cleaning store</button>
    </div>
  )
})
export default Date