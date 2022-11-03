import React, { memo, useState, useDeferredValue } from 'react'
import nameArray from './nameArray'

const App = memo(() => {
  const [showNames, setshowNames] = useState(nameArray)
  const deferredNames = useDeferredValue(showNames)

  function searchChangeHandle(event) {
    const keyword = event.target.value
    const searchRes = nameArray.filter((item) => item.includes(keyword))
    setshowNames(searchRes)
  }

  return (
    <div>
      <input type="text" onChange={searchChangeHandle} />
      <h2>用户列表: </h2>
      <ul>
        {deferredNames.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
})

export default App
