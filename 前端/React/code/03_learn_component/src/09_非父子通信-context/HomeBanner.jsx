import userContext from './context/user-context'

function HomeBanner() {
  return (
    <div>
      <h2>HomeBanner</h2>
      {/* 通过 Consumer 的 children , 传入函数就能得到值 */}
      <userContext.Consumer>
        {(value) => <h3>{value.nickname}</h3>}
      </userContext.Consumer>
    </div>
  )
}

export default HomeBanner
