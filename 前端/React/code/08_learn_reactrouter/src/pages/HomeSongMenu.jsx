import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class HomeSongMenu extends PureComponent {
  constructor() {
    super()

    this.state = {
      songMenus: [
        { id: 111, name: '华语' },
        { id: 112, name: '流行' },
        { id: 113, name: '民谣' },
        { id: 114, name: '电子' }
      ]
    }
  }

  navigate(id) {
    const { navigate } = this.props.router
    navigate('/detail/' + id)
  }

  render() {
    const { songMenus } = this.state

    return (
      <div>
        <div>songMenu</div>
        <div>
          {songMenus.map((item) => {
            return (
              <div key={item.id} onClick={() => this.navigate(item.id)}>
                {item.name}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)
