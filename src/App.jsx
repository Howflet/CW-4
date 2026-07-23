import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import Counter from './components/Counter'
import List from './components/List'
import FilteredList from './components/FilteredList'

class App extends Component {
  render() {
    const items = [
      { id: 1, name: 'Apple', type: 'Fruit' },
      { id: 2, name: 'Banana', type: 'Fruit' },
      { id: 3, name: 'Carrot', type: 'Vegetable' },
      { id: 4, name: 'Apricot', type: 'Fruit' },
      { id: 5, name: 'Broccoli', type: 'Vegetable' }
    ]

    return (
      <div className="app">
        <header>
          <h1>CW-04: React Fundamentals</h1>
        </header>
        <main>
          <HelloWorld />
          <Counter />
          <section>
            <h2>All Items</h2>
            <List items={items} />
          </section>
          <section>
            <h2>Filterable List</h2>
            <FilteredList items={items} />
          </section>
        </main>
      </div>
    )
  }
}

export default App
