import {React, useState, useEffect} from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    Cart,
    Logo
  } from './NavbarElements';
import logoimg from '../../images/logo.png';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Navbar = () => {

    const[numProducts, setNumProducts]  = useState(0);



    const UpdateCartNum = () => {
        if (localStorage.getItem("id") === null) {
            localStorage.setItem("id", uuidv4())
        }
        axios.get('http://localhost:5000/cart', {  
            params: {
                user: localStorage.getItem("id")
            }
        }).then(res => setNumProducts(res.data.length))
        .catch(err => {
            alert("Something is wrong on our side. Please try again later")
            console.log('Error: ' + err)
        });
    }

    useEffect(() => {
        UpdateCartNum();
    });



    return (
        <>
            <Nav>
                <NavLink to="/">

                    {/* <Logo src={logoimg} /> */}
                    <h1>Logo</h1>
                    {/* <img src={logo} alt='Logo' /> */}
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    {/* <NavLink to="/about" activeStyle>
                        About
                    </NavLink> */}
                    <NavLink to="/products" activeStyle>
                        Products
                    </NavLink>
                </NavMenu>

                <NavBtn>
                    <NavLink to="/cart" activeStyle>
                         <Cart />
                    </NavLink>
                <h1>{numProducts}</h1>
                </NavBtn>
            </Nav>
        </>
    )
};

export default Navbar;
