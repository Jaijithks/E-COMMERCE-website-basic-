import { useEffect, useState } from "react";
import { getProductsByID } from "../Products/Products";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Products(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const {cart, addTocart} = useCart();

    useEffect(() => {
        const foundProduct = getProductsByID(id);
        if (!foundProduct) {
            navigate('/');
            return;
        }
        setProduct(foundProduct);
    }, [id, navigate]);

    if (!product) {
        return <div className="page"><div className="container">Loading product...</div></div>;
    }
    const productincart= cart.find((item) => item.id === product.id);
    const noofproduct = productincart?.quantity;
    return (
        <div className="page">
            <div className="container">
                <div className="product">
                    <div className="image">
                        <img src={product.image} alt={product.name} className="product-image" />
                    </div>
                    <div className="product-detail">
                        <h1>{product.name}</h1><br/>
                        <h2>${product.price.toFixed(2)}</h2>
                        <p>{product.description}</p>
                        <Link to="/" className="btn1">Back to products</Link>< br/>
                        <button className="btn2" onClick={ () => {
                            addTocart(product.id);
                        }}>Add-to-cart{noofproduct? `${noofproduct}` : ''}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;