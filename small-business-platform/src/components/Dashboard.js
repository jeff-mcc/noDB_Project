import {Component} from 'react'

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            nameInput: '',
            priceInput: '',
            descInput: '',
            quantInput: '',
            imageInput: '',
            catOneInput: '',
            catTwoInput: ''
        }
    }

    handleInput = (target) => {
        let {value,name} = target;
        if ((name==="catOneInput" || name==="catTwoInput") && (value==="--Pick a Category (Required)--" || value==="--Second Category (Optional)--")){
            value = '';
        } else if(name==="priceInput" || name==="quantInput"){
            value = parseFloat(value);
            if (isNaN(value) || value===0){
                value = '';
            } 
        }
        this.setState({[name]: value})
    }

    handleClick = () => {
        let {nameInput,priceInput,descInput,quantInput,imageInput,catOneInput,catTwoInput} = this.state;
        if (nameInput==='' || priceInput==='' || descInput==='' || catOneInput===''){
            alert(`Some required entries have been left blank!\n\nEnter all required information before clicking the "Add Item to Inventory" button.`)
        } else{
            if(imageInput===''){
                imageInput='https://via.placeholder.com/200'
            }
            if(quantInput===''){
                quantInput=0;
            }
            const newItem = {
                name: nameInput,
                price: priceInput,
                description: descInput,
                quantity: quantInput,
                imageURL: imageInput,
                categories: {
                    cat1: catOneInput,
                    cat2: catTwoInput
                }
            }
            // console.log(newItem)
            this.props.addItem(newItem)
            this.setState({nameInput: '',priceInput: '',descInput: '',quantInput: '',imageInput: '',catOneInput: '',catTwoInput: ''})
        }
    }

    render(){
        return(
            <div className="dashboard">
                <h3>Add a new item to your inventory</h3>
                <h4>Name: <input name="nameInput" value={this.state.nameInput} onChange={(e)=>this.handleInput(e.target)} placeholder="Item Name (Required)"/></h4>
                <h4>Price: <input name="priceInput" type="number" value={this.state.priceInput} onChange={(e)=>this.handleInput(e.target)} placeholder="Enter a number (Required)"/></h4>
                <h4>Description: <input name="descInput" value={this.state.descInput} onChange={(e)=>this.handleInput(e.target)} placeholder="Item Description (Required)"/></h4>
                <h4>Starting Quantity: <input name="quantInput" type="number" value={this.state.quantInput} onChange={(e)=>this.handleInput(e.target)} placeholder="Enter a number (Optional)"/></h4>
                <h4>image URL: <input name="imageInput" value={this.state.imageInput} onChange={(e)=>this.handleInput(e.target)} placeholder="Enter URL (Optional)"/></h4>
                <h4>Category 1: <select name="catOneInput" value={this.state.catOneInput} onChange={(e)=>this.handleInput(e.target)}>
                    <option value="">--Pick a Category (Required)--</option>
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
                <h4>Category 2: <select name="catTwoInput" value={this.state.catTwoInput} onChange={(e)=>this.handleInput(e.target)}>
                    <option value="">--Second Category (Optional)--</option>
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
                <button onClick={this.handleClick}>Add Item to Inventory</button>
                <br/>
                <br/>
                <h3>Click on an image to Edit or Delete an item</h3>
            </div>
        )
    }
}

export default Dashboard


//