import React, { useContext } from 'react'
import"../App.css"
import { ShoppingContext } from './ShoppingContext'
const Special = () => {
    const{specialsList=[],delItemFav}=useContext(ShoppingContext);
  return (
   <div className="specials py-5">
    <div className="container">
        <div className="row">
            <div className="col-12">
            <h1 className="special-heading">
                   Favourites List
                </h1>
            </div>
        </div>
        <div className="row py-5">
            {specialsList.map((special) => (
                <div className="col-lg-3 col-md-6 mb-4" key={special.id}>
<div className="special">
<img src={special.img} alt={special.title} className="img-fluid sp-img" />
<div className="body my-2 d-flex flex-column justify-content-center align-items-center">
<h4 className="sp-title">
                        {special.title}
                    </h4>
                    <button className='btn  btn-sm w-50 my-3 overflow-hidden  ' style={{backgroundColor:"brown",color:"white",borderRadius:"35px"}} onClick={()=>delItemFav(special.id)} >
   Remove
</button>
                  
</div>
</div>
                </div>
            ))}
        </div>
    </div>
   </div>
  )
}

export default Special