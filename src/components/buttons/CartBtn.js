import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartBtn = ({mode}) => {
  const state = useSelector((state) => state.addItem)
  return (
    <>
      <NavLink to="/cart" className={`btn btn-outline-${mode === "light" ? "primary" : "light"} ms-2`} >
        <span className='fa fa-shopping-cart me-1'>
        </span> Cart({state.length})
      </NavLink>

    </>
  )
}

export default CartBtn