import {Component} from 'react'
import Items from './Items'
import Dashboard from './Dashboard'

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: false,
            datArray: []
        }
    }

    editToggle = () => {
        //will include code to edit toggle on state
    }

    render(){
        return(
            <div>
                <h2>This is the body of the page!</h2>
                {this.props.datArray.map(item=>{
                    return(
                        <Items item={item}/>
                    )
                })}
                <Dashboard addItem={this.props.addItem}/>
            </div>
        )
    }
}

export default Body