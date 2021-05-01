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
            this.props.editItem(this.props.item.id,quant,this.state.setSale)
            this.props.editToggle()
        }
    }

    render(){
        return(
            <div className="items editmenu">
                <input className="iteminfo iteminput" placeholder="Update Quantity Available" type="number" name="setQuant" onChange={e=>this.handleChange(e.target)}/>
                <input className="iteminfo iteminput" placeholder="Enter Sale Price" type="number" name="setSale" onChange={e=>this.handleChange(e.target)}/>
                <button className="iteminfo" onClick={this.handleEdit}>Save Edit</button>
                <button className="iteminfo" onClick={this.handleDelete}>Delete Item</button>
                <button className="iteminfo" onClick={this.props.editToggle}>Cancel</button>
            </div>
        )
    }
}

export default EditMenu