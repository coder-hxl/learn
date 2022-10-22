import ThemeContext from '../context/theme-context'

function withTheme(OriginComponent) {
  return function (props) {
    return (
      <ThemeContext.Consumer>
        {(value) => <OriginComponent {...value} {...props} />}
      </ThemeContext.Consumer>
    )
  }
}

export default withTheme
