import {Component} from 'react'

class Items extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <div className="items">
                <img className="image" src={this.props.item.imageURL} alt={this.props.item.name}/>
                <p>Name: {this.props.item.name}</p>
                 <p>Price: {this.props.item.price}</p>
                 <p>Description: {this.props.item.description}</p>
                 <p>Available: {this.props.item.quantity}</p>
            </div>
        )
    }
}

export default Items