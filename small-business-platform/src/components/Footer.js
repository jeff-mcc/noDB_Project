import {Component} from 'react'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <footer>
                <p>{this.props.busObj.name}</p>
                <p>{this.props.busObj.address}</p>
                <p>{this.props.busObj.hours1}<br/>{this.props.busObj.hours2}<br/>{this.props.busObj.hours3}</p>
            {/* <p>Small Store, Inc.</p>
            <p>123 East 800 North, Anywhere, UT 84000</p>
            <p>9am-8pm Mon-Fri<br/>10am-9pm Sat<br/>CLOSED Sunday</p> */}
            </footer>
        )
    }
}

export default Footer