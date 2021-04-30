import {Component} from 'react'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameInput: '',
            priceInput: null,
            descInput: '',
            quantInput: '',
            imageInput: '',
            catOneInput: '',
            catTwoInput: ''
        }
    }

    handleInput = (target) => {
        let {value,name} = target;
        if ((name==="catOneInput" || name==="catTwoInput") && (value==="--Pick at least 1 category--" || value==="--Second category optional--")){
            value = '';
        } else if(name==="priceInput"){
            value = parseFloat(value);
            if (isNaN(value) || value===0){
                value = null;
                console.log(value)
            } 
        }
        this.setState({[name]: value})
        // console.log(this.state[name])
    }

    render(){
        return(
            <div className="dashboard">
                <h3>Add a new item to your inventory</h3>
                <h4>Name: <input name="nameInput" onChange={(e)=>this.handleInput(e.target)}/></h4>
                <h4>Price: <input name="priceInput" onChange={(e)=>this.handleInput(e.target)}/></h4>
                <h4>Description: <input name="descInput" onChange={(e)=>this.handleInput(e.target)}/></h4>
                <h4>Starting Quantity: <input name="quantInput" onChange={(e)=>this.handleInput(e.target)}/></h4>
                <h4>image URL: <input name="imageInput" onChange={(e)=>this.handleInput(e.target)}/></h4>
                <h4>Category 1: <select name="catOneInput" onChange={(e)=>this.handleInput(e.target)}>
                    <option>--Pick at least 1 category--</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Household Items">Household Items</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Tools">Tools</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Outdoors">Outdoors</option>
                    <option value="Electronics">Electronics</option>
                </select></h4>
                <h4>Category 2: <select name="catTwoInput" onChange={(e)=>this.handleInput(e.target)}>
                    <option>--Second category optional--</option>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    <option value="Household Items">Household Items</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Tools">Tools</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Outdoors">Outdoors</option>
                    <option value="Electronics">Electronics</option>
                </select></h4>
                <button>Add Item to Inventory</button>
            </div>
        )
    }
}

export default Dashboard