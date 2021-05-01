import {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput: ''
        }
    }

    handleInput = (value) => {
        this.setState({searchInput: value})
    }

    handleClick = () => {
        this.props.searchItem(this.state.searchInput)
    }

    render(){
        return(
            <header>
                <h1 className="storetitle">S m a l l &nbsp; S t o r e</h1>
                <div className="search">
                    <input placeholder="Enter a category or name" onChange={e=>this.handleInput(e.target.value)}/>
                    <button onClick={this.handleClick}>Search</button>
                </div>
            </header>
        )
    }
}

export default Header