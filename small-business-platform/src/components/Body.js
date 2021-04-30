import {Component} from 'react'
import Items from './Items'

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
            </div>
        )
    }
}

export default Body