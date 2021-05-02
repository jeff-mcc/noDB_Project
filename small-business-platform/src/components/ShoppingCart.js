import {Component} from 'react'

class ShoppingCart extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    handleClickPlus = (id) => {
        const index = this.props.cartArray.findIndex(e=>e.id===id)
        const newPurchased = this.props.cartArray[index].purchased+1;
        const availToBuy = this.props.cartArray[index].quantity-1;
        if (availToBuy>=0){
            let newCart = [...this.props.cartArray]
            newCart[index].purchased = newPurchased;
            newCart[index].quantity = availToBuy;
            this.props.updateCart(newCart)
        } else{
            alert("No remaining inventory is available to purchase")
        }
    }

    handleClickMinus = (id) => {
        const index = this.props.cartArray.findIndex(e=>e.id===id)
        const newPurchased = this.props.cartArray[index].purchased-1;
        const availToBuy = this.props.cartArray[index].quantity+1;
        if (newPurchased>=0){
            let newCart = [...this.props.cartArray]
            newCart[index].purchased = newPurchased;
            newCart[index].quantity = availToBuy;
            if (newPurchased === 0){
                newCart.splice(index,1)
            }
            this.props.updateCart(newCart)
        }
    }
    
    render(){
        const showCart = (cart) =>{
            if(cart.length===0){
                return(
                    <h3>Click on an image to add that item to your  cart</h3>
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
                                    <h5 className="itemName">{item.name}</h5>
                                    <div className="cartShow">
                                        <img className="cartImage cartElement" src={item.imageURL} alt={item.name}/>
                                        <button className="cartElement" onClick={()=>this.handleClickMinus(item.id)}>-</button>
                                        <p className="cartElement subtotal">{item.purchased}</p>
                                        <button className="cartElement" onClick={()=>this.handleClickPlus(item.id)}>+</button>
                                        <p className="cartElement subtotal aligned">${price()}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )
            }
        }

        const subTotal = () => {
            if(this.props.cartArray.length!==0){
                const subTotalVal = this.props.cartArray.reduce((a,c)=>{
                    if (c.sale===true){
                        let num = a + (c.salePrice*c.purchased);
                        num.toFixed(2)
                        // console.log(num)
                        return num
                    } else{
                        let num = a + (c.price*c.purchased);
                        num.toFixed(2)
                        // console.log(num)
                        return num
                    }
                },0.00)
                return subTotalVal.toFixed(2)
            } else{
                const subTotalVal = 0.00;
                return subTotalVal.toFixed(2)
            }
        }
        let finalTotal = subTotal()*1.0725;
        let total = finalTotal.toFixed(2)
        let taxTotal = finalTotal-subTotal();
        let tax = taxTotal.toFixed(2)
    
        return(
            <div className="dashboard">
                <h2 className="dashTitle">Shopping Cart</h2>
            {showCart(this.props.cartArray)}
                <h4 className="orderCalc topTotal">Subtotal: ${subTotal()}</h4>
                <h4 className="orderCalc">Tax: ${tax}</h4>
                <h2 className="orderCalc">Total: ${total}</h2>
                <div>
                    <button>Cancel</button>
                    <button>Check Out</button>
                </div>
            </div>
        )
    }
}

export default ShoppingCart