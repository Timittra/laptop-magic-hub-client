/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './Admin.css';
import { Nav} from 'react-bootstrap';
import { Button, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faTrashAlt,faThLarge } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const [laptops, setLaptops] = useState([]);

    useEffect(() =>{

        fetch('https://nameless-peak-99458.herokuapp.com/laptops')
        .then(res => res.json())
        .then(data => setLaptops(data));

    }, []);

     const onSubmit = data => {
        const laptopData = {
            name: data.name,
            price: data.price,
            imageURL: imageURL
        };
        const url = `https://nameless-peak-99458.herokuapp.com/addLaptop`;

        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(laptopData)
        })
        .then(res => console.log('server side response', res))
    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '21b616c2588bb82fab3741ad4b67b5f0');
        imageData.append('image', event.target.files[0]);
        
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    };

       
    const deleteProduct = id => {
        
      fetch(`https://nameless-peak-99458.herokuapp.com/deleteProduct/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           console.log(data);
        });
    };


    return (
      <div className='admin'>

        <Nav variant="tabs" defaultActiveKey="/admin">
          <Nav.Item>
            <Nav.Link href="#add-item">Add Product</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#dlt-products">Manage Products</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className='container add-products' id='add-item'>
        <h3 style={{color:'white'}}><FontAwesomeIcon icon={ faPlus} />Add Product</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue="Laptop Name" ref={register} />
          <br />
          <input name="price" defaultValue="Price" ref={register} />
          <br />
          <input name="exampleRequired" type="file" onChange={handleImageUpload} />
          <br />
          <input style={{backgroundColor:'pink'}} type="submit" value="Save" />
        </form>
        </div>
      
        
         <div className='manage-products' id='dlt-products'>
          <h3><FontAwesomeIcon style={{padding:'3px'}} icon={ faThLarge } />Manage Products</h3>
         {laptops.map((laptop) => (
            <div className='container list'>
              <Grid xs={12} sm={12} md={12} lg={12} key={laptop._id} item>
             <h5>{laptop.name}, Price: {laptop.price}  
               <Button onClick={() => deleteProduct(laptop._id)}>
               <FontAwesomeIcon style={{color:'red'}} icon={ faTrashAlt } />
               </Button>
               </h5>
            </Grid>
            </div>
           
          ))}
         </div>

      </div>
    );
};

export default Admin;