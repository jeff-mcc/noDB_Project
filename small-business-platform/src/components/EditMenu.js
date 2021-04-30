import {Component} from 'react'

class EditMenu extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="items">
                <input className="iteminfo iteminput" placeholder="Update Quantity Available Here" type="number"/>
                <input className="iteminfo iteminput" placeholder="Enter Sale Price Here" type="number"/>
                <button className="iteminfo">Save Edit</button>
                <button className="iteminfo">Delete Item</button>
                <button className="iteminfo" onClick={this.props.editToggle}>Cancel</button>
            </div>
        )
    }
}

export default EditMenu