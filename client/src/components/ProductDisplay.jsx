import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductDisplay = (props) => {
    const [product, setProduct] = useState([])
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                console.log(response.data.results)
                setProduct(response.data.results)
            })
            .catch((err) => {
                console.log("Them Errors: ", err)
            })
    }, []);

    return (
        <div>
            {
                product.map((item, i) => {
                    return (
                        <div className='container text-center' key = {i}>
                            <h1>{item.title}</h1>
                            <p>Price: {item.price}</p>
                            <p>Description: {item.description}</p>
                        </div>
                    )
                })
            }
            <Link to={"/"}>Home</Link> 
        </div>
    )
}

export default ProductDisplay