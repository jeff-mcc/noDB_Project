import {Component} from 'react'
// import SearchIcon from '/../../react-icons/lib/md/search'

class Header extends Component{
    constructor(props){
        super(props)
        this.state = {
            searchInput: '',
            slideInput: false
        }
    }

    handleInput = (value) => {
        this.setState({searchInput: value})
        this.props.setSearch(value)
    }

    handleClick = () => {
        this.props.searchItem(this.state.searchInput,this.state.slideInput)
    }

    handleSlide = () => {
        const box = document.getElementById("check")
        if (box.checked === true){
            this.setState({slideInput: true})
        } else{
            this.setState({slideInput: false})
        }
        // console.log(this.state.slideInput)
    }

    render(){
        return (
            <header>
                <h1 className="storetitle">S m a l l &nbsp; S t o r e</h1>
                <div className="secondaryHeader">
                    <div className="search">
                        <label className="switch">
                            <input className="flip" id="check" type="checkbox" value={this.state.slideInput} onClick={()=>this.handleSlide()}/>
                        <span className="slider"></span>
                        </label>
                        <input placeholder="Enter a category or name" onChange={e=>this.handleInput(e.target.value)}/>
                        {/* <SearchIcon onClick={this.handleClick}/> */}
                        {/* <button onClick={this.handleClick}>Search</button> */}
                        <img className="searchButton" src="http://assets.stickpng.com/images/59cfc4d2d3b1936210a5ddc7.png" alt="search" onClick={this.handleClick}/>
                    </div>
                    <p className="toggleText">Toggle on/off to search based upon item availability</p>
                </div>
            </header>
        )
    }
}

export default Header

//next to the return
//this.props.toggle ? 

//underneath the first ) for return
//: (
//     <header>
//     <h1 className="storetitle">S m a l l &nbsp; S t o r e</h1>
//     <div className="search">
//         <label className="switch">
//             <input className="flip" id="check" type="checkbox" value={this.state.slideInput} onChange={()=>this.props.searchItem(this.state.searchInput,this.state.slideInput)} onClick={()=>this.handleSlide()}/>
//             <span className="slider"></span>
//         </label>
//         <input placeholder="Enter a category or name" onChange={e=>this.handleInput(e.target.value)}/>
//         <button onClick={this.handleClick}>Search</button>
//     </div>
//     {/* {autoSearch()} */}
// </header>
// )