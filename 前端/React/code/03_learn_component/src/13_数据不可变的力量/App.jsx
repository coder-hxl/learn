import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      books: [
        { name: '你不知道的JS', price: 99, count: 1 },
        { name: 'JS高级程序设计', price: 88, count: 1 },
        { name: 'React高级程序设计', price: 78, count: 2 }
      ]
    }
  }

  addBook() {
    const newBook = { name: 'Vue高级程序设计', price: 86, count: 1 }

    // 1.修改原state里的books, 重新设置
    // 在 PureComponent 无法重新渲染, 内部进行浅对比, books的指向还是一样
    // this.state.books.push(newBook)
    // this.setState({ books: this.state.books })

    // 2.拷贝books, 对newBooks进行修改
    const newBooks = [...this.state.books]
    newBooks.push(newBook)
    this.setState({ books: newBooks })
  }

  addBookCount(i) {
    // this.state.books[i].count++
    // this.setState({ books: this.state.books })

    const newBooks = [...this.state.books]
    newBooks[i].count++
    this.setState({ books: newBooks })
  }

  render() {
    const { books } = this.state

    return (
      <div>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={index}>
                <span>
                  {item.name} - {item.price} - {item.count}
                </span>
                <button onClick={() => this.addBookCount(index)}>+1</button>
              </li>
            )
          })}
        </ul>
        <button onClick={() => this.addBook()}>添加书籍</button>
      </div>
    )
  }
}

export default App
