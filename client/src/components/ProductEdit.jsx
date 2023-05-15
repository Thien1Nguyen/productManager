import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const ProductEdit = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    // const [loaded, setLoaded] = useState(false);


    const { id } = useParams();
    const navigate = useNavigate()



    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                setTitle(response.data.results[0].title)
                setPrice(response.data.results[0].price)
                setDescription(response.data.results[0].description)               
                // setLoaded(true);
            })
            .catch((err) => {
                console.log("Them Errors: ", err)
            })
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(id)
        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            title,
            price,
            description
        })
            .then((res => console.log(res)))
            .catch(err => console.log(err))


        setTitle("");
        setPrice("");
        setDescription("");
        navigate("/")
    }


    return (
        <div className='container'>
            <Link to={"/"} className='btn btn-outline-primary'>Home</Link> 
            <h1 className='text-center mb-5'>Product Editor</h1>
            <div className='d-flex justify-content-center'>
                <form style={{ width: 300 }} onSubmit={handleSubmit}>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Title: </label>
                        <input className='form-control-sm' type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </p>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Price: </label>
                        <input className='form-control-sm' type="number" onChange={(e) => setPrice(parseInt(e.target.value))} value={price} />
                    </p>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Description: </label>
                        <input className='form-control-sm' type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                    </p>
                    <button className='mt-3 btn btn-danger btn-center'>Update</button>
                </form>
            </div>
        </div>
    )
}


export default ProductEdit