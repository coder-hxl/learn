import React, { memo, useState, useTransition } from 'react'
import nameArray from './nameArray'

const App = memo(() => {
  const [showNames, setshowNames] = useState(nameArray)
  const [pending, startTransition] = useTransition()

  function searchChangeHandle(event) {
    startTransition(() => {
      const keyword = event.target.value
      const searchRes = nameArray.filter((item) => item.includes(keyword))
      setshowNames(searchRes)
    })
  }

  return (
    <div>
      <input type="text" onChange={searchChangeHandle} />
      <h2>用户列表: {pending && <i>Loading...</i>}</h2>
      <ul>
        {showNames.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
})

export default App
