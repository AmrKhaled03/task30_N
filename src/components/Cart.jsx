import React, { useContext } from 'react'
import "../App.css"
import { ShoppingContext } from './ShoppingContext';
const Cart = () => {
  const{cart=[],updateCartItem,decCartItem,delAll,delItem}=useContext(ShoppingContext);
    const total = cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
  return (
    <div id='cart ' className='cart w-100 h-auto'>

    <div className="container d-flex justify-content-center align-items-center flex-column mt-5">
        <div className="row text-center">
            <div className="col-lg-12">
                <h1 className='special-heading my-5  p-5'>
Cart
                </h1>
            </div>
        </div>

   <table className="table table-striped">
        <thead>
          <tr>
          <th scope='col'>Id</th>
                  <th scope='col'>Image</th>
                  <th scope='col'>Title</th>
                  <th scope='col'>quantity</th>
                  <th scope='col'>Price</th>
                  <th scope='col'>All</th>
                  <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
          cart.length <=0 ? (
            <tr className='text-center'>
            <td colSpan="7">Your cart is empty</td>
            </tr>
            ) :
              cart.map(item => (
            <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      <img src={item.img} alt={item.title} className='img-fluid cart-img ' />
                    </td>
              <td >{item.title}</td>
              <td className='quantity-value '>{item.quantity}</td>
              <td>
              <button
                  className="btn   btn-increase "
                        onClick={() => updateCartItem(item)}
                        >
                        +
                      </button>
      
                    
                      <button
                  className="btn    btn-decrease"
                        onClick={() => decCartItem(item)}
                        >
                  -
                </button>
                    </td>
                    <td>{item.price}$.00</td>
                    <td className="all-price">{item.price * item.quantity}</td>
                    <td>
                      {" "}
                      <button onClick={() => delItem(item.id)} >
                        {" "}
                        Delete{" "}
                      </button>{" "}
                    </td>
            </tr>
          ) 

         ) 
        }
        </tbody>
      </table>
<div className="row my-5 p-5 text-center d-flex justify-content-center align-items-center flex-column">
<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 total">
<h1 className='special-heading  text-white p-1'>
Total : ${total}
                </h1>
</div>
<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
<button className='btn btn-lg rounded  btn-danger my-5' onClick={delAll}>
Delete All
</button>
</div>
</div>
      
            </div>
     

</div>
  )
}

export default Cart