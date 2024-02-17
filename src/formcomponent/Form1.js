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
  render(){
    return(
      <div className='flex flex-col shadow-lg bg-gradient-to-b from-violet-500 text-white w-[500px] h-[600px] rounded-xl m-5 p-5'>
        <div className='w-full text-center text-3xl  h-[50px]'> 
            <h1 className='font-bold text-center'>User Information</h1>
        </div>
        <div className='m-1 grid grid-cols-3'>
            <label className='p-3 text-xl'>User Name</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className=' p-2 rounded-xl col-span-2'/>
        </div>
        <div className='m-1 grid grid-cols-3'>
            <label className='p-3 text-xl'>Email</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className='p-2 rounded-xl col-span-2'/>
        </div>
        <div className='m-1 grid grid-cols-3'>
            <label className='p-3 text-xl'>Password</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className='p-2 rounded-xl col-span-2'/>
        </div>
        <div className='m-1 grid grid-cols-3'>
            <label className='p-3 text-xl'>Retype Password</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange} className='p-2 rounded-xl col-span-2'/>
        </div>
    </div>

    )
  }
 }
 export default Form1
