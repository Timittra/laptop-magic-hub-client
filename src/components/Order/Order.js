/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('http://localhost:5056/orders?email='+loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }

        })
        .then(res => res.json())
        .then(data =>setOrders(data));
    },[]);
    return (
        <div style={{textAlign:'center', marginTop:'30px'}}>
            <h3>You have {orders.length} Order(s) {loggedInUser.userName}</h3>
            <p>Your order is confirmed by you email: {loggedInUser.email}</p>
            <p>And your laptop(s): </p>
            {
                orders.map(order => <li key={order._id}>Laptop: {order.laptopInfo.name}, Price: {order.laptopInfo.price} at {order.orderTime} </li>)
            }
            <h3 style={{marginTop:'20px', color:'skyblue'}}>Happy Shopping<FontAwesomeIcon icon={ faLaptop} /></h3>
        </div>
    );
};


export default Order;