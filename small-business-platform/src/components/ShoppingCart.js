function ShoppingCart(props){
    
    const showCart = (cart) =>{
        if(cart.length===0){
            return(
                <h3>Click on an image to add that item to your cart</h3>
            )
        } else{
            // console.log(cart)
            return(
                <div className="cartArrange">
                    {cart.map(item=>{
                        let price = () => {
                            if(item.sale===true){
                                const cost = parseFloat(item.salePrice * item.purchased).toFixed(2)
                                return cost
                            } else{
                                const cost = parseFloat(item.price * item.purchased).toFixed(2)
                                return cost
                            }
                        }
                        return(
                            <div>
                                <h5>{item.name}</h5>
                                <div className="cartShow">
                                    <img className="cartImage cartElement" src={item.imageURL} alt={item.name}/>
                                    <button className="cartElement">-</button>
                                    <p className="cartElement subtotal">{item.purchased}</p>
                                    <button className="cartElement">+</button>
                                    <p className="cartElement subtotal">${price()}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }
    
    return(
        <div className="dashboard">
            <h2 className="dashTitle">Shopping Cart</h2>
            {showCart(props.cartArray)}
        </div>
    )
}

export default ShoppingCart