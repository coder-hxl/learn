type identify = number | string

interface IMomentService {
  create: (userId: identify, content: string) => any
  getMomentById: (momentId: identify) => any
  getMomentList: (offset: identify, size: identify) => any
}

export { IMomentService }
