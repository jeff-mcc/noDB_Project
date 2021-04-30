import {Component} from 'react'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            newItem: []
        }
    }

    render(){
        return(
            <div>
                <h3>Add a new item to your inventory</h3>
                <h4>Name: <input/></h4>
                <h4>Price: <input/></h4>
                <h4>Description: <input/></h4>
                <h4>Starting Quantity: <input/></h4>
                <h4>image URL: <input/></h4>
                <h4>Category 1: <select >
                    <option>--Pick at least 1 category--</option>
                    <option>Food</option>
                    <option>Drink</option>
                    <option>Household Items</option>
                    <option>Furniture</option>
                    <option>Bedroom</option>
                    <option>Tools</option>
                    <option>Bathroom</option>
                    <option>Outdoors</option>
                    <option>Electronics</option>
                </select></h4>
                <h4>Category 2: <select>
                    <option>--Second category optional--</option>
                    <option>Food</option>
                    <option>Drink</option>
                    <option>Household Items</option>
                    <option>Furniture</option>
                    <option>Bedroom</option>
                    <option>Tools</option>
                    <option>Bathroom</option>
                    <option>Outdoors</option>
                    <option>Electronics</option>
                </select></h4>
                <button>Add Item to Inventory</button>
            </div>
        )
    }
}

export default Dashboard