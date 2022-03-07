// const info = {
//   name: 'fh',
//   age: 18
// }

// info.name = 'code'


type Method = 'GET' | 'POST'
function request(url: string, methods: Method) {}

// type Request = {
//   url: string
//   methods: Method
// }

const options = {
  url: 'https://www.fh.com',
  methods: 'POST' 
} as const

request(options.url, options.methods)


export {}
