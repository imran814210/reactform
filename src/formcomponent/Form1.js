import React, { Component } from 'react'


 class Form1 extends Component{
  constructor(props){
    super(props)
    this.state={
        username:''
    }
  }
  handleUsernameChange=(e)=>{
      this.setState({
        username:e.target.value
      })
  }
  handleSUbmit=(e)=>{
    alert('Submit Ok');
  }
  render(){
    return(
      <form onSubmit={this.handleSUbmit}>
          <div className='flex flex-col shadow-lg bg-gradient-to-b from-violet-500 w-[500px] h-[600px] rounded-xl m-5 p-5'>
              <div className='w-full text-center text-3xl  h-[50px]'> 
                  <h1 className='font-bold text-center text-white '>User Information</h1>
              </div>
              <div className='m-1 grid grid-cols-3 items-center'>
                  <label className='p-3 text-xl'> User Name</label>
                  <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className=' p-2 h-[50px] rounded-xl col-span-2'/>
              </div>
              <div className='m-1 grid grid-cols-3 items-center'>
                  <label className='p-3 text-xl'>Email</label>
                  <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className='p-2 h-[50px] rounded-xl col-span-2'/>
              </div>
              <div className='m-1 grid grid-cols-3 items-center'>
                  <label className='p-3 text-xl'>Password</label>
                  <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className='p-2 h-[50px] rounded-xl col-span-2'/>
              </div>
              <div className='m-1 grid grid-cols-3 items-center'>
                  <label className='p-3 text-xl'>Retype Password</label>
                  <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className='p-2 h-[50px] rounded-xl col-span-2'/>
              </div>  
              <div className='m-1 grid grid-cols-3 items-center'>
                  <label className='p-3 text-xl'>User Type</label>
                  <select className='p-2 h-[50px] rounded-xl col-span-2' value={this.state.username} onChange={this.handleUsernameChange}>
                    <option value="olduser"> OLD USER</option>
                    <option value="onewuser"> NEW USER</option>
                  </select>
              </div> 
              <div className='flex justify-center'>
                  <button type='submit' className='bg-violet-400 rounded-xl text-white text-xl m-3 p-2 w-2/3 hover:bg-violet-600'>Submit</button>       
              </div>
           </div>
      </form>
    )
  }
 }
 export default Form1
