/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom'
import './CheckOut.css';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [laptop, setLaptop] = useState([]);
    const history = useHistory();
    let {id} = useParams();

    const handleProceedCheckout = () => {
        const orderDetails = {...loggedInUser, laptopInfo:laptop, orderTime: new Date()};
      
        fetch('http://localhost:5056/addOrder', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            history.push('/order');
          }
        })
        
       }

       useEffect( () => {
        fetch(`http://localhost:5056/laptop/${id}`)
        .then(res => res.json())
        .then(data => setLaptop(data));
       
    },[id]);

    return (
            <div style={{marginTop:'30px'}}>
                <Card className='checkout-card' style={{ width: '20rem', height: '18rem'}}>
                <Card.Body>
                    <Card.Title>Description: {laptop.name}</Card.Title>
                    <Card.Title>Quantity: 1</Card.Title>
                    <Card.Text>Price: {laptop.price}</Card.Text>
                    <Button
                        variant="light"
                        onClick={handleProceedCheckout}
                    >Checkout</Button>
                </Card.Body>
            </Card>
            </div>
    );
};

export default CheckOut;