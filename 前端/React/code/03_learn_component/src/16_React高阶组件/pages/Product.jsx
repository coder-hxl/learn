import React, { PureComponent } from 'react'
import ThemeContext from '../context/theme-context'
import withTheme from '../hoc/with_theme'

// export class Product extends PureComponent {
//   render() {
//     return (
//       <ThemeContext.Consumer>
//         {(value) => (
//           <div>
//             Product - {value.color} - {value.fontSize}
//           </div>
//         )}
//       </ThemeContext.Consumer>
//     )
//   }
// }

export class Product extends PureComponent {
  render() {
    const { color, fontSize } = this.props
    return (
      <div>
        Product - {color} - {fontSize}
      </div>
    )
  }
}

export default withTheme(Product)
