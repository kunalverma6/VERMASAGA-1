import React from 'react'

const Contact = () => {
    return (
        <>
<div className="my-5">
    <h1 className='text-center'>CONTACT US</h1>
</div>
<div className="container contact-div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
            <form>
                <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" 
    placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">phone</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" 
    placeholder="phone" />
  </div>
  <div className="form-group">
    <label for="exampleFormControlInput1">address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" 
    placeholder="address" />
  </div>
  <button type='submit'className='btn btn-primary' >submit</button>
 
</form>
            </form>

        </div>
    </div>
</div>
        </>
    )
}

export default Contact
