import {
    Routes,
    Route,
} from "react-router-dom"
import ProductForm from "../components/ProductForm";
import ProductDisplay from "../components/ProductDisplay";
import ProductEdit from "../components/ProductEdit";
import ProductDelete from "../components/ProductDelete";

const Main = () => {
    
    return(
        <div>
            <Routes>
                <Route path="/" element={<ProductForm />} />
                <Route path="/:id" element={<ProductDisplay/>} />
                <Route path="/:id/edit" element={<ProductEdit/>}/>
                <Route path="/:id/delete" element={<ProductDelete/>}/>
            </Routes>
        </div>
    )
}

export default Main
