import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'

export class Modal extends PureComponent {
  render() {
    return (
      <div>
        {createPortal(this.props.children, document.querySelector('#modal'))}
      </div>
    )
  }
}

export default Modal
