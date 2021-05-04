import {Component} from 'react'

class EditMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            setSale: 0,
            setQuant: 0,
            toggle: ''
        }
    }

    handleChange = (target) => {
        let {name,value} = target;
        // if (name==="setQuant"){
        //     value += this.props.item.quantity
        // }
        this.setState({[name]: value})
    }

    handleDelete = () => {
        const quant = this.props.item.quantity + parseInt(this.state.setQuant,10);
        this.props.deleteItem(this.props.item.id,quant)
    }

    handleEdit = () => {
        const quant = this.props.item.quantity + parseInt(this.state.setQuant,10);
        if (quant<0){
            alert('Item quantity can not be set to a value less than zero!')
        } else{
            // console.log(this.state.setSale)
            // if (this.props.item.sale===true && this.state.setSale===undefined){
            //     this.props.editItem(this.props.item.id,quant,this.props.item.salePrice)
            // } else{
                this.props.editItem(this.props.item.id,quant,this.state.setSale)
            // }
            this.props.editToggle()
        }
    }

    render(){
        return(
            <div className="items editmenu">
                <p className="iteminfo editText">Quantity: Number to add (+) or delete (-) from inventory</p>
                <input className="iteminfo iteminput" placeholder="Update Quantity Available" type="number" name="setQuant" onChange={e=>this.handleChange(e.target)}/>
                <br/>
                <p className="iteminfo editText">Sale price: Enter 2 decimals</p>
                <input className="iteminfo iteminput" placeholder="Enter Sale Price" type="number" name="setSale" onChange={e=>this.handleChange(e.target)}/>
                <br/>
                <button className="iteminfo footedit" onClick={this.handleEdit}>Save Edit</button>
                <br/>
                <button className="iteminfo footedit" onClick={this.handleDelete}>Delete Item</button>
                <br/>
                <button className="iteminfo footedit" onClick={this.props.editToggle}>Cancel</button>
            </div>
        )
    }
}

export default EditMenu