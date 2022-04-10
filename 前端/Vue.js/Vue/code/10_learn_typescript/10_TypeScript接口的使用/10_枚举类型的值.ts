// type Direction = 'left' | 'right' | 'top' | 'buttom'

enum Direction {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  TOP = 'TOP',
  BUTTOM = 'BUTTOM'
}

function turnDirection(direction: Direction) {
  console.log(direction)

  switch (direction) {
    case Direction.LEFT:
      console.log('向左')
      break
    case Direction.RIGHT:
      console.log('向右')
      break
    case Direction.TOP:
      console.log('向上')
      break
    case Direction.BUTTOM:
      console.log('向下')
      break
    default:
      const foo: never = direction
      break
  }
}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BUTTOM)
