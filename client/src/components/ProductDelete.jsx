import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ProductDelete = (props) => {

    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((response) => {
                navigate("/")
            })
            .catch((err) => {
                console.log("Them Errors: ", err)
            })
    }, []);

    return (
        <div>
            <h1>Deleting Product...</h1>
        </div>
    )
}

export default ProductDelete