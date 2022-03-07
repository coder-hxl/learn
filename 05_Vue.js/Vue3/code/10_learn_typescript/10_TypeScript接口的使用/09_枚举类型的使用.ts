// type Direction = 'left' | 'right' | 'top' | 'buttom'

enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BUTTOM
}

function turnDirection(direction: Direction) {
  switch (direction) {
    case Direction.LEFT:
      console.log('向左');
      break;
    case Direction.RIGHT:
      console.log('向右');
      break;
    case Direction.TOP:
      console.log('向上');
      break;
    case Direction.BUTTOM:
      console.log('向下');
      break;
    default:
      const foo: never = direction
      break;
  }
}

turnDirection(Direction.BUTTOM )
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BUTTOM)
