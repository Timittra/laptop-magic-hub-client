/* eslint-disable no-unused-vars */
import React from 'react';
import './Laptop.css';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';


const Laptop = ({laptop}) => {
    
    const history = useHistory();

    const handleClick = (id) =>{
        const url = `/checkout/${id}`;
        history.push(url);
    }
    
    return (
        <Card className='laptop-card' style={{ width: '14rem', height: '20rem' }}>
            <Card.Img variant="top" style={{height:'120px', width:'100%'}} src={laptop.imageURL} />
            <Card.Body>
                <Card.Title>{laptop.name}</Card.Title>
                <Card.Text>${laptop.price}</Card.Text>
                <Button
                    variant="info"
                    onClick={() => handleClick(laptop._id)}
                >Buy Now</Button>
            </Card.Body>
        </Card>
    );
};

export default Laptop;