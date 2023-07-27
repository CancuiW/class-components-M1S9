import React from 'react'

export default class Form extends React.Component {
  constructor(){
    super();
    this.state={
      input:""
    }
  }

  handleSubmit=evt=>{
    evt.preventDefault()
    this.props.handleAdd(this.state.input)


  }
  handleInput=evt=>{
    this.setState({
      ...this.state,
      input:evt.target.value
    })

  }
  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleInput} /><button onClick={this.handleSubmit}>Submit</button>
         
          
        </form>
       
      </div>
    )
  }
}
