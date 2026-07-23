import React, { Component } from 'react'
import List from './List'

class FilteredList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      type: 'All'
    }
  }

  handleQuery = e => this.setState({ query: e.target.value })
  handleType = e => this.setState({ type: e.target.value })

  getFiltered() {
    const { items = [] } = this.props
    const { query, type } = this.state
    return items.filter(it => {
      const matchesQuery = it.name.toLowerCase().includes(query.toLowerCase())
      const matchesType = type === 'All' || it.type === type
      return matchesQuery && matchesType
    })
  }

  render() {
    const types = ['All', ...new Set((this.props.items || []).map(i => i.type))]
    return (
      <div className="card">
        <div className="filter-controls">
          <input placeholder="Search" value={this.state.query} onChange={this.handleQuery} />
          <select value={this.state.type} onChange={this.handleType}>
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <List items={this.getFiltered()} />
      </div>
    )
  }
}

export default FilteredList
