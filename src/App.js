import React from 'react';
import './App.css';
import logo from './images/logo.png'
class App extends React.Component{

  constructor(props){
super(props)
this.state ={
  newItem:"",
  list:[]
}
  }

  deleteItem(id){
    // console.log("ttttt")
      const list =[...this.state.list];
      const updatedList = list.filter(item => item.id !== id)
      this.setState({list:updatedList})
      }
  updateInput(input){
    // console.log(input)
    this.setState({newItem:input})

  }

  addTtem(toDoValue){

   
    // console.log(toDoValue)
    if(toDoValue!==""){
      const newItem={
        id:Date.now(),
        value:toDoValue,
        isDone:false
      }
      const updateList = [...this.state.list,newItem]
      this.setState({list:updateList})
      console.log(this.state.list)
    }

  }

  searchItem(item){
   const list =[...this.state.list];
   const stringList =JSON.stringify(list)
   const updatedList =stringList.forEach(item => item.value===item)
   this.setState({list:updatedList})



  }
 
  render(){
    // console.log("aaA")
   
    
     

    return (
      <div>
        {/* {JSON.stringify(this.state.newItem)} */}
        <img src={logo} width = {100} height ={100} className = 'logo' alt='ReactJS'/>
        
       

     
     
      
        <div className='container'>
          Add an item...
          <br/>
          <input 
          type='text'
          className='input-text'
          placeholder='Enter Item Name'
        value={this.state.newItem}
         onChange={e => this.updateInput(e.target.value)}   
       />
          <button 
          className='add-btn'
          onClick={a => this.addTtem(this.state.newItem)}

          // onClick={()=> this.addItem(this.state.newItem)}


          >Add</button>

          <div className='list'>
            <ul>
              {/*id>
              <input type='checkbox' name='' id=''/>
              Learn Js
              <button className='btn'>Delete</button>
              </li> */}
              {
                this.state.list.map(item =>{
                  return (
                    <li key={item.id}>
              <input type='checkbox' name='' id=''/>
                {item.value}
              <button className='btn' onClick={()=>this.deleteItem(item.id)}
                >Delete</button>
              </li>

                  
                )}
              )}
            </ul>
          </div>


        </div>
      </div>

    )
  }
}

export default App

