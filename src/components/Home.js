import React from 'react'
import Product from './Product'

const Home = ({ mode }) => {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/images/home/cover1.png" class="cover1" alt="IPhone" />
          </div>
          <div class="carousel-item bg-black">
            <img src="/assets/images/home/cover2.jpg" class="cover2" alt="IPhone" />
          </div>
          <div class="carousel-item ">
            <img src="/assets/images/home/cover3.png" class="cover3" alt="IPhone" />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <Product mode={mode} />
    </>
  )
}

export default Home