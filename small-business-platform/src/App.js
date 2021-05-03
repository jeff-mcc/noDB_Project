import {Component} from 'react'
import axios from 'axios';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Body from './components/Body'

class App extends Component{
  constructor(){
    super()
    this.state = {
      searchInput: '',
      datArray: [],
      busObj: {},
      toggle: true
    }
  }

  componentDidMount(){
    axios.get('/smallbusiness/store')
      .then(res=>{
        // console.log(res)
        this.setState({datArray: res.data})
      })
      .catch(err=>console.log(err))
    axios.get("/smallbusiness/store/1/Bill's+Hidden+Treasures")
      .then(res=>{
        // console.log(res.data)
        this.setState({busObj: res.data})
      })
      .catch(err=>console.log(err))
  }

  addItem = (datObj) => {
    const {name,price,description,quantity,imageURL,categories} = datObj;
    axios.post('/smallbusiness/store',{name,price,quantity,description,imageURL,categories})
      .then(res=>this.setState({datArray: res.data}))
      .catch(err=>console.log(err))
  }

  deleteItem = (id,quant) => {
    quant===0 ? axios.delete(`/smallbusiness/store/${id}`)
      .then(res=>this.setState({datArray: res.data}))
      .catch(err=>console.log(err)) : alert("The item can not be deleted because there is remaining inventory!");
  }

  editItem = (id,quantity,salePrice) => {
    axios.put(`/smallbusiness/store/${id}`,{quantity,salePrice})
      .then(res=>this.setState({datArray: res.data}))
      .catch(err=>console.log(err))
  }

  searchItem = (search) => {
    axios.get(`/smallbusiness/store?search=${search}`)
      .then(res=>this.setState({datArray: res.data}))
      .catch(err=>console.log(err))
  }

  updateToggle = (bool) => {
    this.setState({toggle: bool})
  }

  editBus = (obj) => {
    const objName = obj.name.replace(/\s/g,"+")
    const {address,hours1,hours2,hours3} = obj;
    axios.put(`/smallbusiness/store/${obj.id}/${objName}`,{address,hours1,hours2,hours3})
      .then(res=>this.setState({busObj: res.data}))
      .catch(err=>console.log(err))
  }

  render(){
    // console.log(this.state.datArray)
    return (
      <div className="App">
        <Header searchItem={this.searchItem}/>
        <Body datArray={this.state.datArray} addItem={this.addItem} deleteItem={this.deleteItem} editItem={this.editItem} updateToggle={this.updateToggle}/>
        <Footer busObj={this.state.busObj} toggle={this.state.toggle} editBus={this.editBus}/>
      </div>
    )
  }
}

export default App
