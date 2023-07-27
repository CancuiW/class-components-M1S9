import React from 'react'
import Form from './Form'

import TodoList from './TodoList'

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, 
          completed: false
        },
        {
          name: 'Bake',
          id: 1528817084358,
          completed: true
        }
      ]
    }
  }
  handlerHideCompleted=()=>{
    this.setState({...this.state,
      todos:this.state.todos.filter(x=>x.completed===false)
    })

  }
  handleAdd=item=>{
    const newTodo={
      name:item,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      
      todos:[...this.state.todos, newTodo]
    })
  }
  handleToggle=e=>{
    
    this.setState({
      ...this.state,
      todos:this.state.todos.map(x=>{
        if (x.id===e){
          return {...x,completed:!x.completed}
        }
        return x
      })
    })
  }

  //All of your `handler` functions
  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList todos={this.state.todos} handleToggle={this.handleToggle} />
      
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handlerHideCompleted}>Hide Completed</button>

      </div>
    )
  }
}
