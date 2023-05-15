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
                // console.log(response.data.results)
                setProduct(response.data.results)
            })
            .catch((err) => {
                console.log("Them Errors: ", err)
            })
    }, []);

    return (
        <div>
            <Link to={"/"} className='btn btn-outline-primary'>Home</Link> 
            {
                product.map((item, i) => {
                    return (
                        <div className='container text-center' key = {i}>
                            <h1 className='mb-5'>{item.title}</h1>
                            <p> <span className='fw-bolder'> Price: $</span>  {item.price}</p>
                            <p><span className='fw-bolder'>Description: </span> {item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductDisplay