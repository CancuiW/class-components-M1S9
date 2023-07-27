import React from 'react'
import Todo from './Todo'


class TodoList extends React.Component{
 render(){
  return(
    <ul>
      {
        this.props.todos.map(item=>{
          return (<Todo item={item} key={item.id} handleToggle={this.props.handleToggle} />)
        })
      }
    </ul>
   
  )
 }
 
 
}
export default TodoList;
