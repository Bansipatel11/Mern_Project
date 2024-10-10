import { Link, useNavigate, useParams } from "react-router-dom";
import AddEditProduct from "./AddEditproduct";

export default function MaryKay(){
    const { id } = useParams();
    const navigate = useNavigate();

    return(
        <>
            <div className=" w-100 h-100 container">
                <div className="row mt-3 text-center">
                    <h2> 6.Mary Kay</h2>
                    <div className="col ">
                        <img src="data:image/jpeg;base64,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" className="img-thumbnail" />
                    </div>
                    <p>
                        <h3>Description :</h3>
                        Mary Kay offers a wide range of products, including skincare, color cosmetics, fragrances, and beauty nutrition.
                        Mary Kay's primary manufacturing plant is in Dallas, Texas, and they also have a manufacturing plant in Hangzhou, China. Mary Kay's products are designed to be effective, high quality, and affordable. 
  
 
                    </p>
                    <button
                        className="btn btn-outline-danger w-25 mx-auto"
                        onClick={() => {
                        const apiUrl =
                            "https://localhost:4320/products/" + id;

                        fetch(apiUrl, { method: "DELETE" })
                            .then((res) => res.json())
                            .then((res) => {
                            navigate("/home");
                            });
                        }}
                    >
                        Delete Product
                    </button>
                    <Link to={`/lakmeProduct/edit/:id`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto"> Edit Product</Link>
                    <Link to={`/home`} element={<AddEditProduct />} className="btn btn-outline-info w-25 mx-auto">Back</Link>
                </div>  
            </div>
        </>
    )
}