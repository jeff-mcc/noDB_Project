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
      datArray: []
    }
  }

  componentDidMount(){
    axios.get('/smallbusiness/store')
      .then(res=>{
        // console.log(res)
        this.setState({datArray: res.data})
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
      .catch(err=>console.log(err)) : alert("The item can not be deleted because of remaining inventory");
  }

  editItem = (id,quantity,salePrice) => {
    axios.put(`/smallbusiness/store/${id}`,{quantity,salePrice})
      .then(res=>this.setState({datArray: res.data}))
      .catch(err=>console.log(err))
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Body datArray={this.state.datArray} addItem={this.addItem}/>
        <Footer />
      </div>
    )
  }
}

export default App
