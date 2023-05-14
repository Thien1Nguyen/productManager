import {
    Routes,
    Route,
} from "react-router-dom"
import ProductForm from "../components/ProductForm";
import ProductDisplay from "../components/ProductDisplay";

const Main = () => {
    
    return(
        <div>
            <Routes>
                <Route path="/" element={<ProductForm />} />
                <Route path="/:id" element={<ProductDisplay/>} />
            </Routes>
        </div>
    )
}

export default Main
