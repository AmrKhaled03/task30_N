import React  from 'react'
import ser1 from"../imgs/ser1.jpeg";
import ser2 from"../imgs/ser2.jpeg";
import ser3 from"../imgs/ser3.jpeg";
import ser4 from"../imgs/ser4.jpeg";
import ser5 from"../imgs/ser5.jpeg";
import ser6 from"../imgs/ser6.jpeg";
import "../App.css"
const Services = () => {
    const services=[
        {
            id:0,
            title:"Best Cake Design",
            img:ser1,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",


        },
        {
            id:1,
            title:"Best Cupcakes",
            img:ser2,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id:2,
            title:"Deserts",
            img:ser6,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id:3,
            title:"Awsome Recipes",
            img:ser3,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

        },
        {
            id:4,
            title:"Best Cookies",
            img:ser4,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            id:5,
            title:"Home Delivery",
            img:ser5,
            desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        }
    ]
  
  return (
    <div className="services py-5">
<div className="container">
    <div className="row">
        <div className="col-12">
             <h1 className='special-heading py-5'>
                Services We Provide
             </h1>
        </div>

    </div>
    <div className="row py-5">
        {services.map((service)=>(
            <div className=" col-lg-4 col-md-6 mb-4" key={service.id}>
            <div className="service">

<img src={service.img} alt={service.title}  className='img-fluid ser-img '/>
<div className="body my-2">
    <h4 className='ser-title'>
        {service.title}
    </h4>
    <p className='ser-desc'>
        {service.desc}
    </p>
</div>

            </div>

            </div>
        ))}
        
    </div>
</div>
    </div>
    
  )
}

export default Services