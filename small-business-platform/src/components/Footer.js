import {Component} from 'react'

class Footer extends Component{
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            addressIn: '',
            hoursIn1: '',
            hoursIn2: '',
            hoursIn3: ''
        }
    }

    handleToggle = () => {
        this.setState({editToggle: !this.state.editToggle})
        // console.log(this.state.editToggle)
    }

    handleInput = (target) => {
        const {name,value} = target;
        this.setState({[name]: value})
    }

    handleSave = () => {
        const busObj = this.props.busObj;
        const hourObj = () => {
            if (this.state.hoursIn1==='' && this.state.hoursIn2==='' && this.state.hoursIn3===''){
                return ({
                    h1: busObj.hours1,
                    h2: busObj.hours2,
                    h3: busObj.hours3
                })
            } else{
                return ({
                    h1: this.state.hoursIn1,
                    h2: this.state.hoursIn2,
                    h3: this.state.hoursIn3
                })
            }
        }
        const newObj = {
            id: busObj.id,
            name: busObj.name,
            address: this.state.addressIn || busObj.address,
            hours1: hourObj().h1,
            hours2: hourObj().h2,
            hours3: hourObj().h3
        }
        this.props.editBus(newObj)
        this.handleToggle()
        this.setState({addressIn: '',hoursIn1: '',hoursIn2: '',hoursIn3: ''})
    }

    render(){

        const footView = () =>{
            if(this.props.toggle===true){
                return this.state.editToggle ? (
                    <footer>
                        <div>
                            <button onClick={()=>this.handleToggle()}>Cancel</button><br/>
                            <button onClick={()=>this.handleSave()}>Save</button>
                        </div>
                        <p>{this.props.busObj.name}</p>
                        <input placeholder="Update Address Here" name="addressIn" onChange={e=>this.handleInput(e.target)}/>
                        <div><input placeholder="Update Hours of Operation" name="hoursIn1" onChange={e=>this.handleInput(e.target)}/><br/><input placeholder="Update line 2 (Optional)" name="hoursIn2" onChange={e=>this.handleInput(e.target)}/><br/><input placeholder="Update line 3 (Optional)" name="hoursIn3" onChange={e=>this.handleInput(e.target)}/></div>
                    </footer>
                ) : (
                    <footer>
                        <button onClick={()=>this.handleToggle()}>EDIT</button>
                        <p>{this.props.busObj.name}</p>
                        <p>{this.props.busObj.address}</p>
                        <p>{this.props.busObj.hours1}<br/>{this.props.busObj.hours2}<br/>{this.props.busObj.hours3}</p>
                    </footer>
                )
            } else{
                return(
                    <footer>
                        <p>{this.props.busObj.name}</p>
                        <p>{this.props.busObj.address}</p>
                        <p>{this.props.busObj.hours1}<br/>{this.props.busObj.hours2}<br/>{this.props.busObj.hours3}</p>
                    </footer>
                )
            }
        }

        return(
            <div>
                {footView()}
            </div>
            // <footer>
            //     <p>{this.props.busObj.name}</p>
            //     <p>{this.props.busObj.address}</p>
            //     <p>{this.props.busObj.hours1}<br/>{this.props.busObj.hours2}<br/>{this.props.busObj.hours3}</p>
            // </footer>
        )
    }
}

export default Footer