class App extends React.Component {
  constructor() {
    super()

    this.state = {
      message: 'Hello World'
    }
  }

  render() {
    const { message } = this.state

    return (
      <div>
        {/* 这是注释 */}
        <h1>{message}</h1>
      </div>
    )
  }
}
