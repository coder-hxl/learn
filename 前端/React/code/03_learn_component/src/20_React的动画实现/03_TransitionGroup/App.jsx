import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './style.css'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      books: [
        { id: 100, name: '你不知道的JS', price: 99 },
        { id: 101, name: 'JS高级程序设计', price: 89 },
        { id: 102, name: 'Vue高级程序设计', price: 88 }
      ]
    }
  }

  addBook() {
    const books = [...this.state.books]
    books.push({
      id: new Date().getTime(),
      name: 'React高级程序设计',
      price: 88
    })
    this.setState({ books })
  }

  deleteBook(index) {
    const books = [...this.state.books]
    books.splice(index, 1)
    this.setState({ books })
  }

  render() {
    const { books } = this.state

    return (
      <div>
        <h2>App</h2>
        <TransitionGroup component="ul">
          {books.map((item, index) => {
            return (
              <CSSTransition key={item.id} classNames="book" timeout={2000}>
                <li>
                  <span>
                    {item.name} - {item.price}
                  </span>
                  <button onClick={(e) => this.deleteBook(index)}>移除</button>
                </li>
              </CSSTransition>
            )
          })}
        </TransitionGroup>

        <button onClick={(e) => this.addBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App
