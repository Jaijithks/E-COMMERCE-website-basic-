import { useCart } from "../Context/CartContext";

function Checkout(){
    const { getproductcart, updateQuantity, removeFromCart, clearCart } = useCart();
    const cart = getproductcart();
    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    function handlePurchase() {
        if (cart.length === 0) {
            alert("Your cart is empty.");
            return;
        }

        alert("Purchase completed!");
        clearCart();
    }

    return (
        <div className="page">
            <div className="content-card checkout-card">
                <h1>Checkout</h1>
                <div className="checkout-layout">
                    <div className="checkout-items">
                        <h2>Order Summary</h2>
                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((item) => (
                                <div className="checkout-item" key={item.id}>
                                    <img src={item.product.image} alt={item.product.name} />
                                    <div className="item-info">
                                        <h3>{item.product.name}</h3>
                                        <p>${item.product.price.toFixed(2)} each</p>
                                    </div>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <div className="item-total">${(item.product.price * item.quantity).toFixed(2)}</div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                                </div>
                            ))
                        )}
                    </div>
                    <aside className="checkout-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="checkout-button" onClick={handlePurchase}>
                            Complete Purchase
                        </button>
                    </aside>
                </div>
            </div>
        </div>
    );
}
export default Checkout;