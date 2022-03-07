type Person = {
  name: string
  friend?: {
    name: string
    age?: number
    girlFriend?: {
      name: string
    }
  }
}

const info: Person = {
  name: 'fh',
  friend: {
    name: 'code',
    girlFriend: {
      name: 'lili'
    }
  }
}


console.log(info.name);
console.log(info.friend?.name);
console.log(info.friend?.age);
console.log(info.friend?.girlFriend?.name)


export {}
