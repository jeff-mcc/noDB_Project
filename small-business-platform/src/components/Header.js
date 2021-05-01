import {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            searchInput: ''
        }
    }

    handleInput = () => {
        //eventually will handle the input to be set on state as searchInput
    }

    render(){
        return(
            <header>
                <h1 className="storetitle">S m a l l &nbsp; S t o r e</h1>
                <div className="search">
                    <input placeholder="Enter a category or name"/>
                    <button>Search</button>
                </div>
            </header>
        )
    }
}

export default Header