import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function ProductCard({product}){
    const { cart , addTocart } = useCart();
    const productincart = cart.find((item) => item.id === product.id);
    const noofproduct = productincart?.quantity
    return(
         <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <div className="actions">
                           <Link to={`/products/${product.id}`}><button className="btn1">View Details</button></Link>
                            <button className="btn2" onClick={() =>{
                                addTocart(product.id);
                            }}>Add-to-cart {noofproduct? `${noofproduct}` : ''}</button>
                    </div>
                    </div>
    )
}
export default ProductCard;