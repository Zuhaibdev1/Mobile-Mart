import React from 'react'

const Contact = ({ mode }) => {
  return (
    <div>
      <div className={`container my-2 py-5 bg-${mode === "light" ? "light" : "black"}`}>
        <div className='row'>
          <div className='col-12 text-center py-4 my-4'  >
            <h1 className={`text-${mode === "light" ? "black" : "light"}`}>Have Some Question?</h1>
            <hr className={`text-${mode === "light" ? "secondary" : "light"}`} />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-5 d-flex justify-content-center' >
            <img src='/assets/images/contact.png' alt="Contact Us" height="300px" width="400px" />
          </div>
          <div className='col-md-6'>
            <form>
              <div class="mb-3">
                <label for="exampleForm" class={`form-label text-${mode === "light" ? "black" : "light"}`}>Full Name</label>
                <input type="text" class="form-control" id="exampleFormC" placeholder="Zuhaib Ghori" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class={`form-label text-${mode === "light" ? "black" : "light"}`}>Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class={`form-label text-${mode === "light" ? "black" : "light"}`}>Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
              </div>
              <button type="submit" className={`btn btn-outline-${mode === "light" ? "primary" : "light"}`} >Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact