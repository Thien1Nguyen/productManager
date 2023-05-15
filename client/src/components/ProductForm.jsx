import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    // const [loaded, setLoaded] = useState(false);

    const [refresh, setRefresh] = useState("")

    const [productsList, setProductsList] = useState([])



    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then((response) => {
                setProductsList(response.data.results)
                // setLoaded(true);
            })
            .catch((err) => {
                console.log("Them Errors: ", err)
            })
    }, [refresh]);





    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/products/new', {
            title,
            price,
            description
        })
            .then((res => setRefresh(res)))
            .catch(err => console.log(err))


        setTitle("");
        setPrice("");
        setDescription("");
    }


    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Product Manager</h1>
            <div className='d-flex justify-content-center  mb-5'>
                <form style={{ width: 300 }} onSubmit={handleSubmit}>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Title: </label>
                        <input className='form-control-sm' type="text" name = "title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    </p>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Price: </label>
                        <input className='form-control-sm' type="number" name = "price" onChange={(e) => setPrice(parseInt(e.target.value))} value={price} />
                    </p>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Description: </label>
                        <input className='form-control-sm' type="text" name = "description" onChange={(e) => setDescription(e.target.value)} value={description} />
                    </p>
                    <button className='mt-3 btn btn-danger btn-center'>Create</button>
                </form>
            </div>

            <div className='container border-top border-dark'>
                <h1>Thien's Store</h1>
                {
                    productsList.map((item, i) => {
                        return (
                            <div className='d-flex gap-4 mb-3' key={i}>
                                <Link to={`/${item._id}`} className='item'>{item.title}</Link>
                                <Link to={`/${item._id}/edit`} className='btn btn-warning'>Edit</Link>
                                <Link to={`/${item._id}/delete`} className='btn btn-danger'>Delete</Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductForm