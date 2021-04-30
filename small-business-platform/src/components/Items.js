import {Component} from 'react'
import EditMenu from './EditMenu'

class Items extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: false
        }
    }

    editToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render(){
        return this.state.toggle ? (
            <EditMenu editToggle={this.editToggle}/>
        ) : (
            <div className="items">
                <div className="imageholder">
                    <img className="image iteminfo" src={this.props.item.imageURL} alt={this.props.item.name} onClick={()=>this.editToggle()}/>
                </div>
                <p className="iteminfo what">{this.props.item.name}</p>
                <p className="iteminfo howmuch">${this.props.item.price}</p>
                <p className="iteminfo about">{this.props.item.description}</p>
                <p className="iteminfo howmany">Available: {this.props.item.quantity}</p>
            </div>
        )
    }
}

export default Items