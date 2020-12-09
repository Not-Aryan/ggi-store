import React, { useState } from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Navbar from "../Navbar/index";


const Product = (props) => {
    const [openModal, setopenModal] = useState(false);

    const oModal = () => {
      setopenModal(true);
    }
  
    const cModal = () => {
      setopenModal(false);
    }

    const [quantity, changeQuantiity] = useState(1);

    const AddProductToCart = () => {

        if (localStorage.getItem("id") === null) {
            localStorage.setItem("id", uuidv4())
        }

        const Product = {
            user: localStorage.getItem("id"),
            name: props.name,
            quantity: Number(quantity),
            price: Number(props.price)
        }


        axios.post('http://localhost:5000/products', Product)
            .then(res => console.log(res.data))
            .catch(err => {
                alert("Something is wrong on our side. Please try again later")
                console.log('Error: ' + err)
            });
    
        cModal();

        window.location.reload();
    }


    return (
        <>
            <div className="product" onClick={oModal}>
                <img src={props.image} />
                <span></span>
                <h2 className="name">{props.name}</h2>
                <h2>${props.price}</h2>
            </div>

            <div className={openModal ? "active modal" : "modal"}>
                <div className="modal-content">
                    <span className="modal-close" onClick={cModal}>&times;</span>

                    <div className="cart-info">
                        
                        <img src={props.image} />

                        <div className="words">
                            <h1>{props.name}</h1>
                            <h2>${props.price}</h2>
                            <h3>Quantity</h3>
                            <div className="quan">
                                <button onClick={(() => { quantity > 1 ? changeQuantiity(quantity-1) : changeQuantiity(quantity) })}>&minus;</button>
                                <h2>{quantity}</h2>
                                <button onClick={(() => { quantity < props.stock ? changeQuantiity(quantity+1) : changeQuantiity(quantity) })}>+</button>
                            </div>
                            <button onClick={AddProductToCart} className="atc">Add to Cart</button>
                            <h3>Description</h3>
                            <h4>{props.description}</h4>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
};

export default Product;
