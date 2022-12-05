import React from 'react'
import { NavLink } from 'react-router-dom'
import { DATA } from "../Data"

const Product = ({ mode }) => {

  const carditem = (item) => {

    return (
      <div class={` card my-5 py-4 bg-${mode === "light" ? "white" : "secondary"} rounded`} key={item.id} style={{ width: "18rem" }}>
        <img src={item.img} class="card-img-top" alt={item.title} />
        <div class={`card-body text-center text-${mode === "light" ? "black" : "light"}`}>
          <h5 class="card-title">{item.title}</h5>
          <p class="lead">${item.price}</p>
          <NavLink to={`/products/${item.id}`} class={`btn btn-outline-${mode==="light"? "primary" :"light"}`}>Buy Now</NavLink>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className={` rounded-4 container my-5 bg-${mode === "light" ? "white" : "dark"}`}>
        <div className='row'>
          <div className='col-12 text-center my-5'>
            <h1 className={`text-${mode === "light" ? "black" : "light"}`}>Products
            </h1>
            <hr />
          </div>
        </div>
      </div>
      <div className='container my-5'>
        <div className='row justify-content-around'>
          {DATA.map(carditem)}
        </div></div>
    </div>
  )
}

export default Product