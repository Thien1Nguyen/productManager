import React, {useState} from "react";
import {
    Routes,
    Route,
} from "react-router-dom"
import ProductForm from "../components/ProductForm";

const Main = () => {
    
    return(
        <div>
            <Routes>
                <Route path="/" element={<ProductForm />} />
            </Routes>
        </div>
    )
}

export default Main
