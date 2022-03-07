const h = (tag, props, children) => {
  // vnode -> javascript对象 -> {}
  return {
    tag,
    props,
    children
  }
}


const mount = (vnode, container) => {
  // vnode -> element
  // 1.创建出真实的原生，并且在vnode上保留el
  const el = vnode.el = document.createElement(vnode.tag)

  // 2.处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]

      if (key.startsWith('on')) { // 对事件监听的判断
        el.addEventListener(key.slice(2).toLowerCase(), value)
      } else {
        el.setAttribute(key, value)
      }
    }
  }

  // 3.处理children
  if (vnode.children) {
    if (typeof vnode.children == 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      });
    }
  }

  // 4.将el挂载到container上
  container.appendChild(el)
}


const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    const parentElement = n1.el.parentElement
    parentElement.removeChild(n1.el)
    mount(n2, parentElement)
  } else {
    // 1.取出element对象，并且在n2中进行保存
    const el = n2.el = n1.el

    // 2.处理props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}
    // 2.1.获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key]
      const newValue = newProps[key]
      if (oldValue !== newValue) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase(), newValue)
        } else {
          el.setAttribute(key, newValue)
        }
      }
    }

    // 2.2删除旧的props
    for (const key in oldProps) {
      if (key.startsWith('on')) {
        const value = oldProps[key]
        el.removeEventListener(key.slice(2).toLowerCase(), value)
      }
      if (!(key in newProps)) {
        el.removeAttribute(key)
      }
    }

    // 3.处理children
    const oldChildren = n1.children
    const newChildren = n2.children

    if (typeof newChildren === 'string') { // 情况一：newChildren本身是一个字符串
      // 边界情况
      if (typeof oldChildren === 'string') {
        if (oldChildren !== newChildren) {
          el.textContent = newChildren
        }
      } else {
        el.innerHTML = newChildren
      }
    } else { // 情况二：newChildren本身是一个数组
      if (typeof oldChildren === 'string') {
        el.innerHTML = ''
        newChildren.forEach(item => {
          mount(item, el)
        })
      } else {
        // oldChildren：[v1, v2, v3, v8, v9]
        // newChildren：[v1, v5, v6]
        // 1.前面有相同节点的原生进行patch操作
        const commonLength = Math.min(oldChildren.length, newChildren.length) 
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }

        // oldChildren.length < newChildren.length
        if (oldChildren.length < newChildren.length) {
          newChildren.slice(oldChildren.length).forEach(item => {
            mount(item, el)
          })
        }

        // oldChildren.length > newChildren.length
        if (oldChildren.length > newChildren.length) {
          oldChildren.slice(newChildren.length).forEach(item => {
            el.removeChild(item.el)
          })
        }

      }
    }
  }
} 