import React ,{useRef} from 'react'
import 'sweetalert2/dist/sweetalert2.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import"../App.css"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ib9q8mf', 'template_7hn7tqe', form.current, 'Go-F8wtSOy7rYOqzq')
    Swal.fire(
      'Your message is sent successfully!',
      'You clicked the button!',
      'success'
    )


      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div className="contact py-5 ">
<div className="container">
  <div className="row">
    <div className="col-12">
    <h1 className="special-heading">
                   Contact Us
                </h1>
    </div>
  </div>
  <div className="row my-5">

  <div className="col-lg-12">
  <h1 style={{color:"brown"}} className='text-center  mb-5'>
 Please Leave Your Message Here 
</h1>

          <form ref={form}>
            <div className="mb-3">
              <label htmlFor="inputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPhone" className="form-label">Phone</label>
              <input type="tel" className="form-control" id="inputPhone" placeholder="Enter your phone number" />
            </div>
            <div className="mb-3">
              <label htmlFor="inputMessage" className="form-label">Message</label>
              <textarea className="form-control" id="inputMessage" rows="4" placeholder="Enter your message"></textarea>
            </div>
            <button type="submit" className="btn "style={{background:"brown" ,color:"white"}} onClick={sendEmail}>Submit</button>
          </form>
        </div>
  </div>
</div>
    </div>
  )
}

export default Contact