import React from 'react'

export default class Todo extends React.Component {

  handleClickItem=()=>{
   
    this.props.handleToggle(this.props.item.id)
    
  }
  render() {
    return (
      <li  onClick={this.handleClickItem}>{this.props.item.name} {this.props.item.completed ? <span>---completed</span> : <span></span>}</li>
    )
  }
}
