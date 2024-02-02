import React, { Component } from 'react'
import './index.css'

export default class ColorChanger extends Component {
state={color:""}

colorChanger = event =>{
    this.setState({color:event.target.value})
}
  render() {

    const{color}=this.state

    return (
  <div className='flex'>
  <h1>Colour Changer</h1>
<input onChange={this.colorChanger} value={color} placeholder='Enter the colour'/>
<div div id="bg-container" style={{ backgroundColor: color }}></div>
</div>
    )
  }
}
