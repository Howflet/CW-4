import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState(prev => ({ count: prev.count + 1 }))
  }

  decrement = () => {
    this.setState(prev => ({ count: prev.count - 1 }))
  }

  render() {
    return (
      <div className="card">
        <h2>Counter</h2>
        <p>Current count: {this.state.count}</p>
        <div className="controls">
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter
