import styled from 'styled-components'

export const AppWrapper = styled.div`
  .section {
    border: 2px solid black;

    .title {
      color: blue;

      &:hover {
        color: skyblue;
      }
    }
  }
`

// attrs可以给props提供默认值
export const ContextWrapper = styled.div.attrs((props) => ({
  color: props.color || 'green'
}))`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
`
