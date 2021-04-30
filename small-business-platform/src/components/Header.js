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
                <h1>Small Store</h1>
                <div className="search">
                    <input placeholder="Enter a category or name"/>
                    <button>Search</button>
                </div>
            </header>
        )
    }
}

export default Header