import {Component} from 'react'
import Items from './Items'
import Dashboard from './Dashboard'
import Header from './Header'

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: true,
            datArray: [],
            cartArray: [],
            searchInput: ''
        }
    }

    ownerToggle = () => {
        this.setState({toggle: true})
        this.props.updateToggle(true)
    }

    customerToggle = () => {
        this.setState({toggle: false})
        this.props.updateToggle(false)
        let box = document.getElementById("check")
        box.value = true;
        document.getElementById("check").checked = true
        this.props.searchItem(this.state.searchInput,box.value)
    }

    addToCart = (obj) => {
        obj = {
            ...obj,
            purchased: 1
        }
        obj.quantity -= 1;
        let index = this.state.cartArray.findIndex(e=>e.id===obj.id)
        if (index===-1){
            const newObj = [...this.state.cartArray,obj]
            this.setState({cartArray: newObj})
            // console.log(newObj)
        } else{
            obj.purchased += this.state.cartArray[index].purchased 
            let newObj = [...this.state.cartArray]
            newObj[index].purchased = obj.purchased
            newObj[index].quantity = obj.quantity
            this.setState({cartArray: newObj})
            // console.log(newObj)
        }
    }

    updateCart = (cart) => {
        this.setState({cartArray: cart})
    }

    setSearch = (input) => {
        this.setState({searchInput: input})
    }

    render(){
        return(
            <div>
                <Header searchItem={this.props.searchItem} setSearch={this.setSearch}/>
                <div className="submain">
                    <div className="subheader">
                        {/* <h6>This is the body of the page!</h6> */}
                        <div className="owner-customer">
                            <button className="owncust" onClick={this.ownerToggle}>Owner View</button>
                            <button className="owncust" onClick={this.customerToggle}>Customer View</button>
                        </div>
                    </div>
                    <div className="mainbody">
                        <div className="allitems">
                            {this.props.datArray.map(item=>{
                                return(
                                    <Items key={item.id} item= {item} deleteItem={this.props.deleteItem} editItem={this.props.editItem} toggle={this.state.toggle} addToCart={this.addToCart}/>
                                )
                            })}
                        </div>
                        <Dashboard addItem={this.props.addItem} toggle={this.state.toggle} cartArray={this.state.cartArray} updateCart={this.updateCart} editItem={this.props.editItem}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body