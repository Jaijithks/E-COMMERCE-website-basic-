import { Link } from "react-router-dom";

function ProductCard({product}){
    return(
         <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <div className="actions">
                           <Link to={`/products/${product.id}`}><button className="btn1">View Details</button></Link>
                            <button className="btn2">Add-to-cart</button>
                    </div>
                    </div>
    )
}
export default ProductCard;