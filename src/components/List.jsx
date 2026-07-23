import React, { Component } from 'react'

class List extends Component {
  render() {
    const { items = [] } = this.props
    return (
      <ul className="list">
        {items.map(item => (
          <li key={item.id}>{item.name} <span className="muted">({item.type})</span></li>
        ))}
      </ul>
    )
  }
}

export default List
