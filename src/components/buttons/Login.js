import React from 'react'

const Login = ({ mode }) => {
  return (
    <>
      <button type="button" className={`btn btn-outline-${mode === "light" ? "primary" : "light"} ms-auto`} data-bs-toggle="modal" data-bs-target="#loginModal">
        <span className='fa fa-sign-in me-1'> </span>Login
      </button>
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className={`modal-content bg-${mode === "light" ? "white" : "dark"}`}>
            <div className="modal-header">
              <h1 className={`modal-title fs-5 text-${mode === "light" ? "black" : "light"}`} id="exampleModalLabel">Login</h1>
              <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button className={`btn btn-${mode === "light" ? "primary" : "dark"} w-100 mb-4`}>
                <span className='fa fa-google me-2'></span>
                Sign in With google
              </button>
              <button className={`btn btn-${mode === "light" ? "primary" : "dark"} w-100 mb-4`}>
                <span className='fa fa-facebook me-2'></span>
                Sign in With Facebook
              </button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className={`form-label text-${mode === "light" ? "black" : "light"}`}>Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className={`form-text text-${mode === " light" ? "black" : "light"} `}>We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className={`form-label text-${mode === "light" ? "black" : "light"}`}>Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className={`form-check-label text-${mode === "light" ? "black" : "light"}`} htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className={`btn btn-outline-${mode === "light" ? "primary" : "light"} w-100 mb-5`}>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login