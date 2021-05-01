import {Component} from 'react'
import Items from './Items'
import Dashboard from './Dashboard'

class Body extends Component{
    constructor(props){
        super(props)
        this.state = {
            toggle: true,
            datArray: []
        }
    }

    ownerToggle = () => {
        this.setState({toggle: true})
    }

    customerToggle = () => {
        this.setState({toggle: false})
    }

    render(){
        return(
            <div className="submain">
                <div className="subheader">
                    {/* <h6>This is the body of the page!</h6> */}
                    <div className="owner-customer">
                        <button className="owncust" onClick={this.ownerToggle}>Owner View</button>
                        <button className="owncust" onClick={this.customerToggle}>Customer View</button>
                    </div>
                </div>
                <div className="mainbody">
                    <div className="allitems">
                        {this.props.datArray.map(item=>{
                            return(
                                <Items key={item.id} item= {item} deleteItem={this.props.deleteItem} editItem={this.props.editItem} toggle={this.state.toggle}/>
                            )
                        })}
                    </div>
                    <Dashboard addItem={this.props.addItem} toggle={this.state.toggle}/>
                </div>
            </div>
        )
    }
}

export default Body