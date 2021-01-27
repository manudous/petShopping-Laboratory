import React from 'react'
import { MyContext } from './Context';

export const Cart = () => {
  const myContext = React.useContext(MyContext)
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}
