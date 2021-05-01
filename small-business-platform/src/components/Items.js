import {Component} from 'react'
import EditMenu from './EditMenu'

class Items extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: false,
            // buyArray: []
        }
    }

    editToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }

    render(){
        const saleText = () => {
            if (this.props.item.sale===true){
                return (<p className="iteminfo howmuch"><s>${this.props.item.price}</s> &nbsp; <p className="saleprice">${this.props.item.salePrice}</p></p>)
            } else{
                return (<p className="iteminfo howmuch">${this.props.item.price}</p>)
            }
        }
        const toggleAvail = () => {
            if (this.props.toggle===true){
                return (<p className="iteminfo howmany">Available: {this.props.item.quantity}</p>)
            }
        }
        const owncustEdit = () => {
            if (this.props.toggle===true){
                return (this.editToggle())
            } else{
                const quant = this.props.item.quantity - 1;
                // console.log(quant)
                if (quant<0){
                    alert('No remaining inventory is available to purchase')
                } else{
                    if (this.props.item.sale===true){
                        this.props.editItem(this.props.item.id,quant,this.props.item.salePrice)
                    } else{
                        this.props.editItem(this.props.item.id,quant,0)
                    }
                    this.props.addToCart(this.props.item)
                }
            }
        }
        return this.state.toggle ? (
            <EditMenu editToggle={this.editToggle} deleteItem={this.props.deleteItem} editItem={this.props.editItem} item={this.props.item}/>
        ) : (
            <div className="items">
                <div className="imageholder">
                    <img className="image iteminfo" src={this.props.item.imageURL} alt={this.props.item.name} onClick={owncustEdit}/>
                </div>
                <p className="iteminfo what">{this.props.item.name}</p>
                {saleText()}
                {/* <p className="iteminfo howmuch">${this.props.item.price}</p> */}
                <p className="iteminfo about">{this.props.item.description}</p>
                {toggleAvail()}
                {/* <p className="iteminfo howmany">Available: {this.props.item.quantity}</p> */}
            </div>
        )
    }
}

export default Items