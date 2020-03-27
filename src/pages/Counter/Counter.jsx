import React from 'react';
import { observer } from 'mobx-react';
import Title from './Title';
import mainStore from '../../store/mainStore';
import './Counter.css';

const Counter = observer(() => (
  <div className='page'>
    <Title value={mainStore.count} />
    <button type='button' className='increment' onClick={() => mainStore.increment()}>+</button>
    <button type='button' className='decrement' onClick={() => mainStore.decrement()}>-</button>
  </div>
));

export default Counter;
