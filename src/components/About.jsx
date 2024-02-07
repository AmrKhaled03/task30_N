import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import { Link } from 'react-router-dom'
import about from"../imgs/about.webp"
import "../App.css"
const About = () => {
  const [text] = useTypewriter({
    words: ['Cakes', 'Cupcakes', 'Cookies', 'Reciepes'],
    loop: 100,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
  <div className="about py-5">
    <div className="container ">
    <div className="row ">
            <div className="col-12">
            <h1 className="special-heading">
                  About Us
                </h1>
            </div>
        </div>
        <div className="row my-5 py-5">
          <div className="col-lg-6 abou mb-4">
<div className="about-one">
<div className="banner mb-4">
<h4 className='banner-text' >
  We are the best place to find your <strong style={{color:"pink",fontWeight:"900",fontStyle:"italic"}}>
        
        {text}
        </strong> 
</h4>

</div>
<p style={{color:"555"}} className="mb-4">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa repellat delectus mollitia ullam non nostrum? Illo eveniet iure repellendus explicabo ut vel labore ipsum corrupti eligendi, quod, placeat delectus facilis.
</p>
<button className='btn  btn-sm w-50 my-3 overflow-hidden  ' style={{backgroundColor:"brown",color:"white",borderRadius:"35px"}}  >
<Link to="/cakes" style={{textDecoration:"none",color:"white"}}>
Explore
</Link>
</button>
</div>
          </div>
          <div className="col-lg-6 abou">
            <div className="about-two">
    <img src={about} alt="about" className='img-fluid  abo-img' />          
            </div>

          </div>
        </div>
    </div>
  </div>
  )
}

export default About