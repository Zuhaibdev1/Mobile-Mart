import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae suscipit beatae, facilis eligendi fugit.
              Quisquam, odit? Ullam vero quos temporibus, minima inventore quibusdam excepturi omnis iste, architecto doloribus
              sed accusantium tempore consequuntur quasi dignissimos voluptatum laboriosam ut explicabo soluta delectus nobis
              pariatur nostrum enim reiciendis! Enim sequi suscipit sapiente labore qui repellendus vitae voluptas sit aliquam
              eaque! Numquam maxime aliquid earum nemo ex at porro id animi minus, optio illo, aliquam ut distinctio recusandae
              fuga necessitatibus perferendis possimus deserunt adipisci. Vitae ratione omnis rem quasi quisquam explicabo
              possimus, ducimus, quidem, ea enim quam debitis nihil laboriosam voluptate exercitationem recusandae.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src="/assets/images/About.png" alt="About us" height="400px" width="400px" />
          </div>

        </div>
      </div>

    </div >
  )
}

export default About