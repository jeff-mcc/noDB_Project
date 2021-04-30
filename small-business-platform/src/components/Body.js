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
                <div className="subheader">
                    {/* <h6>This is the body of the page!</h6> */}
                    <div className="owner-customer">
                        <button>Owner View</button>
                        <button>Customer View</button>
                    </div>
                </div>
                <div className="mainbody">
                    {this.props.datArray.map(item=>{
                        return(
                            <Items key={item.id} className="" item= {item}/>
                        )
                    })}
                    <Dashboard addItem={this.props.addItem}/>
                </div>
            </div>
        )
    }
}

export default Body