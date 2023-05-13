import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
        .then((response) => {
            setProductsList(response.data.results) 
        })
        .catch((err) => {
            console.log("Them Errors: ", err)
        })
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/products/new',{
            title,
            price,
            description
        })
        .then((res => console.log(res)))
        .catch(err => console.log(err))

        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <div className='container'>
            <h1 className='text-center mb-5'>Product Manager</h1>
            <div className='d-flex justify-content-center'>
                <form style={{width: 300}} onSubmit={handleSubmit}>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Title: </label>
                        <input className='form-control-sm' type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
                    </p>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Price: </label>
                        <input className='form-control-sm' type="number" onChange={(e) =>setPrice(parseInt(e.target.value))} value={price}/>
                    </p>
                    <p className='text-bg-secondary p-2 d-flex justify-content-between'>
                        <label className='form-label me-2'>Description: </label>
                        <input className='form-control-sm' type="text" onChange={(e) =>setDescription(e.target.value)} value={description}/>
                    </p>
                    <button className='mt-3 btn btn-danger btn-center'>Create</button>
                </form>
            </div>

            <div className='container'>
                <h1>Thien's Store</h1>
                {
                    productsList.map((item, i) =>{
                        return(
                        <p key={i}>{item.title}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductForm