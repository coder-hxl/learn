import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
      isAgree: true,
      hobbies: [
        { value: 'sing', text: '唱', isChecked: false },
        { value: 'skip', text: '跳', isChecked: false },
        { value: 'rap', text: 'rap', isChecked: false }
      ],
      fruit: ['apple']
    }
  }

  handleSubmit(e) {
    // 1.阻止默认行为
    e.preventDefault()

    // 2.获取表单数据
    const { username, password, hobbies, fruit } = this.state
    const hobbiesValue = hobbies
      .filter((item) => item.isChecked)
      .map((item) => item.value)

    console.log('用户名: ', username, '密码: ', password)
    console.log('爱好:', hobbiesValue)
    console.log('水果: ', fruit)

    // 3.发送网络请求
  }

  handleInputChange(e) {
    const keyName = e.target.name
    this.setState({ [keyName]: e.target.value })
  }

  handleAgreeChange(e) {
    this.setState({ isAgree: e.target.checked })
  }

  handleHobbiesChange(e, index) {
    const newHobbies = [...this.state.hobbies]
    newHobbies[index].isChecked = e.target.checked
    this.setState({ hobbies: newHobbies })
  }

  handelFruitChange(e) {
    const options = Array.from(e.target.selectedOptions, (item) => item.value)
    this.setState({ fruit: options })
  }

  render() {
    const { username, password, isAgree, hobbies, fruit } = this.state

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          {/* 1.用户名和密码 */}
          <div>
            <label>
              用户名:
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>
            <label>
              密码:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => this.handleInputChange(e)}
              />
            </label>
          </div>

          {/* 2.checkbox单选 */}
          <div>
            <label>
              <input
                type="checkbox"
                checked={isAgree}
                onChange={(e) => this.handleAgreeChange(e)}
              />
              同意协议
            </label>
          </div>

          {/* 3.checkbox多选 */}
          <div>
            您的爱好:
            {hobbies.map((item, index) => {
              return (
                <label key={item.value}>
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onChange={(e) => this.handleHobbiesChange(e, index)}
                  />
                  {item.text}
                </label>
              )
            })}
          </div>

          {/* 4.select */}
          <div>
            <label>
              <select
                value={fruit}
                onChange={(e) => this.handelFruitChange(e)}
                multiple
              >
                <option value="apple">苹果</option>
                <option value="banana">香蕉</option>
                <option value="pear">梨子</option>
              </select>
            </label>
          </div>

          <button type="submit">提交</button>
        </form>
      </div>
    )
  }
}

export default App
