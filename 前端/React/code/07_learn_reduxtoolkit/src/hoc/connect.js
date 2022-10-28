import { PureComponent } from 'react'
import { StoreContext } from './index'

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    class NewComponent extends PureComponent {
      constructor(props, context) {
        super()

        this.state = {
          stateObj: mapStateToProps(context.getState())
        }
      }

      componentDidMount() {
        this.context.subscribe(() => {
          this.setState({
            stateObj: mapStateToProps(this.context.getState())
          })
        })
      }

      render() {
        const { stateObj } = this.state
        const dispatchObj = mapDispatchToProps(this.context.dispatch)

        return (
          <WrapperComponent {...this.props} {...stateObj} {...dispatchObj} />
        )
      }
    }

    NewComponent.contextType = StoreContext

    return NewComponent
  }
}
