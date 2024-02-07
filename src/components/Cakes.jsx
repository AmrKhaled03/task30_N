import React, { useState, useEffect, useContext } from "react";
import pr1 from "../imgs/p1.jpeg";
import pr2 from "../imgs/p2.jpeg";
import pr3 from "../imgs/p3.jpeg";
import pr4 from "../imgs/p4.jpeg";
import pr5 from "../imgs/p5.jpeg";
import pr6 from "../imgs/p6.jpeg";
import pr7 from "../imgs/p7.jpeg";
import pr8 from "../imgs/p8.jpeg";
import { Modal, Button } from 'react-bootstrap';
import { ShoppingContext } from "./ShoppingContext";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
const Cakes = () => {
  const [cakes, setCakes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [selectedCake, setSelectedCake] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const handleShowDetails = (cake) => {
    setSelectedCake(cake);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCake(null);
  };
  useEffect(() => {
    const storedProducts = [
      {
        id: 0,
        img: pr1,
        title: "Chocolate Cupcake",
        price: 150,
        rate: 2.4,
        desc:"loremfvcffrerfrfrefre"
      },
      {
        id: 1,
        img: pr2,
        title: "Vanilla & Berry Cupcake",
        price: 170,
        rate: 2.6,
        desc:"loremfvcffrerfrfrefre"

      },
      {
        id: 2,
        img: pr3,
        title: "Strawberry Cake",
        price: 250,
        rate: 2.7,
        desc:"loremfvcffrerfrfrefre"

      },
      {
        id: 3,
        img: pr4,
        title: "Chocolate Cake",
        price: 270,
        rate: 2.1,
        desc:"loremfvcffrerfrfrefre"

      },
      {
        id: 4,
        img: pr5,
        title: "Chocolate Cookie",
        price: 130,
        rate: 1.3,
        desc:"loremfvcffrerfrfrefre"

      },
      {
        id: 5,
        img: pr6,
        title: "Redvelved Cookie",
        price: 190,
        rate: 1.2,
        desc:"loremfvcffrerfrfrefre"

      },
      {
        id: 6,
        img: pr7,
        title: "Lotus Cheesecake",
        price: 300,
        rate: 3,
        desc:"loremfvcffrerfrfrefre"

      },
      {
        id: 7,
        img: pr8,
        title: "Pistachio Cheesecake",
        price: 220,
        rate: 2.4,
        desc:"loremfvcffrerfrfrefre"

      },
    ];
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setCakes(storedProducts);
  }, []);
  const{addCart, addToSpecials}=useContext(ShoppingContext);
  return (
    <div className="cakes py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="special-heading">Our Deserts</h1>
          </div>
        </div>
        {loading === true ? (
          <div className="text-center d-flex justify-content-center align-items-center mt-5 pt-5">
            <span className="loader"></span>
          </div>
        ) : (
          <>
            <div className="row py-5">
            {cakes.map((cake) => (
              <div className="col-lg-3 col-md-6 mb-4" key={cake.id}>
                <div className="cake">
                  <img
                    src={cake.img}
                    alt={cake.title}
                    className="img-fluid pr-img"
                  />
                  <div className="body my-2 d-flex flex-column justify-content-center align-items-center">
                    <h4 className="pr-title">{cake.title}</h4>
                    <span className="pr-price">$ {cake.price}</span>
                    <button
                      className="btn  btn-sm w-50 my-3 overflow-hidden cake-btn"
                      style={{ backgroundColor: "brown", color: "white" }}
                      onClick={()=>handleShowDetails(cake)}
                    >
                     Details
                    </button>
                    <div className="part-1">
                      <ul>
                        <li>
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            onClick={() => addCart(cake)}
                          />
                        </li>
                        <li>
                          <FontAwesomeIcon
                            icon={faHeart}
                            onClick={() =>  addToSpecials(cake)}
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> 
          </>
       
        )}
         {selectedCake && (
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title style={{color:"brown"}}>{selectedCake.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedCake.img} alt={selectedCake.title} className="img-fluid" />
              {/* Add other details here based on your product object */}
              <p style={{color:"brown"}}>Description: {selectedCake.desc}</p>
              <p style={{color:"brown"}}>Price: ${selectedCake.price}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{background:"brown"}} onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Cakes;
